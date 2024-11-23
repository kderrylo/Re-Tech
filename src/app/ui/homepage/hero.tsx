import { Button } from "@nextui-org/react";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center min-h-screen bg-[url('/bg-laptopDark.png')] bg-cover">
        <h1 className="text-1xl lg:text-2xl text-neutral-white text-center">
          We Accept Your Tech in Any Condition
        </h1>
        <h2 className="text-4xl lg:text-5xl font-black text-neutral-white text-center">
          Reduce, Resell, ReTech
        </h2>
        <div className="w-full flex flex-col items-center gap-6 mt-6">
          <div className="w-full flex flex-wrap justify-center gap-6">
            <Link href={"/shop"}>
              <Button
                className="text-white hover:border-white border-dark_ border-3 w-40 h-16"
                size="lg"
                variant="bordered"
                radius="none"
              >
                Discover
              </Button>
            </Link>
            <Link
              href="https://wa.me/62082299879929?text=Hi%20Retech!%20I%20want%20to%20sell%20my%20products,%20here's%20the%20details:%0A-Product%20Name%0A-Product%20Type%0A-Conditions%0A-Sell/Throw%0A-Photos%0A-Additional%20Info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="text-white hover:border-white border-dark_ border-3 w-40 h-16"
                size="lg"
                variant="bordered"
                radius="none"
              >
                Sell
              </Button>
            </Link>
            <Link href={"/contact"}>
              <Button
                className="text-white hover:border-white border-dark_ border-3 w-40 h-16"
                size="lg"
                variant="bordered"
                radius="none"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
