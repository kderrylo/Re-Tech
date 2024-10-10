import {Footer} from "./components/footer";
import {Hero} from "./components/Hero";
import Navbar from "@/app/ui/navigation/navigation-bar";
import {About} from "./components/about"

export default function Home() {
  return (
    <div className="bg-navbar text-light ">
      <Navbar />
      <Hero />
      <About/>
      <Footer />
    </div>
  );
}
