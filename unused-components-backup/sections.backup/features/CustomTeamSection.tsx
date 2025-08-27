"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Github, Twitter, Linkedin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { registerComponentLayout } from "@/lib/style-system/layout-differentiation";

const teamMembers = [
  {
    name: "Michael Chen",
    role: "CEO & Former Restaurant Owner",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    bio: "Former owner of a Michelin-starred restaurant chain, Michael brings 15+ years of restaurant operations experience to OpsFlow.",
    expertise: "HACCP, Multi-location Management",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Sarah Johnson",
    role: "Chief Product Officer",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    bio: "Previously led product at Toast, Sarah has shaped restaurant tech solutions for over 10,000 establishments across North America.",
    expertise: "POS Integration, Kitchen Operations",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Carlos Rodriguez",
    role: "Head of Compliance",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    bio: "Former FDA inspector with deep expertise in food safety regulations, Carlos ensures OpsFlow exceeds compliance standards.",
    expertise: "HACCP, FDA Regulations, Health Department Compliance",
    social: { linkedin: "#" },
  },
  {
    name: "Jessica Kim",
    role: "Customer Success Director",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    bio: "With experience managing operations for a 50-location restaurant group, Jessica understands the challenges our customers face.",
    expertise: "Staff Management, Inventory Control",
    social: { twitter: "#", linkedin: "#" },
  },
];

export function CustomTeamSection() {
  useEffect(() => {
    registerComponentLayout("CustomTeamSection", "site");
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-6 py-4 lg:py-8">
          <Badge variant="outline" className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm">
            <Users className="size-4" />
            <span>Restaurant Operations Experts</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            Restaurant Industry Veterans
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            Our team brings decades of restaurant operations experience to every feature we build.
          </p>
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-16 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:mt-14">
          {teamMembers.map((m) => (
            <div key={m.name} className="group flex flex-col">
              <Image
                src={m.image}
                alt={m.name}
                width={80}
                height={80}
                className="rounded-full object-contain"
              />
              <div className="mt-6 flex flex-col tracking-[-0.32px]">
                <h3 className="text-lg">{m.name}</h3>
                <p className="text-muted-foreground">{m.role}</p>
                <p className="mt-4 text-sm tracking-[-0.36px] text-muted-foreground">{m.bio}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.expertise.split(', ').map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-6 flex gap-2">
                  {m.social.twitter && (
                    <a href={m.social.twitter} className="hover:text-foreground" aria-label={`${m.name} on Twitter`}>
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {m.social.linkedin && (
                    <a href={m.social.linkedin} className="hover:text-foreground" aria-label={`${m.name} on LinkedIn`}>
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {m.social.github && (
                    <a href={m.social.github} className="hover:text-foreground" aria-label={`${m.name} on GitHub`}>
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
