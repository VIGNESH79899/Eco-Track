export default function BackgroundTree() {
  return (
    <div className="pointer-events-none fixed left-0 top-24 z-0 hidden md:block">
      
      {/* Ambient green glow */}
      <div className="absolute left-24 top-12 h-[520px] w-[480px] bg-gradient-to-r from-emerald-300/40 to-transparent blur-3xl" />

      {/* Tree */}
      <img
        src="/tree-bg.png"
        alt="Eco background tree"
        className="
          relative
          h-[620px]
          opacity-[0.30]
          translate-x-240
          animate-tree-sway
        "
      />
    </div>
  );
}