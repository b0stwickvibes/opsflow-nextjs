import React from "react";
type AnyProps = { [key: string]: any; children?: React.ReactNode };
export function CardSection({ title, subtitle, children, className, ...rest }: AnyProps) {
  return (
    <section className={className ?? ""} {...rest}>
      {title ? <h2 className="text-2xl font-semibold">{title}</h2> : null}
      {subtitle ? <p className="mt-1 text-muted-foreground">{subtitle}</p> : null}
      <div className="mt-4">{children}</div>
    </section>
  );
}
export default CardSection;
