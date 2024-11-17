"use client";

import { notFound } from "next/navigation";
import { ProductItem } from "@/app/ui/shop/product-item";
import { ProductsProps } from "@/app/interface/shop";
import { useEffect, useState } from "react";

export default function ShopPage() {
  const [products, setProducts] = useState<ProductsProps[] | null>(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`/api/products`);
      const products: ProductsProps[] = await response.json();

      if(!products) return notFound();

      setProducts(products || null);
    };
    fetchProduct();
  }, []);

  if (!products) return <div>Not Found</div>;

  return (
    <>
      <div>
        <div className="w-full h-[50vh] bg-[url('/bg-shop.png')] bg-cover bg-center flex justify-center items-center shadow-lg">
          <h2 className="text-4xl lg:text-5xl font-black text-light text-center">
            Shop
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-6 mx-4">
          {products.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
