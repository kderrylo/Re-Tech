"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  Link,
} from "@nextui-org/react";
import { NavLinks } from "@/app/ui/navigation/nav-links";
import { NavMenuLinks } from "@/app/ui/navigation/nav-menu-links";
import Image from "next/image";
import { useState } from "react";
import { NavItemProps } from "@/app/interface/navigation";

const navItems: NavItemProps[] = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "SHOP",
    path: "/shop",
  },
  {
    name: "CONTACT",
    path: "/contact",
  },
];

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar
        id="navbar"
        className="fixed lg:bg-transparent bg-dark border-b py-2 lg:py-4 transition-all shadow-md text-accent z-50"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="flex justify-between max-w-3xl mx-auto">
          <NavbarContent>
            <NavbarBrand as={Link} href="/">
              <div className="flex flex-shrink-0 flex-row items-center gap-2 ">
                <div className="__navbar-logo-image__ relative w-10 h-10 lg:w-16 lg:h-16 transition-all">
                  <Image src="/logo.png" alt="Logo" fill sizes="4rem" priority />
                </div>
                <div>
                  <p
                    id="logo-text2"
                    className="text-4xl ml-4 font-semibold text-light lg:text-neutral-white __navbar-text__ transition-colors"
                  >
                    ReTech
                  </p>
                </div>
              </div>
            </NavbarBrand>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden text-white"
            />
          </NavbarContent>
          <NavbarContent className="hidden md:flex gap-10" justify="center">
            {navItems.map((item, index) => (
              <NavLinks
                key={`${item.name}-${index}`}
                name={item.name}
                path={item.path}
              />
            ))}
          </NavbarContent>
          <NavbarMenu className="mt-4 bg-white">
            {navItems.map((item, index) => (
              <NavMenuLinks
                key={`${item.name}-${index}`}
                name={item.name}
                path={item.path}
              />
            ))}
          </NavbarMenu>
        </NavbarContent>
      </Navbar>
    </>
  );
}
