'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageProps {
    src: string;
    alt: string;
    blurDataURL?: string;
}

interface ImageGalleryProps {
    images: ImageProps[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);

    return (
        <div className="flex flex-col items-center justify-center pt-4">
            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            style={{maxHeight: '100vh', maxWidth: '100vw'}}
                        />
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden cursor-pointer group"
                        onClick={() => setSelectedImage(image)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="transition-transform duration-300 transform group-hover:scale-110 object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <p className="font-mono text-xl text-white text-center">{image.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
