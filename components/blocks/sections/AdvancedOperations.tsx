"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Thermometer, ClipboardList, AlertTriangle, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Temperature Monitoring",
    description:
      "LoRaWAN and Bluetooth sensor integration with real-time alerts and automated corrective actions for all equipment and storage areas.",
    icon: Thermometer,
  },
  {
    title: "Smart Work Orders",
    description:
      "Mobile inspections with image attachments, progress tracking, and real-time communication for streamlined operations.",
    icon: ClipboardList,
  },
  {
    title: "Incident Management",
    description:
      "Comprehensive reporting with automated corrective actions, instant notifications, and faster resolution workflows.",
    icon: AlertTriangle,
  },
  {
    title: "Compliance Audits",
    description:
      "Complete HACCP and FSMA compliance management with organized reporting and historical documentation.",
    icon: Shield,
  },
];

const AdvancedOperations = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <ContainerScroll
          titleComponent={
            <>
              <p className="mx-auto mb-4 text-muted-foreground md:text-xl">
                Advanced Restaurant Operations
              </p>
              <h1 className="text-7xl font-semibold tracking-tighter md:text-8xl xl:text-[10rem]">
                <span className="pr-6 text-muted-foreground/40">Build</span>
                <AuroraText
                  colors={["#ff6449", "#ff6449", "#6248fe", "#6248fe"]}
                >
                  Faster
                </AuroraText>
              </h1>
            </>
          }
        >
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-1.png"
            alt="OpsFlow AI Dashboard"
            height={720}
            width={1400}
            className="mx-auto h-full rounded-2xl object-cover object-left-top"
            draggable={false}
          />
        </ContainerScroll>
        
        {/* Feature grid section */}
        <div className="overflow-hidden">
          <div className="relative container">
            <div className="absolute -top-px left-1/2 h-px w-screen -translate-x-1/2 bg-border" />
            <div className="mt-20 grid gap-8 lg:grid-cols-10">
              <div className="lg:col-span-4">
              <h2 className="mb-8 text-5xl font-medium text-balance md:text-7xl">
                  Sophisticated Restaurant Operations
                </h2>
                <p className="text-xl text-muted-foreground">
                  Temperature monitoring, incident management, corrective actions, and compliance auditing 
                  — all powered by intelligent automation for modern restaurants.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6">
                {features.map((feature, idx) => (
                  <div key={idx}>
                    <feature.icon className="size-6" />
                    <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AdvancedOperations };

// Below is the modified component from Aceternity UI
// Original source: npx shadcn@latest add https://ui.aceternity.com/registry/container-scroll-animation.json
// Modified to follow our coding standards and design system
// We respect copyright and attribution to the original creators

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  // Enhanced animation with eased curves and more precise control points
  const rotate = useTransform(scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    [25, 15, 10, 5, 0]
  );
  const scale = useTransform(scrollYProgress, 
    [0, 0.25, 0.75, 1], 
    [...scaleDimensions(), scaleDimensions()[1], scaleDimensions()[1]]
  );
  const translate = useTransform(scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    [0, -50, -90, -120]
  );

  return (
    <div
      className="relative flex h-[65rem] items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div
        className="relative w-full will-change-transform"
        style={{
          perspective: "1500px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
        willChange: "transform",
      }}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      className="div mx-auto max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        transformStyle: "preserve-3d",
        transformOrigin: "center bottom",
        willChange: "transform",
      }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 30 }}
      className="-4 mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] p-2 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.5)] md:h-[40rem] md:p-6"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 md:rounded-2xl md:p-4 dark:bg-zinc-900 shadow-inner">
        {children}
      </div>
    </motion.div>
  );
};
