import { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, User, Palette, TrendingUp, Eye, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Project, Review } from "./PortfolioGrid";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = memo(function ProjectModalComponent({ project, isOpen, onClose }: ProjectModalProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ author: "", rating: 5, comment: "" });

  useEffect(() => {
    if (project) {
      setReviews(project.reviews || []);
    }
  }, [project]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const handleAddReview = () => {
    if (newReview.author.trim() && newReview.comment.trim()) {
      setReviews([
        {
          id: reviews.length + 1,
          author: newReview.author,
          rating: newReview.rating,
          comment: newReview.comment,
          date: new Date().toISOString().split('T')[0]
        },
        ...reviews
      ]);
      setNewReview({ author: "", rating: 5, comment: "" });
    }
  };

  const handleOrderSimilar = () => {
    onClose();
    setTimeout(() => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleViewMore = () => {
    onClose();
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[9999]"
              onClick={onClose}
              data-testid="modal-backdrop"
              style={{ transform: "translateZ(0)" }}
              aria-hidden="true"
            />
            <motion.div
              key="modal-container"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[10000] flex items-center justify-center p-2 sm:p-4 md:p-6 pointer-events-none"
              onClick={handleContainerClick}
              data-testid="modal-project"
              style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
            >
              <div 
                className="w-full max-w-4xl max-h-[95vh] md:max-h-[90vh] bg-white dark:bg-slate-950 rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto relative z-[10001]"
                onClick={(e) => e.stopPropagation()}
              >
              {/* Image Section - Preserves Aspect Ratio */}
              <div className="relative flex-1 md:flex-none md:h-[450px] min-h-0 overflow-hidden bg-[#0a0c14] flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                
                {/* Close Button - Desktop & Mobile */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white rounded-md transition-colors"
                  data-testid="button-close-modal"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* Category & Title Overlay */}
                <div className="absolute top-0 left-0 right-0 pt-6 px-6 z-10">
                  <Badge className="mb-2 bg-red-500 hover:bg-red-600 text-white border-none rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 overflow-auto p-6 bg-[#0a0c14] text-white">
                <div className="max-w-3xl">
                  <p className="text-base text-gray-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {project.views && (
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111420] border border-white/5">
                        <div className="p-3 rounded-lg bg-blue-500/10">
                          <Eye className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 block uppercase tracking-wider font-medium">Views</span>
                          <span className="text-xl font-bold text-white">{project.views}</span>
                        </div>
                      </div>
                    )}
                    {project.ctr && (
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111420] border border-white/5">
                        <div className="p-3 rounded-lg bg-green-500/10">
                          <TrendingUp className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 block uppercase tracking-wider font-medium">CTR</span>
                          <span className="text-xl font-bold text-white">{project.ctr}</span>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111420] border border-white/5">
                      <div className="p-3 rounded-lg bg-red-500/10">
                        <Calendar className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 block uppercase tracking-wider font-medium">Year</span>
                        <span className="text-xl font-bold text-white">{project.year}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111420] border border-white/5">
                      <div className="p-3 rounded-lg bg-orange-500/10">
                        <Palette className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 block uppercase tracking-wider font-medium">Tools</span>
                        <span className="text-xl font-bold text-white">{project.technologies.length}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Design Techniques</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-[#111420] text-gray-300 border border-white/10 rounded-md px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={handleOrderSimilar}
                        className="w-full h-12 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-red-500/20"
                        data-testid="button-order-similar"
                      >
                        Order Similar Thumbnail
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

ProjectModal.displayName = "ProjectModal";

export default ProjectModal;
