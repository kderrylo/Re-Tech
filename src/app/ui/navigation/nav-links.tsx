import { NavbarItem, Link } from "@nextui-org/react";
import { NavItemProps } from "@/app/interface/navigation";

export const NavLinks: React.FC<NavItemProps> = ({ name, path }) => {
  return (
    <>
      <NavbarItem>
        <Link
          className="font-medium text-light text-lg hover:text-accent transition-colors 0.01s"
          color="foreground"
          href={path}
        >
          {name}
        </Link>
      </NavbarItem>
    </>
  );
};
