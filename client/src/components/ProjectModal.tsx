import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, User, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Project } from "./PortfolioGrid";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 md:inset-[10%] z-50 overflow-hidden"
            data-testid="modal-project"
          >
            <div className="h-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden">
              <div className="relative h-[40%] md:h-[50%] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
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
                  <Badge className="mb-3 bg-violet-600/80 backdrop-blur text-white border-none">
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

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/30">
                        <User className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground block">Role</span>
                        <span className="font-medium text-foreground">{project.role}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/30">
                        <Calendar className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground block">Year</span>
                        <span className="font-medium text-foreground">{project.year}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/30">
                        <Code className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground block">Stack</span>
                        <span className="font-medium text-foreground">{project.technologies.length} tools</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">Technologies</h3>
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
                    <Button
                      className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-xl"
                      data-testid="button-view-live"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Project
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-lg border-white/30 dark:border-white/10"
                      data-testid="button-case-study"
                    >
                      Read Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
