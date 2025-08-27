"use client";

import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { registerComponentLayout } from "@/lib/style-system/layout-differentiation";
import { ChefHat, Clock, Shield, Users } from "lucide-react";

export function CustomCtaSection() {
  useEffect(() => {
    registerComponentLayout("CustomCtaSection", "site");
  }, []);

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((n) => (
            <Avatar key={n} className="relative -mr-4 size-14 overflow-hidden rounded-full border">
              <AvatarImage src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-${n}.webp`} alt="" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          ))}
        </div>

        <header>
          <h2 className="mt-6 text-center text-4xl font-semibold tracking-tighter lg:text-7xl">
            Where Restaurant Excellence Begins
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground md:text-2xl">
            Join thousands of restaurants that have streamlined their operations, improved compliance, and boosted efficiency with OpsFlow
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <Shield className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">HACCP Compliance</h3>
            <p className="text-center text-muted-foreground text-sm">
              Automate temperature logs and food safety protocols
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <Clock className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Save 5+ Hours</h3>
            <p className="text-center text-muted-foreground text-sm">
              Reduce administrative work with automated reports
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <Users className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Staff Management</h3>
            <p className="text-center text-muted-foreground text-sm">
              Streamline scheduling and task assignment
            </p>
          </div>
        </div>

        <div className="group mt-12">
          <div className="relative flex items-center justify-center">
            <Button className="h-12 rounded-2xl px-6 text-lg" size="lg">
              <ChefHat className="mr-2 h-5 w-5" />
              Start Your Free Trial
            </Button>
            <div className="pointer-events-none absolute -right-20 -bottom-14 hidden items-end md:flex">
              <Line className="text-foreground" />
              <p className="ml-2 font-caveat text-xl tracking-tight text-foreground">
                14 Days Free • No Credit Card
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Line(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="77" height="80" viewBox="0 0 77 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M75.4725 60.0021C45.5073 65.1045 23.2825 43.9431 11.4282 18.1701C11.2238 17.7278 10.6987 17.5325 10.2564 17.7369C9.8141 17.9414 9.61882 18.4664 9.82326 18.9087C22.008 45.4042 44.9655 66.9889 75.7702 61.743C76.2503 61.6623 76.5733 61.2059 76.4919 60.7237C76.4111 60.2436 75.9547 59.9207 75.4725 60.0021Z" fill="currentColor" />
      <path d="M10.846 19.02C12.1043 19.929 13.6707 21.0873 13.8523 21.2135C18.7735 24.635 23.9617 27.1097 29.6911 28.9119C30.156 29.0588 30.653 28.799 30.7998 28.3342C30.9467 27.8693 30.6869 27.3724 30.2221 27.2255C24.6657 25.4797 19.6334 23.0811 14.8601 19.7616C14.5818 19.5683 11.062 16.9624 10.3108 16.4889C10.0035 16.2933 9.76888 16.278 9.71317 16.2797C9.41708 16.2773 9.22434 16.3985 9.09505 16.5201C8.95011 16.6585 8.76658 16.9454 8.76869 17.3853C8.77276 17.8457 9.01473 18.7939 9.05649 19.0381C9.67624 22.7255 10.6892 26.7869 10.8614 30.7273C11.0258 34.485 10.4248 38.1371 7.83746 41.1938C7.52215 41.5656 7.56983 42.1244 7.94168 42.4397C8.31352 42.755 8.8723 42.7074 9.18761 42.3355C12.0796 38.9175 12.8109 34.8503 12.6274 30.6511C12.4558 26.734 11.4799 22.7004 10.846 19.02Z" fill="currentColor" />
    </svg>
  );
}
