"use client";

import { useState, useEffect } from "react";
import Image from 'next/image'; 
import Navbar from "../ui/navigation/navigation-bar";
import { Footer } from "../ui/footer";

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
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        setItems(mockItems);
    }, []);

    return (
        <div>
            <div className="w-full shadow-lg text-dark">
                <div className='w-full h-[50vh] bg-[url("/bg-shop.png")] bg-cover bg-center flex justify-center items-end shadow-lg'>
                    <div className='w-3/4 max-w-[1024px] h-3/5 flex flex-col items-center gap-20 landscape:gap-0 landscape:justify-between'>
                        <div className='flex flex-col gap-4 pt-10'>
                            <div>
                                <h2 className='text-4xl lg:text-5xl font-black text-light text-center'>Shop </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-6 mx-4">
                    {items.map((item) => (
                        <div key={item.id} className="bg-light rounded-lg shadow-lg shadow-md overflow-hidden">
                            <Image
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                                width={400} 
                                height={200} 
                                priority 
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{item.name}</h2>
                                <p className="text-gray-600">{item.description}</p>
                                <p className="text-lg font-bold mt-2">Rp{item.price.toLocaleString()}</p>
                                <button className="mt-4 w-full bg-dark text-white py-2 rounded-lg hover:bg-accent">
                                    Beli Sekarang
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
