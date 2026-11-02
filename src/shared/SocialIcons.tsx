const size = 20

function Line() {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3C6.5 3 2 6.6 2 11.1c0 4 3.5 7.3 8.3 8 .3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5s5.800-3.400 7.900-5.800C21.400 14.600 22 12.900 22 11.100 22 6.600 17.500 3 12 3ZM7.700 13.500H5.800a.5.5 0 0 1-.5-.5V9.200a.5.5 0 0 1 1 0v3.300h1.400a.5.5 0 0 1 0 1Zm2-.5a.5.5 0 0 1-1 0V9.200a.5.500 0 0 1 1 0V13Zm4.600 0a.5.5 0 0 1-.9.300l-1.900-2.600V13a.5.5 0 0 1-1 0V9.200a.5.5 0 0 1 .9-.3l1.900 2.600V9.200a.5.5 0 0 1 1 0V13Zm3.100-2.400a.5.5 0 0 1 0 1H16v.9h1.400a.5.5 0 0 1 0 1h-1.900a.5.5 0 0 1-.5-.5V9.200a.5.5 0 0 1 .5-.5h1.900a.5.500 0 0 1 0 1H16v.9h1.400Z" />
    </svg>
  )
}

function X() {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.800 3h3.100l-6.800 7.700L22 21h-6.200l-4.900-6.400L5.300 21H2.200l7.200-8.300L1.800 3h6.400l4.400 5.900L17.800 3Zm-1.100 16.200h1.700L7.400 4.700H5.600l11.100 14.500Z" />
    </svg>
  )
}

function YouTube() {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.500 7.200a2.700 2.700 0 0 0-1.900-1.900C18.900 4.800 12 4.800 12 4.800s-6.900 0-8.600.5a2.700 2.700 0 0 0-1.900 1.900C1 8.900 1 12 1 12s0 3.100.5 4.800a2.700 2.700 0 0 0 1.900 1.900c1.700.5 8.600.5 8.600.5s6.900 0 8.600-.5a2.700 2.700 0 0 0 1.900-1.900c.5-1.700.5-4.800.5-4.800s0-3.100-.5-4.800ZM9.800 15.300V8.700l5.700 3.300-5.700 3.300Z" />
    </svg>
  )
}

export function SocialIcons({ className = '' }: { className?: string }) {
  const items = [
    { label: 'LINE', Icon: Line },
    { label: 'X', Icon: X },
    { label: 'YouTube', Icon: YouTube },
  ]
  return (
    <ul className={`flex list-none items-center gap-3 p-0 ${className}`}>
      {items.map(({ label, Icon }) => (
        // Official account URLs are not in the spec yet, so these stay inert.
        <li key={label} aria-label={label} title={label} className="opacity-80">
          <Icon />
        </li>
      ))}
    </ul>
  )
}
