"use client";
import ImageGallery from "@/components/ImageGallery";
import NavBar from "@/components/NavBar";
import { homeImages } from "@/lib/images";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <main className="flex flex-col justify-between p-6 lg:p-24">
          <NavBar />

          <ImageGallery images={homeImages} />
        </main>
      )}
    </>
  );
}
