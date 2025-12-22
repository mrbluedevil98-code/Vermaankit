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
              <div className="relative flex-shrink-0 w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden bg-[#0a0c14] flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                
                {/* Overlay Content Wrapper */}
                <div className="absolute inset-0 z-10 p-4 sm:p-6 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="pointer-events-auto">
                      <Badge className="mb-2 bg-red-500 hover:bg-red-600 text-white border-none rounded-md px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-lg">
                        {project.category}
                      </Badge>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-md">
                        {project.title}
                      </h2>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={onClose}
                      className="pointer-events-auto bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white rounded-md transition-colors"
                      data-testid="button-close-modal"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
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

                  <div className="border-t border-white/10 pt-8 mt-8">
                    <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-red-500" />
                      Client Reviews
                    </h3>

                    <div className="mb-8 p-5 rounded-xl bg-[#111420] border border-white/5">
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-gray-400 block mb-2">Your Name</label>
                          <Input
                            placeholder="Enter your name"
                            value={newReview.author}
                            onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                            className="bg-[#0a0c14] border-white/10 text-white placeholder:text-gray-600 rounded-lg focus:ring-red-500/50"
                            data-testid="input-review-name"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-400 block mb-3">Rating</label>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <motion.button
                                key={star}
                                type="button"
                                onClick={() => setNewReview({ ...newReview, rating: star })}
                                whileHover={{ scale: 1.25, rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-1 transition-all"
                                data-testid={`button-star-rating-${star}`}
                              >
                                <Star
                                  className={`w-8 h-8 transition-all ${
                                    star <= newReview.rating
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-gray-700 hover:text-yellow-400"
                                  }`}
                                />
                              </motion.button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-400 block mb-2">Review</label>
                          <Textarea
                            placeholder="Share your experience with this thumbnail design..."
                            value={newReview.comment}
                            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                            className="bg-[#0a0c14] border-white/10 text-white placeholder:text-gray-600 rounded-lg min-h-[100px] focus:ring-red-500/50"
                            data-testid="textarea-review-comment"
                          />
                        </div>
                        <Button
                          onClick={handleAddReview}
                          className="w-full h-12 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold rounded-xl"
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
                            className="p-5 rounded-xl bg-[#111420] border border-white/5"
                            data-testid={`review-item-${review.id}`}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <p className="font-bold text-white">{review.author}</p>
                                <p className="text-xs text-gray-500">{review.date}</p>
                              </div>
                              <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-800"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">{review.comment}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-center text-gray-500 py-6 italic border border-dashed border-white/5 rounded-xl">
                          No reviews yet. Be the first to share your experience!
                        </p>
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
