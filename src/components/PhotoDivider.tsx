"use client";

import PhotoPlaceholder from "./PhotoPlaceholder";
import { useFadeIn } from "@/hooks/useFadeIn";

interface PhotoDividerProps {
  description: string;
}

export default function PhotoDivider({ description }: PhotoDividerProps) {
  const { ref, className } = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-ink">
      <div ref={ref} className={className}>
        <PhotoPlaceholder
          description={description}
          ratio="16:9"
          variant="dark"
        />
      </div>
    </section>
  );
}
