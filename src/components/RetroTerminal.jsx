export default function RetroTerminal({ className = '' }) {
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
      {/* Monitor body */}
      <rect x="8" y="6" width="124" height="82" rx="5" strokeWidth="2" />
      {/* Screen bezel */}
      <rect x="18" y="15" width="104" height="62" rx="2" strokeWidth="1.5" />
      {/* Prompt line 1 */}
      <text x="26" y="35" fontSize="8" fontFamily="monospace" stroke="none" fill="currentColor" opacity="0.5">
        $ npm run dev
      </text>
      {/* Code lines */}
      <line x1="26" y1="43" x2="90" y2="43" strokeWidth="1.2" opacity="0.3" />
      <line x1="26" y1="51" x2="74" y2="51" strokeWidth="1.2" opacity="0.3" />
      <line x1="26" y1="59" x2="82" y2="59" strokeWidth="1.2" opacity="0.3" />
      {/* Cursor */}
      <rect x="26" y="66" width="7" height="1.5" fill="currentColor" stroke="none" opacity="0.6" />
      {/* Power LED */}
      <circle cx="124" cy="89" r="2" strokeWidth="1.2" opacity="0.5" />
      {/* Stand neck */}
      <path d="M58 88 L52 106 M82 88 L88 106" strokeWidth="2" />
      {/* Base */}
      <path d="M44 106 Q70 110 96 106" strokeWidth="2" />
    </svg>
  )
}
