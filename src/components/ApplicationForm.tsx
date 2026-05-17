"use client";

import { useState, FormEvent } from "react";
import { FORM } from "@/lib/constants";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function ApplicationForm() {
  const { ref, className } = useFadeIn<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="formulario"
      className="bg-ink py-24 sm:py-32 lg:py-40 border-t border-gray-800"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-20">
        <div ref={ref} className={className}>
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl text-ivory mb-4 leading-tight">
              {FORM.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 leading-snug">
              {FORM.subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="border border-gray-800 rounded-md p-10">
              <p className="text-ivory text-lg leading-snug">
                {FORM.successMessage}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              noValidate={false}
            >
              {FORM.fields.map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label
                    htmlFor={field.name}
                    className="text-gray-300 text-sm font-normal"
                  >
                    {field.label}
                    {field.required && (
                      <span className="text-gray-500"> *</span>
                    )}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    className="w-full bg-ivory text-ink rounded-sm px-4 h-12 text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-150"
                    style={{ transitionTimingFunction: "cubic-bezier(0.7, 0, 0.3, 1)" }}
                  />
                </div>
              ))}
              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-ivory text-ink rounded-sm h-12 px-6 text-base font-medium hover:bg-gray-200 transition-colors duration-150 self-start"
                style={{ transitionTimingFunction: "cubic-bezier(0.7, 0, 0.3, 1)" }}
              >
                <span>{FORM.submitLabel}</span>
                <span aria-hidden="true">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
