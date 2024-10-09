// components/MediumNavbar.tsx
import { Navbar } from "@nextui-org/react";
import { scroller } from "react-scroll";
import { useEffect, useState } from "react";
import { useCallback } from "react";

const handleScroll = (target: string) => {
  scroller.scrollTo(target, {
    duration: 1100,
    delay: 100,
    smooth: "easeInOut",
    offset: -110,
  });
};

const MediumNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true); 
      }
      setLastScrollY(window.scrollY); 
    }
  }, [lastScrollY]);
  
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  return (
    <Navbar
      shouldHideOnScroll
      className={`text-light fixed w-full transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} bg-transparent md:bg-navbar/80 backdrop-blur-0 md:backdrop-blur-sm border-0 md:border-b md:border-b-light/25`}
      style={{ zIndex: 1000 }}
    >

      <ul className="w-full flex flex-row justify-center items-center py-4 px-78 space-x-24 text-light font-medium">
        <li>
          <button
            onClick={() => handleScroll("dashboard")}
            className="font-bold hover:text-accent"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("about")}
            className="font-bold hover:text-accent"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("projects")}
            className="font-bold hover:text-accent"
          >
            Projects
          </button>
        </li>
      </ul>
    </Navbar>
  );
};

export default MediumNavbar;
