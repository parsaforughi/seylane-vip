export function StarkBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.18),_transparent_55%)]" />
      <div className="absolute left-1/2 top-[-200px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute right-10 top-10 h-32 w-32 animate-pulse rounded-full border border-cyan-400/30" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=600 height=600 viewBox=0 0 600 600 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none stroke=%231f2937 stroke-opacity=.35 stroke-width=.5%3E%3Cpath d=%27M0 75h600M0 150h600M0 225h600M0 300h600M0 375h600M0 450h600M0 525h600M75 0v600M150 0v600M225 0v600M300 0v600M375 0v600M450 0v600M525 0v600%27/%3E%3C/g%3E%3C/svg%3E')] opacity-40 mix-blend-screen" />
    </div>
  );
}
