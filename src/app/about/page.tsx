"use client";
import NavBar from "@/components/NavBar";
import { montserrat } from "@/lib/fonts";

export default function About() {
  return (
    <main className="flex flex-col justify-between p-6 lg:p-24">
      <NavBar />

      <div className="flex pt-32">
        <h1
          className={`${montserrat.className} text-6xl font-bold text-center`}
        >
          work in progress
        </h1>
      </div>
    </main>
  );
}
