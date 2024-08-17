'use client';
import { useState } from 'react';
import Image from "next/image";
import { Montserrat } from "next/font/google";
import ImageGallery from "@/app/ImageGallery";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const images = [
        { src: '/1.png', alt: 'Project 1' },
        { src: '/2.png', alt: 'Project 2' },
        { src: '/3.png', alt: 'Project 3' },
        { src: '/4.png', alt: 'Project 4' },
        { src: '/5.png', alt: 'Project 5' },
        { src: '/6.png', alt: 'Project 6' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <main className="flex flex-col justify-between p-6 lg:p-24">
            <div className="z-10 w-full flex items-center justify-between text-lg">
                <div className="flex items-center gap-4">
                    <Image
                        className="relative"
                        src="/pillv3.png"
                        alt="logo"
                        width={20}
                        height={20}
                        priority
                    />
                    <p className={montserrat.className}>studio pill</p>
                </div>

                <div className="hidden lg:flex flex-row gap-5">
                    <p className={montserrat.className}>architecture</p>
                    <p>-</p>
                    <p className={montserrat.className}>design</p>
                    <p>-</p>
                    <p className={montserrat.className}>about</p>
                    <p>-</p>
                    <p className={montserrat.className}>contact</p>
                </div>

                <button
                    className="lg:hidden flex items-center justify-center p-2 rounded-md focus:outline-none"
                    onClick={toggleMenu}
                >
                    <Image
                        src="/menu-icon.svg"
                        alt="Menu"
                        width={24}
                        height={24}
                    />
                </button>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden flex flex-col gap-4 mt-4 mx-auto">
                    <p className={montserrat.className}>architecture</p>
                    <p className={montserrat.className}>design</p>
                    <p className={montserrat.className}>about</p>
                    <p className={montserrat.className}>contact</p>
                </div>
            )}

            <ImageGallery images={images} />

            <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                {/* Additional content here */}
            </div>
        </main>
    );
}
