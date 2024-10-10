'use client';
import {
    Accordion,
    AccordionItem,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/react";
import Link from 'next/link';
import Image from "next/image";
import { useState, useEffect } from "react";

const deleteClass = (className: string, attr: string) => {
    return className.replace(attr, "")
}

const handleScrollChange = (position: number) => {
    const _navbar: HTMLElement | null = document.getElementById("navbar");
    const imageWrapper: HTMLElement | null = document.querySelector(".__navbar-logo-image__");
    const navbarText: NodeListOf<Element> = document.querySelectorAll(".__navbar-text__");

    if (position > 100) {
        navbarText.forEach((item) => {
            if (item.className.includes(" !text-dark")) {
                return;
            }
            item.className = deleteClass(item.className, " text-blue-primary lg:text-neutral-white");
            item.className += " !text-light";
        });

        if (_navbar?.className.includes(" lg:!bg-dark")) {
            return;
        }

        if (imageWrapper) {
            imageWrapper.className = deleteClass(imageWrapper.className, " lg:w-16 lg:h-16");
        }

        if (_navbar) {
            _navbar.className = deleteClass(_navbar.className, " lg:!bg-transparent");
            _navbar.className += " lg:!bg-dark lg:!py-0";
        }

        if (imageWrapper) {
            imageWrapper.className += " lg:w-10 lg:h-10";
        }

        return;
    } else {
        navbarText.forEach((item) => {
            if (item.className.includes(" !text-blue-primary")) {
                item.className = deleteClass(item.className, " !text-blue-primary");
                item.className += " text-blue-primary lg:text-neutral-white";
            }
        });

        if (_navbar?.className.includes(" lg:!bg-dark")) {
            if (_navbar) {
                _navbar.className = deleteClass(_navbar.className, " lg:!bg-dark lg:!py-0");
                _navbar.className += " lg:!bg-transparent";
            }

            if (imageWrapper) {
                imageWrapper.className = deleteClass(imageWrapper.className, " lg:w-10 lg:h-10");
                imageWrapper.className += " lg:w-16 lg:h-16";
            }
        }
    }
}

const MyNavbar = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => {
        setMenuOpen(prevState => {
            console.log("Menu open state:", !prevState);
            return !prevState;
        });
    };
    return (
        <Navbar
            id="navbar"
            classNames={{
                base: ["fixed", "lg:bg-transparent", "bg-dark", "border-b", "py-2", "lg:py-4", "transition-all", "shadow-md", "text-accent", "z-50"]
            }}
            disableScrollHandler={false}
            onScrollPositionChange={(yPos) => handleScrollChange(yPos)}
            isBlurred={false}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={() => setMenuOpen(!isMenuOpen)}
        >
            <div className="w-full flex justify-between items-center py-2">

                <NavbarBrand as={Link} href="/">
                    <div className="flex flex-shrink-0 flex-row items-center gap-2 ">
                        <div className="__navbar-logo-image__ relative w-10 h-10 lg:w-16 lg:h-16 transition-all">
                            <Image src="/logo.png" alt="Logo" fill sizes="4rem" priority />
                        </div>
                        <div>
                            <p id="logo-text2" className='text-4xl ml-4 font-semibold text-light lg:text-neutral-white __navbar-text__ transition-colors'>ReTech</p>
                        </div>
                    </div>
                </NavbarBrand>

                {/* Hamburger Menu */}
                <div className="block lg:hidden cursor-pointer" onClick={toggleMenu}>
                    {isMenuOpen ? <span className="text-light text-2xl">✖</span> : <span className="text-light text-2xl">☰</span>}
                </div>

                <NavbarContent className='hidden lg:flex gap-4 md:gap-6 lg:gap-10' justify='end'>
                    <NavbarItem>
                        <Link
                            href="/"
                            className='__navbar-text__ text-sm md:text-base text-light font-medium transition-colors'>
                            HOME
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            href="/shop"
                            className='__navbar-text__ text-sm md:text-base text-light font-medium transition-colors'>
                            SHOP
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            href="/contact"
                            className='__navbar-text__ text-sm md:text-base text-light font-medium transition-colors'>
                            CONTACT US
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-dark z-50">
                    <NavbarMenu className="overflow-hidden lg:hidden">
                        <NavbarMenuItem className="w-full border-b border-slate-400 py-2">
                            <Link href="/" onClick={() => setMenuOpen(false)} className="text-blue-primary hover:text-blue-secondary font-medium transition-colors min-w-full">
                                HOME
                            </Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem className="w-full border-b border-slate-400 py-2">
                            <Link href="/shop" onClick={() => setMenuOpen(false)} className="text-blue-primary hover:text-blue-secondary font-medium transition-colors min-w-full">
                                SHOP
                            </Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem className="w-full border-b border-slate-400 py-2">
                            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-blue-primary hover:text-blue-secondary font-medium transition-colors min-w-full">
                                CONTACT US
                            </Link>
                        </NavbarMenuItem>
                    </NavbarMenu>
                </div>
            )}

        </Navbar>
    );
};


export default MyNavbar;
