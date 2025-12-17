import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Coffee, Users, Zap } from "lucide-react";
import GlassCard from "./GlassCard";

const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Figma / Design Tools", level: 92 },
  { name: "Framer Motion", level: 85 },
  { name: "Tailwind CSS", level: 93 },
];

const stats = [
  { icon: Coffee, value: "150+", label: "Projects Completed" },
  { icon: Users, value: "80+", label: "Happy Clients" },
  { icon: Award, value: "12", label: "Awards Won" },
  { icon: Zap, value: "5+", label: "Years Experience" },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/20 dark:bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-600"
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about crafting digital experiences that leave a lasting impression.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <GlassCard className="p-8" delay={0.1}>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 5 years of experience in design and development, I've had the privilege
                of working with startups and established brands alike, helping them create
                meaningful digital experiences.
              </p>
              <p>
                My approach combines aesthetic sensibility with technical expertise, ensuring
                every project not only looks stunning but performs flawlessly. I believe in
                the power of design to solve problems and create connections.
              </p>
              <p>
                When I'm not designing, you'll find me exploring new technologies, contributing
                to open-source projects, or enjoying a good cup of coffee while sketching new ideas.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8" delay={0.2}>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Skills & Expertise</h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <GlassCard
              key={stat.label}
              className="p-6 text-center"
              delay={0.1 * index}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 mb-4">
                <stat.icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
