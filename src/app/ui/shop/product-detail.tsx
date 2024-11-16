import { Image } from "@nextui-org/react";
import { ProductDetailProps } from "@/app/interface/product";
import Link from "next/link";

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <>
      <div className="pt-12 flex flex-col justify-center items-center">
        <div className="flex justify-center gap-10 py-1 items-center">
          <div className="item-left">
            <h1 className="text-3xl font-bold mb-4 pt-20">{product.name}</h1>
            <Image
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-cover mb-4"
              width={400}
              height={600}
            />
          </div>
          <hr className=" item-center border-t border-red mx-6 my-6" />
          <div className="item-right">
            <p className="text-lg text mb-2">{product.description}</p>
            <p className="text-2xl font-bold">
              Rp{product.price.toLocaleString()}
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-40 py-5">
          <h1 className="text-3xl pb-5">Description</h1>
          <p className="text-lg text  ">{product.subDescription}</p>
        </div>
        <Link href="/shop">
          <button className="m-10 px-4 py-2 bg-light text-black rounded-lg">
            Back
          </button>
        </Link>
      </div>
    </>
  );
};
