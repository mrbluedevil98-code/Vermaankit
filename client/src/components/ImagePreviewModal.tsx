import { memo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[9999]"
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
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none"
            data-testid="modal-image-preview"
            onClick={handleBackdropClick}
            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
          >
            <div 
              className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center pointer-events-auto z-[10001]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                loading="eager"
                decoding="async"
                onClick={(e) => e.stopPropagation()}
                data-testid="image-preview"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

export default ImagePreviewModal;
