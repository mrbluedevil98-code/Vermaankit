import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import GlassCard from "./GlassCard";
import ProjectModal from "./ProjectModal";

import websiteImg from "@assets/generated_images/website_design_portfolio_thumbnail.png";
import mobileImg from "@assets/generated_images/mobile_app_design_mockup.png";
import brandImg from "@assets/generated_images/brand_identity_design_mockup.png";
import dashboardImg from "@assets/generated_images/dashboard_ui_design_mockup.png";
import ecommerceImg from "@assets/generated_images/e-commerce_design_mockup.png";
import socialImg from "@assets/generated_images/social_media_app_mockup.png";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  role: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "Web Design",
    description: "A comprehensive financial analytics dashboard with real-time data visualization, portfolio tracking, and AI-powered insights for modern investors.",
    image: dashboardImg,
    technologies: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
    role: "Lead Designer & Developer",
    year: "2024",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Web Design",
    description: "A sleek online shopping experience featuring seamless checkout, personalized recommendations, and stunning product showcases.",
    image: ecommerceImg,
    technologies: ["Next.js", "Stripe", "Framer Motion", "PostgreSQL"],
    role: "UI/UX Designer",
    year: "2024",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Mobile App",
    description: "An intuitive mobile banking application with secure transactions, budget tracking, and seamless account management.",
    image: mobileImg,
    technologies: ["React Native", "Node.js", "MongoDB", "Figma"],
    role: "Product Designer",
    year: "2023",
  },
  {
    id: 4,
    title: "Brand Identity Suite",
    category: "Branding",
    description: "Complete brand identity development including logo design, color palette, typography, and comprehensive brand guidelines.",
    image: brandImg,
    technologies: ["Illustrator", "Photoshop", "InDesign", "Figma"],
    role: "Creative Director",
    year: "2023",
  },
  {
    id: 5,
    title: "Social Connect App",
    category: "Mobile App",
    description: "A modern social networking platform with real-time messaging, content sharing, and community features.",
    image: socialImg,
    technologies: ["Flutter", "Firebase", "WebSocket", "Redis"],
    role: "Lead Designer",
    year: "2024",
  },
  {
    id: 6,
    title: "Corporate Website",
    category: "Web Design",
    description: "A professional corporate website with modern animations, responsive design, and seamless CMS integration.",
    image: websiteImg,
    technologies: ["React", "GSAP", "Sanity CMS", "Vercel"],
    role: "Full-Stack Developer",
    year: "2024",
  },
];

const categories = ["All", "Web Design", "Mobile App", "Branding"];

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of projects showcasing my passion for creating
            beautiful, functional digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25"
                  : "bg-white/50 dark:bg-white/5 backdrop-blur-lg border border-white/30 dark:border-white/10 text-foreground/80 hover:text-foreground hover:bg-white/70 dark:hover:bg-white/10"
              }`}
              data-testid={`button-filter-${category.toLowerCase().replace(" ", "-")}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                className="group cursor-pointer overflow-hidden"
                animate={false}
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                  data-testid={`card-project-${project.id}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex gap-3"
                    >
                      <button
                        className="p-3 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white"
                        data-testid={`button-view-project-${project.id}`}
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button
                        className="p-3 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white"
                        data-testid={`button-external-project-${project.id}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </motion.div>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 text-foreground group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
