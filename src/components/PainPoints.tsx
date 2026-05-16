"use client";

import { PAIN_POINTS } from "@/lib/constants";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function PainPoints() {
  const { ref, className } = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-brown-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div ref={ref} className={className}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-cream text-center mb-12 sm:mb-16">
            {PAIN_POINTS.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PAIN_POINTS.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-brown border border-gold/30 rounded-xl p-8 hover:border-gold/60 transition-all duration-300"
              >
                <span className="block text-gold text-sm font-semibold mb-4 tracking-[0.2em]">
                  0{idx + 1}
                </span>
                <p className="text-cream text-lg leading-relaxed">{card}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
