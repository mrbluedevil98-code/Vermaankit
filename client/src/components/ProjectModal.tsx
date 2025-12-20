import { memo, useState } from "react";
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
  const [reviews, setReviews] = useState<Review[]>(project?.reviews || [
    {
      id: 1,
      author: "Sarah Anderson",
      rating: 5,
      comment: "Amazing thumbnail design! Increased my CTR by 20%. Highly recommend!",
      date: "2024-12-10"
    },
    {
      id: 2,
      author: "Mike Johnson",
      rating: 5,
      comment: "Professional quality work. Great attention to detail.",
      date: "2024-12-05"
    }
  ]);
  const [newReview, setNewReview] = useState({ author: "", rating: 5, comment: "" });

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
            data-testid="modal-backdrop"
            style={{ transform: "translateZ(0)" }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-4 md:inset-[10%] z-50 overflow-hidden"
            data-testid="modal-project"
            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
          >
            <div className="h-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-white/30 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden">
              <div className="relative h-[40%] md:h-[50%] overflow-hidden bg-gradient-to-b from-white/40 to-white/20 dark:from-white/5 dark:to-white/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 dark:from-black/20 to-transparent" />
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
                            <span className="ml-2 text-sm font-medium text-foreground self-center">
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
                      {reviews.map((review) => (
                        <div
                          key={review.id}
                          className="p-4 rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10"
                          data-testid={`review-item-${review.id}`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <p className="font-semibold text-foreground">{review.author}</p>
                              <p className="text-xs text-muted-foreground">{review.date}</p>
                            </div>
                            <div className="flex gap-0.5">
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
                          <p className="text-sm text-foreground/90">{review.comment}</p>
                        </div>
                      ))}
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
