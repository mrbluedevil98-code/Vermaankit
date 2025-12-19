import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, User, Palette, TrendingUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "./PortfolioGrid";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = memo(function ProjectModalComponent({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const handleOrderSimilar = () => {
    onClose();
    setTimeout(() => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleViewMore = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
            data-testid="modal-backdrop"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-4 md:inset-[10%] z-50 overflow-hidden"
            data-testid="modal-project"
          >
            <div className="h-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden">
              <div className="relative h-[40%] md:h-[50%] overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-full"
                  data-testid="button-close-modal"
                >
                  <X className="w-5 h-5" />
                </Button>
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="mb-3 bg-red-500/80 backdrop-blur text-white border-none">
                    {project.category}
                  </Badge>
                  <h2 className="text-2xl md:text-4xl font-bold text-white">
                    {project.title}
                  </h2>
                </div>
              </div>

              <div className="flex-1 overflow-auto p-6 md:p-8">
                <div className="max-w-3xl">
                  <p className="text-lg text-muted-foreground mb-8">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {project.views && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10">
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                          <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground block">Views</span>
                          <span className="font-semibold text-foreground">{project.views}</span>
                        </div>
                      </div>
                    )}
                    {project.ctr && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10">
                        <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                          <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground block">CTR</span>
                          <span className="font-semibold text-foreground">{project.ctr}</span>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10">
                      <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                        <Calendar className="w-4 h-4 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground block">Year</span>
                        <span className="font-semibold text-foreground">{project.year}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10">
                      <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
                        <Palette className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground block">Tools</span>
                        <span className="font-semibold text-foreground">{project.technologies.length}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">Design Techniques</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-white/50 dark:bg-white/10 backdrop-blur border border-white/30 dark:border-white/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    >
                      <Button
                        onClick={handleOrderSimilar}
                        className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300"
                        data-testid="button-order-similar"
                      >
                        Order Similar Thumbnail
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    >
                      <Button
                        onClick={handleViewMore}
                        variant="outline"
                        className="rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-lg border-white/30 dark:border-white/10 transition-all duration-300"
                        data-testid="button-view-more"
                      >
                        View More Work
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
