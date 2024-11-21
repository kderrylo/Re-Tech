import { Button } from "@nextui-org/react";
import Link from "next/link";

export const Sell = () => {
    return (
        <>
            <div className="grid grid-cols-2 grid-rows-2 gap-0 h-[400px]">
                {/* Left Column: Title with Image Background */}
                <div className="relative flex-1 flex items-center justify-center text-center bg-[url('/bg-contact.png')] bg-cover bg-center">
                    <h3 className="relative z-10 text-neutral-white font-bold text-4xl md:text-5xl">
                        Sell
                    </h3>
                </div>

                {/* Right Column: Descriptions */}
                <div className="flex-1 flex flex-col items-center justify-center gap-6 text-dark p-8">
                    <p className="text-center">
                        {`Sell your used electronics and electronic junk easily! Whether it's old phones, laptops, or broken gadgets, we offer a sustainable solution for disposing of tech items. Get cash for your unwanted electronics today!`}
                    </p>
                    <Link href="https://wa.me/62082299879929?text=Hi%20Retech!%20I%20want%20to%20sell%20my%20products,%20here's%20the%20details:%0A-Product%20Name%0A-Product%20Type%0A-Conditions%0A-Sell/Throw%0A-Photos%0A-Additional%20Info">
                        <Button
                            className="text-black border-dark_ border-3 w-40 h-16"
                            size="lg"
                            variant="bordered"
                            radius="none"
                        >
                            Sell Now!
                        </Button>
                    </Link>
                </div>
                {/* Left Column: Descriptions */}
                <div className="flex-1 flex flex-col items-center justify-center gap-6 text-dark p-8">
                    <p className="text-center">
                        {`Browse our collection of fully functional, secondhand electronics at great prices. From smartphones to laptops, each item is inspected and restored for quality. Shop sustainably and save today!`}
                    </p>
                    <Link href={"/shop"}>
                        <Button
                            className="text-black border-dark_ border-3 w-40 h-16"
                            size="lg"
                            variant="bordered"
                            radius="none"
                        >
                            Buy Now!
                        </Button>
                    </Link>
                </div>

                {/* Right Column: Title with Image Background */}
                <div className="relative flex-1 flex items-center justify-center text-center bg-[url('/bg-shop.png')] bg-cover bg-center">
                    <h3 className="relative z-10 text-neutral-white font-bold text-4xl md:text-5xl">
                        Shop
                    </h3>
                </div>
            </div>
        </>
    );
};
