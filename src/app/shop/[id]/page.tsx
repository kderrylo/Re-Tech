import { notFound } from "next/navigation";
import { ProductItemProps } from "@/app/interface/product";
import { ProductDetail } from "@/app/ui/shop/product-detail";

async function fetchProduct(id: string) {
  const url = process.env.NEXT_APP_URL;
  const response = await fetch(`${url}/api/products`);

  if (!response.ok) {
    throw new Error("Fetch Failed!");
  }

  const products: ProductItemProps[] = await response.json();
  const product = products.find((p) => p.id === parseInt(id));
  return product;
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(params.id);

  if (!product) return notFound();

  return (
    <>
      <div className="min-h-screen bg-dark_">
        <ProductDetail product={product} />
      </div>
    </>
  );
}
