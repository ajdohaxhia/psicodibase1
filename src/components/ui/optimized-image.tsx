"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  aspectRatio?: "portrait" | "landscape" | "square" | "hero";
}

const aspectRatioClasses = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  hero: "aspect-[16/9]",
};

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  priority = false,
  sizes,
  fill = false,
  aspectRatio,
}: OptimizedImageProps) {
  if (fill) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-secondary/30",
          aspectRatio && aspectRatioClasses[aspectRatio],
          containerClassName
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
          className={cn("object-cover", className)}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-secondary/30",
        aspectRatio && aspectRatioClasses[aspectRatio],
        containerClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width || 400}
        height={height || 300}
        sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
        className={cn("object-cover", className)}
        priority={priority}
      />
    </div>
  );
}
