import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  blurDataURL?: string;
}

interface GalleryGridProps {
  images: ImageProps[];
  onImageClick: (image: ImageProps) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden cursor-pointer group"
          onClick={() => onImageClick(image)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="transition-transform duration-300 transform group-hover:scale-110 object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="font-mono text-xl text-white text-center opacity-85">
              {image.alt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
