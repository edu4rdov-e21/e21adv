"use client";

import { DIFFERENTIATOR } from "@/lib/constants";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Differentiator() {
  const { ref, className } = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-ivory text-ink py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1728px] mx-auto px-6 sm:px-10 lg:px-20">
        <div ref={ref} className={className}>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl text-gray-500 mb-6 leading-snug">
              {DIFFERENTIATOR.title}
            </h2>
            <p className="text-xl sm:text-2xl text-ink leading-snug">
              {DIFFERENTIATOR.body}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {DIFFERENTIATOR.photos.map((desc, idx) => (
              <PhotoPlaceholder
                key={idx}
                description={desc}
                ratio="4:3"
                variant="light"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
