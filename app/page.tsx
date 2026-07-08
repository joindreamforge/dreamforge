import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularTools from "@/components/PopularTools";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <PopularTools />
    </main>
  );
}