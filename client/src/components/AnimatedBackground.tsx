export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-red-50 to-orange-100 dark:from-neutral-950 dark:via-red-950/30 dark:to-neutral-900 transition-colors duration-500" />
      
      <div className="absolute top-0 -left-1/4 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-r from-red-400/20 to-rose-400/20 dark:from-red-600/15 dark:to-rose-600/15 blur-2xl" style={{ animation: "none" }} />
      
      <div className="absolute top-1/3 -right-1/4 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-r from-orange-400/20 to-amber-400/20 dark:from-orange-600/15 dark:to-amber-600/15 blur-2xl" style={{ animation: "none" }} />
      
      <div className="absolute -bottom-1/4 left-1/3 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-r from-rose-400/15 to-pink-400/15 dark:from-rose-600/10 dark:to-pink-600/10 blur-2xl" style={{ animation: "none" }} />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.5)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
    </div>
  );
}
