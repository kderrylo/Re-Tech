'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuToggle, Link } from "@nextui-org/react";
import { NavLinks } from "@/app/ui/navigation/nav-links";
import { NavMenuLinks } from "@/app/ui/navigation/nav-menu-links";
import Image from "next/image";
import { useState } from "react";

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

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const menuItems = [
        {
			name: 'Home',
			path: '/',
		},
		{
			name: 'Shop',
			path: '/shop'
		},
		{
			name: 'Contact',
			path: '/contact'
		},
    ];
    
    return (
        <Navbar
            id="navbar"
            classNames={{
                base: ["fixed", "lg:bg-transparent", "bg-dark", "border-b", "py-2", "lg:py-4", "transition-all", "shadow-md", "text-accent", "z-50"]
            }}
            disableScrollHandler={false}
            onScrollPositionChange={(yPos) => handleScrollChange(yPos)}
            isBlurred={false}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent>
                <NavbarBrand 
                    as={Link} 
                    href="/"
                >
                    <div className="flex flex-shrink-0 flex-row items-center gap-2 ">
                        <div className="__navbar-logo-image__ relative w-10 h-10 lg:w-16 lg:h-16 transition-all">
                            <Image src="/logo.png" alt="Logo" fill sizes="4rem" priority />
                        </div>
                        <div>
                            <p id="logo-text2" className='text-4xl ml-4 font-semibold text-light lg:text-neutral-white __navbar-text__ transition-colors'>ReTech</p>
                        </div>
                    </div>
                </NavbarBrand>
                <NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="md:hidden text-white"
				/>
            </NavbarContent>
            <NavbarContent className="hidden md:flex gap-10" justify="center">
				{menuItems.map((item, index) => (
					<NavLinks 
						key={ `${item.name}-${index}` }
						name={ item.name } 
						path={ item.path }
					/>
				))}
			</NavbarContent>
            <NavbarMenu className="mt-4">
				{menuItems.map((item, index) => (
					<NavMenuLinks 
						key={`${item.name}-${index}`} 
						name={ item.name }
						path={ item.path }
					/>
				))}
			</NavbarMenu>
        </Navbar>
    );
};
