import {Button} from "@nextui-org/react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

interface Item {
	id: number;
   name: string;
   description: string;
   price: number;
   imageUrl: string;
}

interface ProductItemProps {
	items: Item[];
}

export const ProductItem: React.FC<ProductItemProps> = ({ items }) => {
	return (
		<>
			{items.map((item) => (
            <Card 
                  shadow="sm" 
                  key={item.id} 
                  className="bg-light"
            >
                  <CardBody className="overflow-visible p-0">
                     <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={item.name}
                        className="w-full object-cover h-72"
                        src={item.imageUrl}
                     />
                  </CardBody>
                  <CardFooter className="flex-col items-start text-left p-4 gap-4">
                     <div>
                        <b>{item.name}</b>
                        <p className="text-gray-600">{item.description}</p>
                     </div>
                     <p className="font-bold text-lg">Rp {item.price.toLocaleString()}</p>
                     <Button 
                        size="md" 
                        className="w-full rounded-md bg-dark text-white hover:bg-accent"
                     >
                        Beli Sekarang
                     </Button>
                  </CardFooter>
            </Card>
			))}
		</>
	);
}