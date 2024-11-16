import { Button } from "@nextui-org/react";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mb-10 justify-center items-center min-h-screen bg-[url('/bg-laptopDark.png')] bg-cover">
        <h1 className="text-1xl lg:text-2xl text-neutral-white text-center">
          We Accept Your Tech in Any Condition
        </h1>
        <div>
          <h2 className="text-4xl lg:text-5xl font-black text-neutral-white text-center">
            Reduce, Resell, <span className="text-accent">ReTech</span>
          </h2>
          <div className="w-full flex justify-center gap-6 mt-6">
            <Link href={"/shop"}>
              <Button
                className="text-white border-dark_ border-3 px-8 py-7"
                size="lg"
                variant="bordered"
                radius="none"
              >
                Discover
              </Button>
            </Link>
            <Link href={"/contact"}>
              <Button
                className="text-white border-dark_ border-3 px-8 py-7"
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
