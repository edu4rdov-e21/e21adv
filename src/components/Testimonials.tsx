"use client";

import { TESTIMONIALS } from "@/lib/constants";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function Testimonials() {
  const { ref, className } = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-ivory text-ink py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1728px] mx-auto px-6 sm:px-10 lg:px-20">
        <div ref={ref} className={className}>
          <h2 className="text-2xl sm:text-3xl text-gray-500 max-w-2xl mb-16 sm:mb-20 leading-snug">
            {TESTIMONIALS.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {TESTIMONIALS.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-ivory p-8 sm:p-10 flex flex-col"
              >
                <p className="font-serif text-xl sm:text-2xl text-ink leading-snug mb-10 flex-1">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <PhotoPlaceholder
                      description={item.photoDescription}
                      ratio="1:1"
                      variant="light"
                      rounded
                    />
                  </div>
                  <div>
                    <p className="text-ink text-sm font-medium">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-sm">{item.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
