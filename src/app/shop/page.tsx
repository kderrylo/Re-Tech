"use client";

import { useState, useEffect } from "react";
import Image from 'next/image'; 
import Navbar from "../components/navbar";
import { Footer } from "../components/footer";
import Link from "next/link";

interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}


const ShopPage = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        const fetchItem = async () => {
            const response = await fetch('api/products');
            const data = await response.json();
            setItems(data);
        };
        fetchItem();
    }, []);

    return (
        <div>
            <Navbar />
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
                                <Link href={`/products/${item.id}`}>
                                    <button className="mt-4 w-full bg-dark text-white py-2 rounded-lg hover:bg-accent">
                                        View Product
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ShopPage;
