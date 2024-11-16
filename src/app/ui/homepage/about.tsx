"use client";

import { Image } from "@nextui-org/react";

export const About = () => {
  return (
    <div className="flex flex-col mb-10 gap-8 px-8 justify-center items-center min-h-screen">
      <h3 className="text-dark font-bold text-4xl text-center">About Us</h3>
      <div className="grid md:flex justify-center items-center gap-8">
        <div className="w-full flex justify-center items-center">
          <Image
            src="/bg-about.jpg"
            alt="aboutImg"
            className="border-4 border-gray-300 shadow-lg object-contain rounded-none"
          />
        </div>
        <div className="grid gap-8 text-dark">
          <p>{`At ReTech, we believe in giving a second life to electronic devices, no matter their condition. Our mission is to provide a sustainable solution for electronic waste by accepting and responsibly processing tech items that are no longer in use. Whether your devices are fully functional or broken, we are here to help you recycle, reuse, and reimagine the value of your tech.`}</p>
          <p>{`Our team of experts carefully dismantles and evaluates each device, ensuring that usable parts are repurposed and sold, while non-functional components are processed in an environmentally friendly manner. By choosing ReTech, you\'re not just disposing of your old electronics, you\'re contributing to a cleaner planet and reducing the impact of e-waste on our environment.`}</p>
          <p>{`Join us in our commitment to sustainability, and let\'s work together to create a greener future—one device at a time.`}</p>
        </div>
      </div>
    </div>
  );
};
