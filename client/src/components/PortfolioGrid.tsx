import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Eye, Play } from "lucide-react";
import GlassCard from "./GlassCard";
import ProjectModal from "./ProjectModal";

import thumbnailBold from "@assets/generated_images/bold_youtube_thumbnail_design.png";
import thumbnailGaming from "@assets/generated_images/gaming_youtube_thumbnail_design.png";
import thumbnailTech from "@assets/generated_images/tech_review_thumbnail_design.png";
import thumbnailFitness from "@assets/generated_images/fitness_youtube_thumbnail_design.png";
import thumbnailCooking from "@assets/generated_images/cooking_youtube_thumbnail_design.png";
import thumbnailVlog from "@assets/generated_images/vlog_youtube_thumbnail_design.png";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  role: string;
  year: string;
  views?: string;
  ctr?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Business & Finance",
    category: "Business",
    description: "High-converting thumbnail for a finance YouTuber's viral video about wealth building. Bold text, expressive face cutout, and attention-grabbing colors drove massive engagement.",
    image: thumbnailBold,
    technologies: ["Photoshop", "After Effects", "Bold Typography", "Face Cutouts"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "2.5M",
    ctr: "12.8%",
  },
  {
    id: 2,
    title: "Gaming Highlights",
    category: "Gaming",
    description: "Epic gaming thumbnail with neon aesthetics and intense action. Designed for a popular esports channel to capture the energy of competitive gameplay.",
    image: thumbnailGaming,
    technologies: ["Photoshop", "Neon Effects", "Action Composition", "Glow Effects"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "1.8M",
    ctr: "15.2%",
  },
  {
    id: 3,
    title: "Tech Reviews",
    category: "Tech",
    description: "Clean, professional thumbnail for tech product reviews. Showcases products with sleek gradients and modern typography that tech audiences love.",
    image: thumbnailTech,
    technologies: ["Photoshop", "Product Mockups", "Clean Design", "Gradient Backgrounds"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "850K",
    ctr: "11.5%",
  },
  {
    id: 4,
    title: "Fitness Transformation",
    category: "Fitness",
    description: "Motivational before/after style thumbnail for fitness content. High contrast colors and dramatic lighting that inspires action.",
    image: thumbnailFitness,
    technologies: ["Photoshop", "Body Composition", "Dramatic Lighting", "Impact Text"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "3.2M",
    ctr: "14.1%",
  },
  {
    id: 5,
    title: "Cooking & Food",
    category: "Lifestyle",
    description: "Mouth-watering food thumbnail that makes viewers hungry and curious. Warm tones and appetizing presentation drive clicks.",
    image: thumbnailCooking,
    technologies: ["Photoshop", "Food Photography", "Warm Color Grading", "Steam Effects"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "1.1M",
    ctr: "10.8%",
  },
  {
    id: 6,
    title: "Travel Vlogs",
    category: "Lifestyle",
    description: "Cinematic travel thumbnail with stunning sunset vibes. Captures wanderlust and adventure that vlog audiences crave.",
    image: thumbnailVlog,
    technologies: ["Photoshop", "Cinematic Grading", "Silhouette Art", "Landscape Composition"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "920K",
    ctr: "9.7%",
  },
];

const categories = ["All", "Business", "Gaming", "Tech", "Fitness", "Lifestyle"];

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 text-foreground">
            Thumbnail Portfolio
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Scroll-stopping thumbnails designed to maximize clicks and grow your YouTube channel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25"
                  : "bg-white/50 dark:bg-white/5 backdrop-blur-lg border border-white/30 dark:border-white/10 text-foreground/80 hover:text-foreground hover:bg-white/70 dark:hover:bg-white/10"
              }`}
              data-testid={`button-filter-${category.toLowerCase()}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
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
                  className="relative aspect-video overflow-hidden"
                  onClick={() => setSelectedProject(project)}
                  data-testid={`card-project-${project.id}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur text-white text-xs">
                      <Play className="w-3 h-3 fill-current" />
                      {project.views} views
                    </div>
                  </div>

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
                    </motion.div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-red-500 dark:text-red-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.ctr && (
                      <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">
                        {project.ctr} CTR
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors">
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
