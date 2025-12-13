export default function RightTopLogo() {
  return (
    <div className="pointer-events-none fixed right-0 top-52 z-0 hidden lg:block">
      
      {/* Soft ambient glow */}
      <div className="absolute right-20 top-12 h-[280px] w-[280px] rounded-full bg-emerald-300/30 blur-3xl" />

      <img
        src="/logo-bg.png"
        alt="EcoTrace logo decoration"
        className="
          relative
          h-[400px]
          opacity-[0.500]
          translate-x-35
          animate-logo-float
        "
      />
    </div>
  );
}
