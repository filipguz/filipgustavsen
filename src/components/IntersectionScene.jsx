export default function IntersectionScene({ className = '' }) {
  return (
    <svg
      viewBox="0 0 140 120"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* === PERSON (center) === */}
      <circle cx="70" cy="38" r="8" strokeWidth="1.8" />
      <line x1="70" y1="46" x2="70" y2="68" strokeWidth="1.8" />
      <line x1="59" y1="56" x2="81" y2="56" strokeWidth="1.8" />
      <line x1="70" y1="68" x2="62" y2="82" strokeWidth="1.8" />
      <line x1="70" y1="68" x2="78" y2="82" strokeWidth="1.8" />

      {/* Dashed connection: person ↔ tech */}
      <line x1="42" y1="56" x2="59" y2="56" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" />
      {/* Dashed connection: person ↔ society */}
      <line x1="81" y1="56" x2="98" y2="56" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" />

      {/* === TECH (left) — monitor === */}
      <rect x="8" y="42" width="34" height="24" rx="2" strokeWidth="1.8" />
      <rect x="13" y="47" width="24" height="14" rx="1" strokeWidth="1.2" opacity="0.6" />
      <line x1="16" y1="52" x2="31" y2="52" strokeWidth="1.1" opacity="0.5" />
      <line x1="16" y1="56" x2="26" y2="56" strokeWidth="1.1" opacity="0.5" />
      <line x1="16" y1="60" x2="29" y2="60" strokeWidth="1.1" opacity="0.5" />
      <line x1="25" y1="66" x2="25" y2="72" strokeWidth="1.5" />
      <line x1="19" y1="72" x2="31" y2="72" strokeWidth="1.5" />

      {/* === SOCIETY (right) — connected nodes === */}
      <circle cx="112" cy="34" r="6" strokeWidth="1.5" />
      <circle cx="126" cy="54" r="6" strokeWidth="1.5" />
      <circle cx="110" cy="72" r="6" strokeWidth="1.5" />
      {/* Lines between nodes */}
      <line x1="117" y1="37" x2="122" y2="49" strokeWidth="1.1" opacity="0.5" />
      <line x1="125" y1="60" x2="116" y2="67" strokeWidth="1.1" opacity="0.5" />
      <line x1="112" y1="40" x2="112" y2="66" strokeWidth="1.1" opacity="0.3" />

      {/* Subtle center glow dot */}
      <circle cx="70" cy="56" r="3" fill="currentColor" stroke="none" opacity="0.1" />
    </svg>
  )
}
