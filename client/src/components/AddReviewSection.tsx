import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MessageCircle, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import GlassCard from "./GlassCard";

export default function AddReviewSection() {
  const { toast } = useToast();
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both your name and a comment.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Review Submitted",
        description: "Thank you for your feedback! It will be visible soon.",
      });
      setAuthor("");
      setComment("");
      setRating(5);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="add-review" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-transparent pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-red-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Share Your Experience
          </h2>
          <p className="text-gray-400 text-lg">
            Have we worked together? I'd love to hear your feedback on the thumbnails I've designed for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GlassCard className="p-8 sm:p-10 border-white/10 bg-white/[0.01] backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold text-gray-300 block mb-2 uppercase tracking-wider">Your Name</label>
                  <Input
                    placeholder="Enter your name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-600 h-12 rounded-xl focus:ring-red-500/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-300 block mb-2 uppercase tracking-wider">Rating</label>
                  <div className="flex gap-2 h-12 items-center bg-white/[0.03] px-4 rounded-xl border border-white/10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="transition-transform hover:scale-125"
                      >
                        <Star
                          className={`w-6 h-6 transition-all ${
                            star <= rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-700 hover:text-yellow-400"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-300 block mb-2 uppercase tracking-wider">Your Feedback</label>
                <Textarea
                  placeholder="Tell me about your experience working with me..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="bg-white/[0.03] border-white/10 text-white placeholder:text-gray-600 rounded-xl min-h-[150px] focus:ring-red-500/50 py-4"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg rounded-xl shadow-xl shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Post Public Review
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
