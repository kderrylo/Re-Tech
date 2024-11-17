"use client";

import { notFound } from "next/navigation";
import { ProductItemProps } from "@/app/interface/product";
import { ProductDetail } from "@/app/ui/shop/product-detail";
import { useEffect, useState } from "react";

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const [product, setProduct] = useState<ProductItemProps | null>(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`/api/products`);
      const products: ProductItemProps[] = await response.json();
      const selectedProduct = products.find(
        (p) => p.id === parseInt(params.id)
      );

      if(!selectedProduct) return notFound();

      setProduct(selectedProduct || null);
    };
    fetchProduct();
  }, [params.id]);

  if (!product) return <div>Not Found</div>;

  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-5xl mx-auto px-4">
          <ProductDetail product={product} />
        </div>
      </div>
    </>
  );
}
