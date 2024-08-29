import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="flex items-center justify-center h-screen gap-4 animate-pulse ease-out">
      <Image
        className="relative"
        src="/pillv3.png"
        alt="logo"
        width={65}
        height={65}
        priority
      />
    </div>
  );
}
