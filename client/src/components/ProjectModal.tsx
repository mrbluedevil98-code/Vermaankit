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
              <div className="relative flex-1 md:flex-none md:h-96 min-h-0 overflow-hidden bg-gradient-to-br from-white/30 to-white/10 dark:from-white/5 dark:to-transparent flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-3 sm:p-4 md:p-5 rounded-xl"
                  loading="eager"
                  decoding="async"
                />
                
                {/* Close Button - Mobile Only */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="block md:hidden absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-lg border border-white/30 dark:border-white/20 text-foreground dark:text-white rounded-full transition-colors"
                  data-testid="button-close-modal"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* Category & Title Overlay - Clean & Subtle */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent pt-12 pb-4 px-4 sm:px-6">
                  <Badge className="mb-2 sm:mb-3 bg-red-500 text-white border-none">
                    {project.category}
                  </Badge>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 md:flex-none overflow-auto p-4 sm:p-6 md:p-6">
                <div className="max-w-3xl md:max-w-none">
                  <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
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

                  <div className="flex flex-wrap gap-4 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", damping: 18, stiffness: 300 }}
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
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", damping: 18, stiffness: 300 }}
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

                  <div className="border-t border-white/20 dark:border-white/10 pt-8">
                    <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-red-500" />
                      Client Reviews
                    </h3>

                    <div className="mb-8 p-5 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-foreground block mb-2">Your Name</label>
                          <Input
                            placeholder="Enter your name"
                            value={newReview.author}
                            onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                            className="bg-white/70 dark:bg-white/10 border-white/30 dark:border-white/10 rounded-lg"
                            data-testid="input-review-name"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground block mb-3">Rating</label>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <motion.button
                                key={star}
                                type="button"
                                onClick={() => setNewReview({ ...newReview, rating: star })}
                                whileHover={{ scale: 1.25, rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", damping: 18, stiffness: 300 }}
                                className="p-1 transition-all"
                                data-testid={`button-star-rating-${star}`}
                              >
                                <Star
                                  className={`w-8 h-8 transition-all ${
                                    star <= newReview.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-300 dark:text-gray-600 hover:text-yellow-400"
                                  }`}
                                />
                              </motion.button>
                            ))}
                            <span className="hidden md:inline ml-2 text-sm font-medium text-foreground self-center">
                              {newReview.rating} {newReview.rating === 1 ? 'Star' : 'Stars'}
                            </span>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground block mb-2">Review</label>
                          <Textarea
                            placeholder="Share your experience with this thumbnail design..."
                            value={newReview.comment}
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            className="bg-white/70 dark:bg-white/10 border-white/30 dark:border-white/10 rounded-lg min-h-[100px]"
                            data-testid="textarea-review-comment"
                          />
                        </div>
                        <Button
                          onClick={handleAddReview}
                          className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white"
                          data-testid="button-submit-review"
                        >
                          Post Review
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {reviews.length > 0 ? (
                        reviews.map((review) => (
                          <div
                            key={review.id}
                            className="p-4 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10"
                            data-testid={`review-item-${review.id}`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex-1 min-w-0 mr-2">
                                <p className="font-semibold text-foreground truncate">{review.author}</p>
                                <p className="text-xs text-muted-foreground">{review.date}</p>
                              </div>
                              <div className="flex gap-0.5 shrink-0">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300 dark:text-gray-600"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-foreground/90 whitespace-pre-wrap break-words">{review.comment}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-center text-muted-foreground py-4 italic">No reviews yet for this project. Be the first to leave one!</p>
                      )}
                    </div>
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
