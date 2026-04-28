export default function OutdoorScene({ className = '' }) {
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
      {/* Back mountain */}
      <path d="M55 88 L95 28 L135 88" strokeWidth="1.5" opacity="0.3" />
      {/* Snow cap back */}
      <path d="M85 42 L95 28 L105 42" strokeWidth="1.2" opacity="0.3" />

      {/* Front mountain */}
      <path d="M5 88 L48 18 L91 88" strokeWidth="2" opacity="0.6" />
      {/* Snow cap front */}
      <path d="M37 32 L48 18 L59 32" strokeWidth="1.5" opacity="0.6" />

      {/* Ground */}
      <line x1="5" y1="92" x2="135" y2="92" strokeWidth="1.5" opacity="0.4" />

      {/* Tent */}
      <path d="M100 92 L117 68 L134 92" strokeWidth="1.8" />
      {/* Tent door */}
      <path d="M113 92 Q117 82 121 92" strokeWidth="1.2" />
      {/* Tent guy rope */}
      <line x1="117" y1="68" x2="112" y2="60" strokeWidth="1" opacity="0.5" />
      <line x1="117" y1="68" x2="122" y2="60" strokeWidth="1" opacity="0.5" />

      {/* Campfire */}
      <path d="M107 96 Q109 91 111 96" strokeWidth="1.2" opacity="0.7" />
      <path d="M109 97 Q111 93 113 97" strokeWidth="1.2" opacity="0.7" />
      <line x1="107" y1="98" x2="113" y2="98" strokeWidth="1.2" opacity="0.5" />

      {/* Pine tree */}
      <path d="M18 92 L26 74 L34 92" strokeWidth="1.5" opacity="0.5" />
      <path d="M20 83 L26 68 L32 83" strokeWidth="1.5" opacity="0.5" />
      <line x1="26" y1="92" x2="26" y2="96" strokeWidth="1.5" opacity="0.5" />

      {/* Stars */}
      <circle cx="70" cy="14" r="1" fill="currentColor" stroke="none" opacity="0.4" />
      <circle cx="82" cy="8" r="1" fill="currentColor" stroke="none" opacity="0.3" />
      <circle cx="60" cy="10" r="0.8" fill="currentColor" stroke="none" opacity="0.3" />
    </svg>
  )
}
