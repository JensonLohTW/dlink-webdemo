const wavelength = 120
const width = 2880

function buildPath() {
  let path = `M0 12`
  for (let x = 0; x < width + wavelength * 2; x += wavelength) {
    path += ` Q${x + wavelength / 4} 0 ${x + wavelength / 2} 12 T${x + wavelength} 12`
  }
  return path
}

const path = buildPath()

/** One wavelength every 5 seconds: the 12 breaths a minute of MuRu's sleep light. */
export function BreathLine({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`breath-line block h-6 w-full ${className}`}
      viewBox="0 0 1440 24"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <path d={path} stroke="currentColor" strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
