import React from "react";

export type RestaurantHeroProps = {
  title?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
};

export function RestaurantHero({ title, subtitle, className, children }: RestaurantHeroProps) {
  return (
    <section className={className ?? ""}>
      {title ? <h1 className="text-3xl md:text-4xl font-bold">{title}</h1> : null}
      {subtitle ? <p className="mt-2 text-muted-foreground">{subtitle}</p> : null}
      {children}
    </section>
  );
}
export default RestaurantHero;
