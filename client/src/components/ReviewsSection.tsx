import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import GlassCard from "./GlassCard";

const reviews = [
  {
    id: 1,
    author: "James Wilson",
    role: "Gaming Creator",
    rating: 5,
    comment: "Ankit is hands down the best thumbnail designer I've worked with. His attention to detail and ability to capture the 'hook' of a video is unmatched. My CTR went from 4% to 12% in just two weeks!",
    date: "Dec 2024"
  },
  {
    id: 2,
    author: "Sarah Chen",
    role: "Tech Reviewer",
    rating: 5,
    comment: "The speed and quality are incredible. I needed a thumbnail for a breaking news tech story and Ankit delivered a masterpiece in under 4 hours. Professional, creative, and highly recommended.",
    date: "Nov 2024"
  },
  {
    id: 3,
    author: "Marcus Brown",
    role: "Business Consultant",
    rating: 5,
    comment: "Working with Ankit has been a game-changer for my channel. He understands the business side of YouTube and designs thumbnails that don't just look good, but actually convert. A true partner in growth.",
    date: "Oct 2024"
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#05070a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What My Clients Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by creators worldwide to deliver high-performance thumbnails that drive results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full p-8 flex flex-col relative overflow-hidden group hover:border-red-500/30 transition-colors">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-white/5 group-hover:text-red-500/10 transition-colors" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-300 mb-8 flex-1 italic leading-relaxed">
                  "{review.comment}"
                </p>

                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center font-bold text-white text-lg shadow-lg">
                    {review.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white leading-none mb-1">{review.author}</h4>
                    <p className="text-xs text-red-500/80 uppercase tracking-widest font-semibold">{review.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
