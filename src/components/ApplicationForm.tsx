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
      className="bg-brown-dark py-20 sm:py-28 border-t border-gold/30"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
        <div ref={ref} className={className}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-cream mb-4">
              {FORM.title}
            </h2>
            <p className="text-cream/80 text-lg">{FORM.subtitle}</p>
          </div>

          {submitted ? (
            <div className="bg-gold/10 border border-gold/40 rounded-2xl p-10 text-center">
              <p className="text-cream text-xl leading-relaxed">
                {FORM.successMessage}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-brown border border-gold/25 rounded-2xl p-6 sm:p-10 flex flex-col gap-5"
              noValidate={false}
            >
              {FORM.fields.map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label
                    htmlFor={field.name}
                    className="text-cream/90 text-sm font-medium"
                  >
                    {field.label}
                    {field.required && (
                      <span className="text-gold"> *</span>
                    )}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    className="w-full bg-cream text-brown rounded-lg px-4 py-3 text-base placeholder:text-brown/40 focus:outline-none focus:ring-2 focus:ring-gold/60"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="mt-4 bg-gold text-brown font-bold rounded-full px-8 py-4 text-base hover:bg-gold-light transition-colors duration-300"
              >
                {FORM.submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
