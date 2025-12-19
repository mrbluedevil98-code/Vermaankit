import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Youtube, TrendingUp, Users, Zap, MousePointer, Image, Clock, Award } from "lucide-react";
import GlassCard from "./GlassCard";

const skills = [
  { name: "Thumbnail Design", level: 98 },
  { name: "Adobe Photoshop", level: 95 },
  { name: "Color Psychology", level: 90 },
  { name: "Typography", level: 92 },
  { name: "Photo Manipulation", level: 88 },
  { name: "CTR Optimization", level: 94 },
];

const stats = [
  { icon: Image, value: "500+", label: "Thumbnails Created" },
  { icon: Users, value: "120+", label: "Happy Creators" },
  { icon: TrendingUp, value: "40%", label: "Avg. CTR Boost" },
  { icon: Youtube, value: "10M+", label: "Views Generated" },
];

const services = [
  { icon: MousePointer, title: "High-CTR Thumbnails", desc: "Designed to maximize clicks and watch time" },
  { icon: Clock, title: "24-48hr Delivery", desc: "Fast turnaround without sacrificing quality" },
  { icon: Award, title: "Unlimited Revisions", desc: "Until you're 100% satisfied with the result" },
  { icon: Zap, title: "A/B Testing Ready", desc: "Multiple versions to test what works best" },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2 group">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground group-hover:text-red-500 transition-colors">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/20 dark:bg-white/10 overflow-hidden cursor-pointer relative group hover:h-3 transition-all duration-300">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.1 + delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-500 shadow-lg shadow-red-500/50"
        />
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 text-foreground">
            Why Choose Me?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            I specialize in creating thumbnails that stand out in the sea of content and get viewers to click.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <GlassCard key={service.title} className="p-6 hover-elevate" delay={0.1 * index} data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 mb-4">
                <service.icon className="w-6 h-6 text-red-500 dark:text-red-400" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          <GlassCard className="p-8 hover-elevate" delay={0.1} data-testid="card-approach">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">My Approach</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I understand that your thumbnail is the first impression viewers get of your content. 
                That's why I focus on creating designs that not only look amazing but are strategically 
                crafted to maximize your click-through rate.
              </p>
              <p>
                Every thumbnail I create is built on proven psychological principles - from color 
                psychology to facial expressions, text placement to visual hierarchy. I study what 
                works in your niche and apply those insights to make your videos stand out.
              </p>
              <p>
                Whether you're a gaming channel, tech reviewer, lifestyle vlogger, or business educator, 
                I tailor each design to your brand and audience for maximum impact.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-8 hover-elevate" delay={0.2} data-testid="card-skills">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <GlassCard
              key={stat.label}
              className="p-6 text-center hover-elevate"
              delay={0.1 * index}
              data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 mb-4">
                <stat.icon className="w-6 h-6 text-red-500 dark:text-red-400" aria-hidden="true" />
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
