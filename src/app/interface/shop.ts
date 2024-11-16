export interface ProductsProps {
	id: number;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
}

export interface ProductItemProps {
	item: ProductsProps;
}