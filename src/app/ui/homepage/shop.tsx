import { Button } from "@nextui-org/react";
import Link from "next/link";

export const Shop = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-0 h-[400px]">
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

