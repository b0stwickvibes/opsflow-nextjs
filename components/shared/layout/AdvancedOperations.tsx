"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import { AuroraText } from "@/components/shared/enhanced";
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
    <section className={cn("py-16 lg:py-24 bg-grid-pattern", className)}>
      <div className="container">
        <ContainerScroll
          titleComponent={
            <>
              <p className="mx-auto mb-4 enterprise-body">
                Advanced Restaurant Operations
              </p>
              <h1 className="enterprise-headline">
                <span className="pr-3 text-muted-foreground/60">Build</span>
                <AuroraText colors={["#ff6449", "#ff6449", "#6248fe", "#6248fe"]}>Faster</AuroraText>
              </h1>
            </>
          }
        >
          <Image
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/dashboard/admin-dashboard-1.png"
            alt="OpsFlow AI Dashboard"
            width={1400}
            height={720}
            unoptimized
            className="mx-auto h-full rounded-2xl object-cover object-left-top"
          />
        </ContainerScroll>
        
        {/* Feature grid section with proper grid borders */}
        <div className="overflow-hidden">
          <div className="relative container">
            <div className="mt-32 lg:mt-48 grid lg:grid-cols-2 border relative">
              {/* Top border line that aligns with grid */}
              <div className="absolute -top-px left-0 right-0 h-px bg-border" />
              {/* Left grid cell - 1x1 with all borders */}
              <div className="border-r border-border p-12 lg:p-16">
                <h2 className="mb-6 text-display-xl">
                  Sophisticated Restaurant Operations
                </h2>
                <p className="enterprise-body">
                  Temperature monitoring, incident management, corrective actions, and compliance auditing — all powered by intelligent automation for modern restaurants.
                </p>
              </div>
              
              {/* Right grid - 2x2 with proper borders */}
              <div className="grid grid-cols-2">
                {features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "p-8 lg:p-12 rounded-lg transition-colors",
                      "hover:bg-muted/30",
                      // Top border for all items
                      idx < 2 ? "" : "border-t border-border",
                      // Right border for left column items
                      idx % 2 === 0 ? "border-r border-border" : ""
                    )}
                  >
                    <feature.icon className="size-6 mb-4" />
                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
      className="relative flex h-[50rem] items-center justify-center overflow-hidden"
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
