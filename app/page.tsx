import Header from "@/src/Header";
import Hero from "@/src/Hero";
import { Projects } from "@/src/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center  bg-white dark:bg-black sm:items-start">
        <Header title="José Meroño Martínez" />
        <Hero></Hero>
        <Projects></Projects>
      </main>
    </div>
  );
}
