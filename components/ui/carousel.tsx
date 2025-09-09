"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = {
  scrollTo: (index: number) => void
  selectedScrollSnap: () => number
  scrollSnapList: () => number[]
  on: (event: string, callback: () => void) => void
}

type CarouselProps = {
  opts?: {
    align?: "start" | "center" | "end"
    loop?: boolean
  }
  // Accept optional plugins for compatibility with components that pass them; ignored by this lightweight impl
  plugins?: any[]
  setApi?: (api: CarouselApi) => void
  className?: string
  children: React.ReactNode
}

type CarouselContextProps = {
  carouselRef: React.MutableRefObject<HTMLDivElement | null>
  api: CarouselApi | undefined
  opts?: CarouselProps['opts']
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  CarouselProps
>(({ opts, setApi, className, children, ...props }, ref) => {
  const [emblaRef, setEmblaRef] = React.useState<HTMLDivElement | null>(null)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [itemsCount, setItemsCount] = React.useState(0)

  const scrollPrev = React.useCallback(() => {
    if (emblaRef) {
      const container = emblaRef.querySelector('.carousel-container') as HTMLDivElement
      if (container) {
        const itemWidth = container.children[0]?.getBoundingClientRect().width || 0
        const newIndex = Math.max(0, currentIndex - 1)
        container.scrollTo({
          left: newIndex * itemWidth,
          behavior: 'smooth'
        })
        setCurrentIndex(newIndex)
      }
    }
  }, [emblaRef, currentIndex])

  const scrollNext = React.useCallback(() => {
    if (emblaRef) {
      const container = emblaRef.querySelector('.carousel-container') as HTMLDivElement
      if (container) {
        const itemWidth = container.children[0]?.getBoundingClientRect().width || 0
        const newIndex = Math.min(itemsCount - 1, currentIndex + 1)
        container.scrollTo({
          left: newIndex * itemWidth,
          behavior: 'smooth'
        })
        setCurrentIndex(newIndex)
      }
    }
  }, [emblaRef, currentIndex, itemsCount])

  const scrollTo = React.useCallback((index: number) => {
    if (emblaRef) {
      const container = emblaRef.querySelector('.carousel-container') as HTMLDivElement
      if (container) {
        const itemWidth = container.children[0]?.getBoundingClientRect().width || 0
        container.scrollTo({
          left: index * itemWidth,
          behavior: 'smooth'
        })
        setCurrentIndex(index)
      }
    }
  }, [emblaRef])

  const api: CarouselApi = React.useMemo(
    () => ({
      scrollTo,
      selectedScrollSnap: () => currentIndex,
      scrollSnapList: () => Array.from({ length: itemsCount }, (_, i) => i),
      on: (event: string, callback: () => void) => {
        // Simple implementation for "select" event
        if (event === "select") {
          // Would call callback when selection changes
        }
      }
    }),
    [scrollTo, currentIndex, itemsCount]
  )

  React.useEffect(() => {
    if (!emblaRef) return

    const container = emblaRef.querySelector('.carousel-container')
    if (container) {
      setItemsCount(container.children.length)
    }

    setCanScrollPrev(currentIndex > 0)
    setCanScrollNext(currentIndex < itemsCount - 1)

    if (setApi) {
      setApi(api)
    }
  }, [emblaRef, currentIndex, itemsCount, setApi, api])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef: { current: emblaRef },
        api,
        opts,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      }}
    >
      <div
        ref={(node) => {
          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
          setEmblaRef(node)
        }}
        className={cn("relative", className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", className)}
    >
      <div
        className="carousel-container flex transition-transform duration-200 ease-out"
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("min-w-0 shrink-0 grow-0", className)}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "h-8 w-8 rounded-full",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "h-8 w-8 rounded-full",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
