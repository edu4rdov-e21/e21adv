import Image from "next/image";

type Ratio = "16:9" | "4:3" | "1:1";
type Variant = "dark" | "light";

interface PhotoPlaceholderProps {
  description: string;
  ratio?: Ratio;
  variant?: Variant;
  className?: string;
  rounded?: boolean;
}

const ratioClass: Record<Ratio, string> = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
};

const variantClass: Record<Variant, string> = {
  dark: "bg-gray-900 border border-gray-800",
  light: "bg-gray-100 border border-gray-300",
};

const variantTextClass: Record<Variant, string> = {
  dark: "text-gray-400",
  light: "text-gray-500",
};

export default function PhotoPlaceholder({
  description,
  ratio = "16:9",
  variant = "dark",
  className = "",
  rounded = false,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative w-full ${ratioClass[ratio]} ${variantClass[variant]} overflow-hidden ${
        rounded ? "rounded-full" : "rounded-md"
      } ${className}`}
    >
      <Image
        src="/images/placeholder.svg"
        alt={description}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover opacity-0"
        priority={false}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <span
          className={`${variantTextClass[variant]} text-xs sm:text-sm font-normal text-center leading-snug tracking-tight`}
        >
          {description}
        </span>
      </div>
    </div>
  );
}
