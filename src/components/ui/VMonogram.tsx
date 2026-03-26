/**
 * Venturas "V" Monogram — minimalist geometric V with leaf detail.
 * Use as a semi-transparent watermark on the map, tracker, and hero sections.
 */
export default function VMonogram({
  size = 48,
  color = "#D4AF37",
  opacity = 0.15,
  className = "",
}: {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      {/* Left arm of V */}
      <line x1="8"  y1="8"  x2="32" y2="52" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {/* Right arm of V */}
      <line x1="56" y1="8"  x2="32" y2="52" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {/* Horizontal crossbar — geometric plate reference */}
      <line x1="16" y1="28" x2="48" y2="28" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
      {/* Leaf detail — small organic curve at the apex */}
      <path
        d="M 32 52 C 28 44, 24 40, 24 36 C 24 33, 28 31, 32 33 C 36 31, 40 33, 40 36 C 40 40, 36 44, 32 52 Z"
        fill={color}
        fillOpacity="0.25"
      />
      {/* Leaf vein */}
      <line x1="32" y1="33" x2="32" y2="50" stroke={color} strokeWidth="0.75" strokeLinecap="round" strokeOpacity="0.4" />
    </svg>
  );
}
