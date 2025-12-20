import { memo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImagePreviewModalProps {
  imageUrl: string | null;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImagePreviewModal = memo(function ImagePreviewModalComponent({
  imageUrl,
  title,
  isOpen,
  onClose,
}: ImagePreviewModalProps) {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape, { capture: true });
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape, { capture: true });
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!imageUrl) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
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
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={handleBackdropClick}
            data-testid="modal-image-backdrop"
            style={{ transform: "translateZ(0)" }}
          />
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            data-testid="modal-image-preview"
            onClick={handleBackdropClick}
            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
          >
            <div className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                loading="eager"
                decoding="async"
                onClick={(e) => e.stopPropagation()}
                data-testid="image-preview"
              />

              {/* Mobile Only Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="md:hidden absolute top-4 right-4 bg-black/40 hover:bg-black/60 backdrop-blur-lg border border-white/30 text-white rounded-full transition-colors"
                data-testid="button-close-image-preview"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

export default ImagePreviewModal;
