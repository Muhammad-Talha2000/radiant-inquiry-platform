/**
 * Animated hero background: moving grid + dual glowing orbs.
 * Pure CSS, GPU-friendly, decorative only.
 */
export const HeroAnimatedBg = () => (
  <div className="hero-animated-bg" aria-hidden>
    <div className="hero-grid-move" />
    <div className="hero-glow-orb" />
    <div className="hero-glow-orb alt" />
  </div>
);
