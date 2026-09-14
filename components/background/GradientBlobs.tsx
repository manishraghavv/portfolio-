/**
 * Decorative fixed background: three soft gradient blobs that drift slowly,
 * plus a grain overlay that hides banding. Purely visual — hidden from
 * assistive tech and non-interactive.
 */
export default function GradientBlobs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Violet blob — upper left */}
      <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.55),transparent_65%)] blur-3xl animate-blob" />

      {/* Cyan blob — right middle */}
      <div
        className="absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.45),transparent_65%)] blur-3xl animate-blob-slow"
        style={{ animationDelay: "-6s" }}
      />

      {/* Blue blob — bottom left */}
      <div
        className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.4),transparent_65%)] blur-3xl animate-blob"
        style={{ animationDelay: "-12s" }}
      />

      {/* Fuchsia / magenta accent blob — center, adds warmth without dominating */}
      <div
        className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(232,121,249,0.32),transparent_70%)] blur-3xl animate-blob-slow"
        style={{ animationDelay: "-18s" }}
      />

      {/* Vignette first, then grain on top, so the texture stays visible
          instead of being dimmed by the vignette. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,6,15,0.75)_100%)]" />
      <div className="noise-overlay absolute inset-0 opacity-[0.04] mix-blend-overlay" />
    </div>
  );
}
