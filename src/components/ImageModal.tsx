import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

interface ImageModalProps {
  selectedImage: ImageProps | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
      onClick={onClose}
    >
      <div className="relative">
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          style={{ maxHeight: "100vh", maxWidth: "100vw" }}
        />
      </div>
    </div>
  );
};

export default ImageModal;
