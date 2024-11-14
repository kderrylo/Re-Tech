import Link from "next/link"

export const Hero = () => {
    return (
        <div className="w-full h-screen min-h-[400px] shadow-lg">
            <div className='w-full h-screen min-h-[400px] bg-[url("/bg-laptopDark.png")] bg-cover bg-center'>
                <div className='w-full h-screen min-h-[400px] flex justify-center items-end'>
                    <div className='w-3/4 max-w-[1024px] h-3/5 flex flex-col items-center gap-20 landscape:gap-0 landscape:justify-between'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-1xl lg:text-2xl text-neutral-white text-center'>We Accept Your Tech in Any Condition</h1>
                            <div className="">
                                <h2 className='text-4xl lg:text-5xl font-black text-neutral-white text-center'>Reduce, Resell, <span className="text-accent">ReTech</span></h2>
                                <div className="flex flex-row justify-center gap-5 pt-7">
                                    <Link href={"/shop"}>
                                        <button className="px-8 py-4 border-2 border-accent hover:border-white text-white bg-transparent hover:bg-black hover:text-white transition-all duration-300 ">
                                            Discover
                                        </button>
                                    </Link>
                                    <Link href={"/contact"}>
                                        <button className="px-8 py-4 border-2 border-accent hover:border-white text-white bg-transparent hover:bg-black hover:text-white transition-all duration-300 ">
                                            Contact Us
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}