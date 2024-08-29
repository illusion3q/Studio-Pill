import { useEffect } from "react";
import anime from "animejs";
import Image from "next/image";
import { montserrat } from "@/lib/fonts";

export default function SplashScreen({
  finishLoading,
}: {
  finishLoading: (isLoading: boolean) => void;
}) {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(false),
    });

    loader.add({
      targets: ".flex",
      opacity: [1, 0],
      duration: 1000,
      easing: "easeInOutQuad",
      delay: 1000,
    });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen gap-4">
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
  );
}
