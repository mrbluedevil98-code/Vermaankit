import GlassCard from "../GlassCard";

export default function GlassCardExample() {
  return (
    <div className="min-h-[300px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8 flex items-center justify-center gap-6">
      <GlassCard className="p-6" variant="default">
        <h3 className="text-white font-semibold mb-2">Default Glass</h3>
        <p className="text-white/80 text-sm">A beautiful frosted card</p>
      </GlassCard>
      <GlassCard className="p-6" variant="strong">
        <h3 className="text-white font-semibold mb-2">Strong Glass</h3>
        <p className="text-white/80 text-sm">More visible backdrop</p>
      </GlassCard>
    </div>
  );
}
