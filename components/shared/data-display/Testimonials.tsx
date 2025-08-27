import React from "react";
type AnyProps = { [key: string]: any; items?: Array<{quote:string; author?:string}> };
export function Testimonials({ items = [], ...rest }: AnyProps) {
  return (
    <section {...rest}>
      {items.length === 0 ? (
        <div className="text-muted-foreground text-sm">Testimonials placeholder</div>
      ) : (
        <ul className="space-y-4">
          {items.map((t, i) => (
            <li key={i} className="p-4 border rounded-lg">
              <p className="italic">&ldquo;{t.quote}&rdquo;</p>
              {t.author ? <p className="mt-2 text-right text-sm">— {t.author}</p> : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
export default Testimonials;
