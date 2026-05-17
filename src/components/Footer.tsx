import { FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-gray-800 py-12 sm:py-16">
      <div className="max-w-[1728px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">{FOOTER.copyright}</p>
        <p className="text-sm text-gray-500">{FOOTER.tagline}</p>
      </div>
    </footer>
  );
}
