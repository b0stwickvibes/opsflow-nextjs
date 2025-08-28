import { Quote } from 'lucide-react';
import Image from 'next/image';

import Logo from '@/components/layout/logo';
import { Card, CardContent } from '@/components/ui/card';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <section className="section-padding container grid min-h-screen max-w-3xl place-items-center">
      <div>
        <Card className="md:bg-sidebar/70 relative grid min-h-118 grid-cols-1 gap-0 overflow-hidden border-0 bg-transparent p-0 md:grid-cols-2">
          {/* Left side with testimonial */}
          <div className="relative isolate min-h-80 flex-1 overflow-hidden">
            <div className="via-sidebar/30 from-sidebar/70 to-sidebar/10 absolute inset-x-0 bottom-0 z-[-1] h-0 bg-gradient-to-t md:h-12" />
            <div className="bg-background absolute top-0 left-1/2 -z-1 h-200 w-300 -translate-x-1/2 translate-y-1/5 rounded-full blur-2xl will-change-transform md:hidden"></div>

            <div className="bg-background/10 absolute inset-0 -z-2 backdrop-blur-[85px] will-change-transform md:backdrop-blur-[92px]" />
            <Image
              src="/images/noise.webp"
              alt="Noise texture"
              fill
              className="mask-b-from-40% mask-b-to-80% object-cover opacity-30 md:opacity-20"
            />
            <GradientSVG className="absolute top-0 right-0 -z-10 scale-250 opacity-80 md:scale-100 md:opacity-100" />
            <div className="flex h-full flex-col justify-between p-8">
              <Logo iconClassName="[&>path]:fill-foreground" />

              <div className="space-y-4">
                <Quote className="fill-foreground text-foreground size-10 rotate-180 opacity-10 md:size-16" />
                <blockquote className="mt-0.5 text-lg font-medium">
                  Finally, A product that is all about us!, full automation at
                  our fingertips!!!
                </blockquote>

                <figure className="flex items-center gap-4">
                  <Image
                    src="/avatar.webp"
                    alt="OneBadDev Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <figcaption>
                    <cite className="block text-xs font-bold not-italic">
                      OneBadDev
                    </cite>
                    <p className="text-[0.625rem]">@elldecodes</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* Right side with children content */}
          <CardContent className="md:bg-sidebar/70 relative flex flex-1 flex-col justify-center px-0 py-8 md:p-10 md:py-15">
            {children}
          </CardContent>
        </Card>

        {/* Terms and Privacy */}
        <div className="text-muted-foreground mx-auto mt-8 max-w-md text-center text-xs">
          By continuing, you agree to Supabase&apos;s Terms of Service and
          Privacy Policy, and to receive periodic emails with updates.
        </div>
      </div>
    </section>
  );
}

const GradientSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={327}
      height={303}
      fill="none"
      {...props}
    >
      <path
        fill="#D9D9D9"
        d="M-71.305 280.86-150.61 96.276-95.707-8.827 62.906 26.207l51.767 93.077L-71.305 280.86Z"
      />
      <path
        fill="url(#a)"
        d="M-71.305 280.86-150.61 96.276-95.707-8.827 62.906 26.207l51.767 93.077L-71.305 280.86Z"
      />
      <path
        stroke="url(#b)"
        strokeWidth={0.3}
        d="M-71.305 280.86-150.61 96.276-95.707-8.827 62.906 26.207l51.767 93.077L-71.305 280.86Z"
      />
      <path
        fill="url(#c)"
        d="m170.12 132.555 96.526-169.871c23.977-4.977-24 45.673 0 88.424 38.178 68.006 141.589 148.489 121.896 198.953-32.073 82.188-145.547 23.502-188.176 0-34.103-18.801-34.373-86.171-30.246-117.506Z"
      />
      <path
        fill="url(#d)"
        d="M-223.33 287.284 207.724-6.649l61.871-31.659-22.252 93.349-74.353 196.285c-13.207 23.76-52.934 57.023-106.194 0-46.786-50.092-221.56-1.886-290.126 35.958l-21.738 14.823c4.8-4.551 12.253-9.588 21.738-14.823Z"
      />
      <g filter="url(#e)">
        <path
          fill="url(#f)"
          d="m173.621 215.759 78.174-268.327 2.211 154.951-80.385 113.376Z"
        />
      </g>
      <defs>
        <linearGradient
          id="a"
          x1={-17.969}
          x2={-17.766}
          y1={-8.827}
          y2={281.018}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#9D83E7" />
          <stop offset={0.516} stopColor="#D445E7" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={-17.969}
          x2={-17.969}
          y1={-8.827}
          y2={280.86}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#10CBF4" />
          <stop offset={1} stopColor="#10CBF4" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="c"
          x1={168.309}
          x2={318.523}
          y1={206.201}
          y2={206.258}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9259ED" />
          <stop offset={0.514} stopColor="#CF54EE" />
          <stop offset={1} stopColor="#FB8684" />
        </linearGradient>
        <linearGradient
          id="d"
          x1={75.661}
          x2={75.842}
          y1={-38.308}
          y2={292.574}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B956EE" />
          <stop offset={1} stopColor="#9672FF" />
        </linearGradient>
        <linearGradient
          id="f"
          x1={238.974}
          x2={140.96}
          y1={29.317}
          y2={159.747}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB07FF" />
          <stop offset={0.505} stopColor="#FF6847" />
          <stop offset={1} stopColor="#FF474A" />
        </linearGradient>
        <filter
          id="e"
          width={108.658}
          height={296.6}
          x={159.484}
          y={-66.705}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_434_3989"
            stdDeviation={7.068}
          />
        </filter>
      </defs>
    </svg>
  );
};
