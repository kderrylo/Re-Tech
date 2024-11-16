import { NavbarMenuItem, Link } from "@nextui-org/react";
import { NavItemProps } from "@/app/interface/navigation";

export const NavMenuLinks: React.FC<NavItemProps> = ({ name, path }) => {
  return (
    <>
      <NavbarMenuItem>
        <Link
          className="w-full text-xl py-2 hover:text-accent transition-colors 0.01s"
          href={path}
          size="lg"
          color="foreground"
        >
          {name}
        </Link>
      </NavbarMenuItem>
    </>
  );
};
