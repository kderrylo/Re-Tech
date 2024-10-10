import { Footer } from "@/app/ui/homepage/footer";
import { Hero } from "@/app/ui/homepage/hero";
import Navbar from "@/app/ui/navigation/navigation-bar";
import { About } from "@/app/ui/homepage/about"

export default function Home() {
  return (
    <div className="bg-navbar text-light">
      <Hero />
      <About/>
    </div>
  );
}
