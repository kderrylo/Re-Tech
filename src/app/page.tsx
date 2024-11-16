import { Hero } from "@/app/ui/homepage/hero";
import { About } from "@/app/ui/homepage/about";

export default function Home() {
  return (
    <>
      <div className="bg-navbar text-light">
        <Hero />
        <About />
      </div>
    </>
  );
}
