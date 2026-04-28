export default function CompassRose({ className = '' }) {
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
      {/* Outer ring */}
      <circle cx="70" cy="60" r="44" strokeWidth="1.5" opacity="0.35" />
      {/* Inner dashed ring */}
      <circle cx="70" cy="60" r="28" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />

      {/* Cardinal ticks */}
      <line x1="70" y1="16" x2="70" y2="28" strokeWidth="2" />
      <line x1="70" y1="92" x2="70" y2="104" strokeWidth="1.5" opacity="0.4" />
      <line x1="98" y1="60" x2="110" y2="60" strokeWidth="1.5" opacity="0.4" />
      <line x1="30" y1="60" x2="42" y2="60" strokeWidth="1.5" opacity="0.4" />

      {/* Diagonal ticks */}
      <line x1="100" y1="30" x2="104" y2="26" strokeWidth="1" opacity="0.25" />
      <line x1="100" y1="90" x2="104" y2="94" strokeWidth="1" opacity="0.25" />
      <line x1="40" y1="90" x2="36" y2="94" strokeWidth="1" opacity="0.25" />
      <line x1="40" y1="30" x2="36" y2="26" strokeWidth="1" opacity="0.25" />

      {/* North needle — filled, prominent */}
      <path
        d="M70,28 L75,58 L70,52 L65,58 Z"
        fill="currentColor"
        stroke="none"
        opacity="0.75"
      />
      {/* South needle — lighter */}
      <path
        d="M70,92 L75,62 L70,68 L65,62 Z"
        fill="currentColor"
        stroke="none"
        opacity="0.2"
      />

      {/* Center pin */}
      <circle cx="70" cy="60" r="3.5" fill="white" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />

      {/* N label */}
      <text
        x="70" y="13"
        textAnchor="middle"
        fontSize="7"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
        fill="currentColor"
        stroke="none"
        opacity="0.55"
      >
        N
      </text>
    </svg>
  )
}
