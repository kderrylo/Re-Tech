import { Hero } from "@/app/ui/homepage/hero";
import { About } from "@/app/ui/homepage/about";
import { Sell } from "@/app/ui/homepage/sell";

export default function Home() {
  return (
    <>
      <div className="bg-navbar text-light">
        <Hero />
        <Sell />
        <About />
      </div>
    </>
  );
}
