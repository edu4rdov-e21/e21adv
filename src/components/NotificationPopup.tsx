interface NotificationPopupProps {
  description: string;
  className?: string;
  delay?: number;
}

export default function NotificationPopup({
  description,
  className = "",
  delay = 0,
}: NotificationPopupProps) {
  return (
    <div
      className={`absolute bg-ivory text-ink rounded-md shadow-2xl ring-1 ring-gray-300 p-4 sm:p-5 animate-popup pointer-events-none ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="text-[11px] sm:text-xs text-gray-700 font-normal leading-snug tracking-tight">
        {description}
      </p>
    </div>
  );
}
