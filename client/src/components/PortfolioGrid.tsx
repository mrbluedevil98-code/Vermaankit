import { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { Eye, Play } from "lucide-react";
import GlassCard from "./GlassCard";
import ProjectModal from "./ProjectModal";
import ImagePreviewModal from "./ImagePreviewModal";

import thumbnail1 from "@assets/16_LIVE_1766006303121.jpg";
import thumbnail2 from "@assets/champion_2_1766006303121.jpg";
import thumbnail3 from "@assets/DUCK_PC_FINAL_1766006303121.jpg";
import thumbnail4 from "@assets/enhanced_FIRST_LOVE_1766006303122.png";
import thumbnail5 from "@assets/FINALLL_1766006303122.jpg";
import thumbnail6 from "@assets/KAROLIS_THUMBNAIL_1766006303122.jpg";
import thumbnail7 from "@assets/Mike_Tyson_1766006303123.jpg";
import thumbnail8 from "@assets/OBC_THUMBNAIL_FINAL_1766006303123.jpg";
import thumbnail9 from "@assets/OBS_2_1766006303123.jpg";
import thumbnail10 from "@assets/valorant_prooo_1766006303124.jpg";

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
  reviews?: Review[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gaming Live Stream",
    category: "Gaming",
    description: "High-energy live stream thumbnail with golden gun effects and dynamic composition. Bold colors and expressive face drive massive click-through rates.",
    image: thumbnail1,
    technologies: ["Photoshop", "After Effects", "3D Effects", "Face Cutouts"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "2.5M",
    ctr: "12.8%",
  },
  {
    id: 2,
    title: "Champion Valorant",
    category: "Gaming",
    description: "Epic gaming thumbnail with split color scheme and intense focus. Designed for competitive gaming content with striking visual contrast.",
    image: thumbnail2,
    technologies: ["Photoshop", "Color Grading", "Split Design", "Glow Effects"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "1.8M",
    ctr: "15.2%",
  },
  {
    id: 3,
    title: "Gaming PC Setup",
    category: "Tech",
    description: "Clean, professional thumbnail for gaming setup showcase. Vibrant colors and product-focused composition that tech audiences love.",
    image: thumbnail3,
    technologies: ["Photoshop", "Product Photography", "Clean Design", "Gradient Backgrounds"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "850K",
    ctr: "11.5%",
  },
  {
    id: 4,
    title: "Relationship Story",
    category: "Lifestyle",
    description: "Engaging storytelling thumbnail with bold text and expressive faces. Eye-catching design that drives curiosity and clicks.",
    image: thumbnail4,
    technologies: ["Photoshop", "Typography", "Face Composition", "Color Pop"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "3.2M",
    ctr: "14.1%",
  },
  {
    id: 5,
    title: "Netflix Documentary",
    category: "Entertainment",
    description: "Cinematic thumbnail for documentary content. Professional celebrity composition with bold branding that captures attention.",
    image: thumbnail5,
    technologies: ["Photoshop", "Cinematic Grading", "Typography", "Brand Integration"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "1.1M",
    ctr: "10.8%",
  },
  {
    id: 6,
    title: "Social Media Earnings",
    category: "Business",
    description: "Engaging business thumbnail showcasing earnings across platforms. Clean design with clear messaging that drives clicks.",
    image: thumbnail6,
    technologies: ["Photoshop", "Data Visualization", "Clean Design", "Platform Logos"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "920K",
    ctr: "9.7%",
  },
  {
    id: 7,
    title: "Mike Tyson Feature",
    category: "Entertainment",
    description: "Dramatic sports documentary thumbnail with powerful imagery. Bold typography and striking visuals for maximum impact.",
    image: thumbnail7,
    technologies: ["Photoshop", "Dramatic Lighting", "Typography", "Color Grading"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "4.5M",
    ctr: "16.2%",
  },
  {
    id: 8,
    title: "YouTube Tips",
    category: "Business",
    description: "Educational thumbnail with clear messaging and professional design. Attention-grabbing elements that communicate value instantly.",
    image: thumbnail8,
    technologies: ["Photoshop", "Typography", "UI Elements", "Clean Design"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "780K",
    ctr: "13.5%",
  },
  {
    id: 9,
    title: "OBS Tutorial",
    category: "Tech",
    description: "Before/after style tutorial thumbnail. Clean comparison layout that showcases transformation and drives tutorial clicks.",
    image: thumbnail9,
    technologies: ["Photoshop", "Comparison Design", "Typography", "Clean Layout"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "650K",
    ctr: "11.8%",
  },
  {
    id: 10,
    title: "Valorant Ranked",
    category: "Gaming",
    description: "Exciting gaming thumbnail with rank progression theme. Dynamic colors and expressive reaction that resonates with gaming audiences.",
    image: thumbnail10,
    technologies: ["Photoshop", "Gaming Graphics", "Rank Icons", "Expression Capture"],
    role: "Thumbnail Designer",
    year: "2024",
    views: "1.2M",
    ctr: "14.8%",
  },
];

const categories = ["All", "Gaming", "Tech", "Entertainment", "Business", "Lifestyle"];

const ProjectCard = memo(({ project, index, onClick, onImageClick }: { project: Project; index: number; onClick: () => void; onImageClick: () => void }) => {
  return (
    <div>
      <GlassCard
        className="group cursor-pointer overflow-hidden hover-elevate"
        animate={false}
      >
        <div
          className="relative aspect-video overflow-hidden"
          onClick={onImageClick}
          onKeyDown={(e) => e.key === 'Enter' && onImageClick()}
          tabIndex={0}
          role="button"
          aria-label={`View ${project.title} preview`}
          data-testid={`card-project-${project.id}`}
        >
          <img
            src={project.image}
            alt={`${project.title} - ${project.category} thumbnail design`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cubic-ease will-change-transform"
            loading="lazy"
            decoding="async"
            style={{ transformOrigin: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 cubic-ease" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 cubic-ease">
            <motion.div
              className="flex gap-3"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 18, stiffness: 300 }}
            >
              <span
                className="p-3 rounded-full bg-white/25 backdrop-blur-sm border border-white/40 text-white hover:bg-white/35 transition-colors duration-300"
                aria-hidden="true"
              >
                <Eye className="w-5 h-5" />
              </span>
            </motion.div>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-medium text-red-500 dark:text-red-400 uppercase tracking-wider">
              {project.category}
            </span>
            {project.ctr && (
              <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">
                {project.ctr} CTR
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-300">
            {project.title}
          </h3>
        </div>
      </GlassCard>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string } | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleImagePreviewClick = useCallback((project: Project) => {
    setPreviewImage({ url: project.image, title: project.title });
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleClosePreview = useCallback(() => {
    setPreviewImage(null);
  }, []);

  return (
    <section id="work" className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-12"
          style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 text-foreground">
            Thumbnails
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Scroll-stopping thumbnails designed to maximize clicks and grow your YouTube channel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
          role="tablist"
          aria-label="Filter thumbnails by category"
          style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              role="tab"
              aria-selected={selectedCategory === category}
              aria-controls="portfolio-grid"
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/50 relative overflow-hidden group ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25"
                  : "bg-white/50 dark:bg-white/5 backdrop-blur-lg border border-white/30 dark:border-white/10 text-foreground/80 hover:text-foreground hover:bg-white/70 dark:hover:bg-white/10 hover:scale-105"
              }`}
              data-testid={`button-filter-${category.toLowerCase()}`}
            >
              <span className="relative z-10">
                {category}
              </span>
            </button>
          ))}
        </motion.div>

        <div
          id="portfolio-grid"
          role="tabpanel"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => handleProjectClick(project)}
              onImageClick={() => handleImagePreviewClick(project)}
            />
          ))}
        </div>
      </div>

      <ImagePreviewModal
        imageUrl={previewImage?.url || null}
        title={previewImage?.title || ""}
        isOpen={!!previewImage}
        onClose={handleClosePreview}
      />

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
}
