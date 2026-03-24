/**
 * Store mark — laptop silhouette tuned for small sizes (navbar, UI).
 * Uses currentColor so it inherits from parent (skill: cohesive, intentional marks).
 */
export default function BrandLaptopMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Lid + display */}
      <path
        d="M5 5.25C5 4.56 5.56 4 6.25 4h11.5c.69 0 1.25.56 1.25 1.25v8.25H5V5.25Z"
        fill="currentColor"
        fillOpacity={0.98}
      />
      <rect x="6.25" y="5.35" width="11.5" height="6.9" rx="0.85" fill="#0f172a" fillOpacity={0.92} />
      <path
        d="M6.8 5.9h4.2l-2.1 4.5H6.8V5.9Z"
        fill="currentColor"
        fillOpacity={0.18}
      />
      {/* Hinge glow */}
      <rect x="9" y="13.25" width="6" height="0.55" rx="0.28" fill="currentColor" fillOpacity={0.35} />
      {/* Base / keyboard deck */}
      <path
        d="M2.75 14.75h18.5a.55.55 0 01.52.73l-1.15 3.27H3.38l-1.15-3.27a.55.55 0 01.52-.73Z"
        fill="currentColor"
        fillOpacity={0.92}
      />
      {/* Trackpad */}
      <rect x="9.75" y="16.35" width="4.5" height="1.15" rx="0.4" fill="#0f172a" fillOpacity={0.35} />
    </svg>
  );
}
