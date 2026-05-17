"use client";

import { PAIN_POINTS } from "@/lib/constants";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function PainPoints() {
  const { ref, className } = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-ivory text-ink py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1728px] mx-auto px-6 sm:px-10 lg:px-20">
        <div ref={ref} className={className}>
          <h2 className="text-2xl sm:text-3xl text-gray-500 max-w-2xl mb-16 sm:mb-20 leading-snug">
            {PAIN_POINTS.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {PAIN_POINTS.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-ivory p-8 sm:p-10 flex flex-col gap-6"
              >
                <span className="text-xs font-medium tracking-[0.18em] text-gray-500 uppercase">
                  0{idx + 1}
                </span>
                <p className="text-ink text-lg sm:text-xl leading-snug">
                  {card}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
