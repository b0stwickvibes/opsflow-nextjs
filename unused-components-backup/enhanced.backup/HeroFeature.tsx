"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Particles } from "@/components/magicui/particles";
import { Button } from "@/components/ui/button";

interface HeroFeatureProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
}

const HeroFeature = ({ 
  title = "Restaurant Operations Made Simple and Efficient",
  subtitle = "HACCP Compliance, Staff Management, Food Safety",
  buttonText = "Start Free Trial",
  buttonHref = "/pricing",
  onButtonClick
}: HeroFeatureProps) => {
  return (
    <section className="py-32 relative">
      <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden relative">
        <p className="text-muted-foreground text-center">
          {subtitle}
        </p>
        <h1 className="relative z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
          <span
            className="overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              perspective: "600px",
            }}
          >
            {title
              .split(" ")
              .map((word, i) => (
                <motion.span
                  className="relative inline-block px-[6px] leading-[none]"
                  key={i}
                  initial={{
                    opacity: 0,
                    y: "70%",
                    rotateX: "-28deg",
                  }}
                  animate={{
                    opacity: 1,
                    y: "0%",
                    rotateX: "0deg",
                  }}
                  transition={{
                    delay: i * 0.08 + 0.1,
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  {word === "Efficient" ? (
                    <span className="font-playfair italic text-primary">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
          </span>
        </h1>

        {/* Restaurant-themed particles */}
        <Particles
          className="absolute inset-0 z-0"
          quantity={300}
          ease={80}
          color="#3b82f6"
          refresh
        />

        {/* Background visual element */}
        <div className="h-92 -translate-y-15 relative w-full overflow-hidden">
          <div className="h-92 bg-background absolute z-10 w-full blur-xl" />
          <div className="z-13 h-92 -translate-y-62 bg-background absolute w-full blur-2xl" />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="z-12 absolute w-full overflow-hidden"
          >
            {/* Restaurant-themed gradient background */}
            <div className="h-215 -translate-y-90 -rotate-76 w-full bg-gradient-to-br from-primary/20 via-blue-500/10 to-indigo-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>

        <Button
          variant="secondary"
          className="text-md -mt-15 group flex w-fit items-center justify-center gap-2 rounded-full px-6 py-3 tracking-tight relative z-20"
          onClick={onButtonClick}
        >
          {buttonText}
          <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
        </Button>
      </div>
    </section>
  );
};

export { HeroFeature };