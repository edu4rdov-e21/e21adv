"use client";

import { HOW_IT_WORKS } from "@/lib/constants";
import PhotoPlaceholder from "./PhotoPlaceholder";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function HowItWorks() {
  const { ref, className } = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-ink py-24 sm:py-32 lg:py-40">
      <div className="max-w-[1728px] mx-auto px-6 sm:px-10 lg:px-20">
        <div ref={ref} className={className}>
          <h2 className="text-2xl sm:text-3xl text-gray-500 max-w-2xl mb-16 sm:mb-20 leading-snug">
            {HOW_IT_WORKS.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-800 mb-20 sm:mb-24 border border-gray-800">
            {HOW_IT_WORKS.phases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-ink p-8 sm:p-12 flex flex-col gap-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-medium tracking-[0.18em] uppercase text-gray-500">
                    {phase.tag}
                  </span>
                  <span className="text-xs text-gray-700">
                    · {phase.duration}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl text-ivory leading-tight">
                  {phase.title}
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {phase.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-base sm:text-lg leading-snug text-gray-300"
                    >
                      <span
                        className="text-gray-500 flex-shrink-0"
                        aria-hidden="true"
                      >
                        →
                      </span>
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
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
}
