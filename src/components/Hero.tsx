"use client";

import { HERO } from "@/lib/constants";
import PhotoPlaceholder from "./PhotoPlaceholder";
import NotificationPopup from "./NotificationPopup";
import { useFadeIn } from "@/hooks/useFadeIn";

const POPUP_POSITIONS: Record<string, string> = {
  "top-left":
    "top-2 -left-3 sm:-top-5 sm:-left-8 w-40 sm:w-56",
  "top-right":
    "-top-3 right-2 sm:-top-6 sm:-right-6 w-40 sm:w-56",
  "bottom-left":
    "bottom-6 -left-3 sm:bottom-10 sm:-left-10 w-44 sm:w-60",
  "bottom-right":
    "-bottom-4 right-2 sm:-bottom-8 sm:-right-10 w-48 sm:w-64",
};

const POPUP_DELAYS = [0.6, 1.0, 1.4, 1.8];

export default function Hero() {
  const { ref, className } = useFadeIn<HTMLDivElement>();

  return (
    <section className="bg-ink overflow-hidden">
      <div className="max-w-[1728px] mx-auto px-6 sm:px-10 lg:px-20 pt-20 pb-28 sm:pt-28 sm:pb-36 lg:pt-36 lg:pb-44">
        <div
          ref={ref}
          className={`${className} grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center`}
        >
          <div className="flex flex-col gap-7 sm:gap-9">
            <span className="inline-flex items-center self-start text-[11px] font-medium tracking-[0.18em] text-gray-500 uppercase">
              {HERO.badge}
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-ivory">
              {HERO.headline}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-500 max-w-xl leading-snug font-normal">
              {HERO.subheadline}
            </p>
            <a
              href={HERO.ctaHref}
              className="inline-flex items-center self-start gap-2 bg-ivory text-ink rounded-sm px-5 h-10 text-base font-medium hover:bg-gray-200 transition-colors duration-150"
              style={{ transitionTimingFunction: "cubic-bezier(0.7, 0, 0.3, 1)" }}
            >
              <span>{HERO.ctaLabel}</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="lg:pl-4">
            <div className="relative">
              <PhotoPlaceholder
                description={HERO.videoDescription}
                ratio="4:3"
                variant="dark"
              />
              {HERO.popups.map((popup, idx) => (
                <NotificationPopup
                  key={popup.id}
                  description={popup.description}
                  className={POPUP_POSITIONS[popup.position]}
                  delay={POPUP_DELAYS[idx]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
