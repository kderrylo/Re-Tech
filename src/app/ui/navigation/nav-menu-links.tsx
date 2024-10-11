import { NavbarMenuItem, Link } from "@nextui-org/react";

interface NavMenuLinksProps {
	name: string,
	path: string,
}

export const NavMenuLinks: React.FC<NavMenuLinksProps> = ({ name, path }) => {
	return (
		<NavbarMenuItem>
			<Link
				className="w-full text-xl py-2 hover:text-accent transition-colors 0.01s"
				href={ path }
				size="lg"
				color="foreground"
			>
				{ name }
			</Link>
		</NavbarMenuItem>
	);
}