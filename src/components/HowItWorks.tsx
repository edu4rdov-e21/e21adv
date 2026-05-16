"use client";

import { HOW_IT_WORKS } from "@/lib/constants";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function HowItWorks() {
  const { ref, className } = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-brown-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div ref={ref} className={className}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-cream text-center mb-14 sm:mb-20">
            {HOW_IT_WORKS.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 sm:mb-20">
            {HOW_IT_WORKS.phases.map((phase, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 sm:p-10 border ${
                  idx === 0
                    ? "bg-brown border-gold/25"
                    : "bg-gold border-gold"
                }`}
              >
                <div
                  className={`flex items-baseline gap-3 mb-6 ${
                    idx === 0 ? "text-cream" : "text-brown"
                  }`}
                >
                  <span
                    className={`text-xs font-semibold tracking-[0.2em] uppercase ${
                      idx === 0 ? "text-gold" : "text-brown/70"
                    }`}
                  >
                    {phase.tag}
                  </span>
                  <span
                    className={`text-xs ${
                      idx === 0 ? "text-cream/50" : "text-brown/50"
                    }`}
                  >
                    · {phase.duration}
                  </span>
                </div>
                <h3
                  className={`text-3xl sm:text-4xl mb-8 ${
                    idx === 0 ? "text-cream" : "text-brown"
                  }`}
                >
                  {phase.title}
                </h3>
                <ul className="space-y-4">
                  {phase.items.map((item, i) => (
                    <li
                      key={i}
                      className={`flex gap-3 text-base sm:text-lg leading-relaxed ${
                        idx === 0 ? "text-cream/90" : "text-brown/90"
                      }`}
                    >
                      <span
                        className={`mt-2 inline-block h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                          idx === 0 ? "bg-gold" : "bg-brown"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <PhotoPlaceholder
            description={HOW_IT_WORKS.photoDescription}
            ratio="16:9"
          />
        </div>
      </div>
    </section>
  );
}
