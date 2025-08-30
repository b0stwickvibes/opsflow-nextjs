"use client";

import Image from "next/image";

interface ImageFrameProps {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string; // e.g. 16/9
}

export default function ImageFrame({ src, alt, caption, aspect = "16/9" }: ImageFrameProps) {
  return (
    <div className="rounded-2xl border bg-muted/40 shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 border-b px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
        {caption && <span className="ml-3 text-xs text-muted-foreground">{caption}</span>}
      </div>
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" priority={false} />
      </div>
    </div>
  );
}

