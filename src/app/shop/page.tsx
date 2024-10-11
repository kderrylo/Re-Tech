"use client";

import { ProductItem } from "@/app/ui/shop/product-item";

interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const mockItems: Item[] = [
    {
        id: 1,
        name: "Laptop Bekas",
        description: "Laptop Dell dengan spesifikasi baik.",
        price: 3000000,
        imageUrl: "/assestsShop/1.jpg",
    },
    {
        id: 2,
        name: "Smartphone Bekas",
        description: "Smartphone Samsung Galaxy A30 dalam kondisi baik.",
        price: 1500000,
        imageUrl: "/assestsShop/2.jpg",
    },
    {
        id: 3,
        name: "Monitor 24 inch Bekas",
        description: "Monitor LG 24 inch, resolusi tinggi.",
        price: 1200000,
        imageUrl: "/assestsShop/3.jpg",
    },
    {
        id: 4,
        name: "Kamera DSLR Bekas",
        description: "Kamera Canon EOS 1300D, lengkap dengan lensa.",
        price: 4500000,
        imageUrl: "/assestsShop/4.jpg",
    },
    {
        id: 5,
        name: "Headphone Bluetooth Bekas",
        description: "Headphone Sony WH-1000XM3, noise-canceling.",
        price: 2000000,
        imageUrl: "/assestsShop/5.jpg",
    },
    {
        id: 6,
        name: "Keyboard Mekanik",
        description: "Keyboard Razer BlackWidow, kondisi seperti baru.",
        price: 800000,
        imageUrl: "/assestsShop/6.JPG",
    },
];

const ShopPage = () => {
    return (
        <div>
            <div className="w-full shadow-lg text-dark">
                <div className="w-full h-[50vh] bg-[url('/bg-shop.png')] bg-cover bg-center flex justify-center items-end shadow-lg">
                    <div className="w-3/4 max-w-[1024px] h-3/5 flex flex-col items-center gap-20 landscape:gap-0 landscape:justify-between">
                        <div className="flex flex-col gap-4 pt-10">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-black text-light text-center">Shop </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-6 mx-4">
                    <ProductItem items={mockItems} />
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
