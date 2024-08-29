"use client";

import dynamic from "next/dynamic";
import SplashScreen from "@/components/SplashScreen";

const PageView = dynamic(() => import("@/components/HomePage"), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default function Home() {
  return <PageView />;
}
