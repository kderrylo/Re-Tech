import { Image } from "@nextui-org/react";
import { ProductDetailProps } from "@/app/interface/product";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <>
      <div className="grid gap-4 py-4 mt-24 lg:mt-28">
        <Link href="/shop">
          <Button className="text-lg bg-dark hover:bg-dark/80">
            <ChevronLeft />
            Back
          </Button>
        </Link>
        <div className="md:grid md:grid-cols-2 gap-10 w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            className="w-full md:w-[30rem] h-96 aspect-square object-cover mb-4"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg text">{product.description}</p>
            <p className="text-2xl font-bold">
              Rp {product.price.toLocaleString()}
            </p>
            <Button className="text-lg bg-dark hover:bg-dark/80">
              Buy Now
            </Button>
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          defaultValue="desc"
          className="w-full"
        >
          <AccordionItem value="desc">
            <AccordionTrigger className="font-bold text-xl">
              Description
            </AccordionTrigger>
            <AccordionContent>{product.subDescription}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};
