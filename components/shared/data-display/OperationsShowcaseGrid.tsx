"use client";

import { motion } from "framer-motion";
import React, { useRef, useId, useState, useEffect } from "react";
import { RefObject } from "react";

import { cn } from "@/lib/utils";

import { Globe } from "@/components/shared/enhanced";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckSquare, Building2, Wrench, Users, Thermometer, BarChart3, Globe as GlobeIcon } from "lucide-react";

const OperationsShowcaseGrid = () => {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-5">
          {/* 1st Card - Workflow Integration */}
          <Card className="w-full lg:w-[660px] relative h-96 rounded-3xl border">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Seamless Integration
              </h3>
              <p className="text-muted-foreground/70 mt-2">
                Connect all your restaurant systems in one unified platform. 
                From POS to inventory, everything works together seamlessly.
              </p>
            </CardHeader>
            <CardContent ref={containerRef1} className="relative ml-5">
              <IconCard
                ref={div1Ref as React.RefObject<HTMLDivElement>}
                icon={Thermometer}
                className="mb-3"
                label="Temperature"
              />
              <IconCard
                ref={div2Ref as React.RefObject<HTMLDivElement>}
                icon={Users}
                className="translate-x-32"
                label="Staff"
              />
              <IconCard
                ref={div3Ref as React.RefObject<HTMLDivElement>}
                icon={BarChart3}
                className="mt-3"
                label="Analytics"
              />
              <IconCard
                ref={div5Ref as React.RefObject<HTMLDivElement>}
                icon={CheckSquare}
                className="absolute right-12 top-1/2 -translate-y-1/2"
                label="Tasks"
              />
              <div
                ref={div4Ref as React.RefObject<HTMLDivElement>}
                className="z-99 bg-muted absolute left-1/2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border"
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div1Ref}
                curvature={40}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div2Ref}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div3Ref}
                curvature={-40}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div4Ref}
                toRef={div5Ref}
              />
            </CardContent>
          </Card>

          {/* 2nd Card - Real-time Monitoring */}
          <Card className="w-full md:w-[332px] h-96 rounded-3xl border">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Real-time Monitoring
              </h3>
              <p className="text-muted-foreground/70">
                Monitor all operations live with instant alerts and automated responses.
              </p>
            </CardHeader>
            <CardContent
              ref={containerRef2}
              className="relative flex h-full flex-col items-center justify-between"
            >
              <IconCard
                ref={div6Ref as React.RefObject<HTMLDivElement>}
                icon={Thermometer}
                className="mb-3"
                label="Monitor"
              />

              <IconCard
                ref={div7Ref as React.RefObject<HTMLDivElement>}
                icon={CheckSquare}
                className="mt-3"
                label="Action"
              />

              <AnimatedBeam
                duration={3}
                containerRef={containerRef2}
                fromRef={div6Ref as React.RefObject<HTMLDivElement>}
                direction="vertical"
                curvature={40}
                toRef={div7Ref as React.RefObject<HTMLDivElement>}
              />
            </CardContent>
          </Card>

          {/* 3rd card - Equipment Management */}
          <Card className="relative flex h-96 w-full flex-col rounded-3xl border md:w-[330px]">
            <CardContent className="flex-1 flex items-center justify-center">
              <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl">
                <Wrench className="h-16 w-16 text-orange-600" />
              </div>
            </CardContent>
            <CardHeader className="mt-auto">
              <h3 className="text-2xl font-semibold tracking-tight">
                Equipment & Maintenance
              </h3>
              <p className="text-muted-foreground/70">
                Preventive maintenance scheduling and real-time equipment monitoring to avoid costly breakdowns.
              </p>
            </CardHeader>
          </Card>
          
          {/* 4th card - Global Operations */}
          <Card className="w-full lg:w-[660px] h-96 overflow-hidden rounded-3xl border">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Multi-Location Management
              </h3>
              <p className="text-muted-foreground/70">
                Manage unlimited restaurant locations with unified reporting, 
                standardized procedures, and seamless location switching.
              </p>
            </CardHeader>

            <CardContent className="relative h-full flex items-end justify-center pb-0">
              <div className="w-full max-w-[600px] aspect-square translate-y-[225px]">
                <Globe className="" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { OperationsShowcaseGrid };

// Restaurant Operations Icon Card Component
const IconCard = ({
  icon: Icon,
  className,
  label,
  ref,
}: {
  icon: React.ElementType;
  className?: string;
  label: string;
  ref: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-muted relative z-10 flex size-14 items-center justify-center rounded-xl border",
        className,
      )}
    >
      <Icon className="h-5 w-5 text-primary" />
      <HandleIcon className="absolute -top-3 left-1/2 size-6 -translate-x-1/2" />
      <HandleIcon className="absolute -bottom-3 left-1/2 size-6 -translate-x-1/2" />
      <HandleIcon className="absolute -left-3 top-1/2 size-6 -translate-y-1/2 rotate-90" />
      <HandleIcon className="absolute -right-3 top-1/2 size-6 -translate-y-1/2 rotate-90" />
    </div>
  );
};

const HandleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="14"
      height="5"
      viewBox="0 0 14 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.543457"
        y1="0.972656"
        x2="0.543457"
        y2="4.625"
        stroke="currentColor"
        strokeOpacity="0.3"
      />
      <line
        x1="4.54346"
        y1="0.972656"
        x2="4.54346"
        y2="4.625"
        stroke="currentColor"
        strokeOpacity="0.3"
      />
      <line
        x1="8.54346"
        y1="0.972656"
        x2="8.54346"
        y2="4.625"
        stroke="currentColor"
        strokeOpacity="0.3"
      />
      <line
        x1="12.5435"
        y1="0.972656"
        x2="12.5435"
        y2="4.625"
        stroke="currentColor"
        strokeOpacity="0.3"
      />
    </svg>
  );
};

// Animated Beam Component - Adapted from Magic UI
// Uses your existing framer-motion instead of motion/react
export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  direction?: "horizontal" | "vertical";
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "hsl(var(--primary))",
  gradientStopColor = "hsl(var(--primary))",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  direction = "horizontal",
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates =
    direction === "vertical"
      ? reverse
        ? {
            x1: ["0%", "0%"],
            x2: ["0%", "0%"],
            y1: ["90%", "-10%"],
            y2: ["100%", "0%"],
          }
        : {
            x1: ["0%", "0%"],
            x2: ["0%", "0%"],
            y1: ["10%", "110%"],
            y2: ["0%", "100%"],
          }
      : reverse
        ? {
            x1: ["90%", "-10%"],
            x2: ["100%", "0%"],
            y1: ["0%", "0%"],
            y2: ["0%", "0%"],
          }
        : {
            x1: ["10%", "110%"],
            x2: ["0%", "100%"],
            y1: ["0%", "0%"],
            y2: ["0%", "0%"],
          };

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();

        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        updatePath();
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    updatePath();

    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute top-0 left-0 transform-gpu stroke-2",
        className,
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={"userSpaceOnUse"}
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
