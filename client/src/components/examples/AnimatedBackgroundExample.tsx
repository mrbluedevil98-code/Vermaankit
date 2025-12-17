import AnimatedBackground from "../AnimatedBackground";

export default function AnimatedBackgroundExample() {
  return (
    <div className="relative min-h-[400px] overflow-hidden rounded-lg">
      <AnimatedBackground />
      <div className="relative z-10 flex items-center justify-center h-[400px]">
        <p className="text-foreground text-lg font-medium">Animated gradient background</p>
      </div>
    </div>
  );
}
