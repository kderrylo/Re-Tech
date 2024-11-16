import { notFound } from "next/navigation";
import { ProductItem } from "@/app/ui/shop/product-item";
import { ProductsProps } from "@/app/interface/shop";

async function fetchProducts() {
  const url = process.env.NEXT_APP_URL;
  const response = await fetch(`${url}/api/products`);

  if (!response.ok) {
    throw new Error("Fetch Failed!");
  }

  const products: ProductsProps[] = await response.json();
  return products;
}

export default async function ShopPage() {
  const products = await fetchProducts();

  if (!products) return notFound();

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
