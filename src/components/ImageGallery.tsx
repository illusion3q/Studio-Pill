"use client"; // Ensures this component is rendered on the client-side

import React, { useState } from "react";
import GalleryGrid from "./GalleryGrid"; // Import the GalleryGrid component
import ImageModal from "./ImageModal"; // Import the ImageModal component

interface ImageProps {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageProps[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);

  return (
    <div className="flex flex-col items-center justify-center pt-4">
      <GalleryGrid images={images} onImageClick={setSelectedImage} />
      <ImageModal
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default ImageGallery;
