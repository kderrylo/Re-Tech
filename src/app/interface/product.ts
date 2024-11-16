export interface ProductItemProps {
  id: number;
  name: string;
  description: string;
  subDescription: string;
  price: number;
  imageUrl: string;
}

export interface ProductDetailProps {
  product: ProductItemProps;
}
