import aboutImg from "../../../public/bg-about.jpg";
import Image from "next/image";

export const About = () => {
    return (
        <div className="w-full ">
            <div className="text-dark flex flex-row font-bold text-4xl lg:text-6xl justify-center align-center h-full mt-11 ">About Us</div>
            <div className="flex flex-col md:flex-row w-full gap-10 justify-between">

                <div className='min-h-[400px] flex justify-center items-center mx-10'>
                    <div className="hw-56 md:w-64 lg:w-96 m-auto md:m-0 border-4 border-gray-300 shadow-lg flex justify-center items-center mx-10">
                        <Image src={aboutImg} alt="aboutImg" className="object-contain " />
                    </div>
                </div>


                <div className='p-8 flex flex-col text-black justify-center items-center '>
                    <p>
                        At Re-Tech, we believe in giving a second life to electronic devices, no matter their condition. Our mission is to provide a sustainable solution for electronic waste by accepting and responsibly processing tech items that are no longer in use. Whether your devices are fully functional or broken, we are here to help you recycle, reuse, and reimagine the value of your tech.
                        <br /><br />
                        Our team of experts carefully dismantles and evaluates each device, ensuring that usable parts are repurposed and sold, while non-functional components are processed in an environmentally friendly manner. By choosing Re-Tech, you&apos;re not just disposing of your old electronics, you&apos;re contributing to a cleaner planet and reducing the impact of e-waste on our environment.
                        <br /><br />
                        Join us in our commitment to sustainability, and let&apos;s work together to create a greener future—one device at a time.
                    </p>
                </div>
            </div>
        </div>
    )
}