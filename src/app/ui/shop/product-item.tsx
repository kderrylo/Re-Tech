import { Button } from "@/components/ui/button";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { ProductItemProps } from "@/app/interface/shop";
import Link from "next/link";

export const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  return (
    <>
      <Card shadow="sm" key={item.id} className="bg-light">
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
          <Link href={`/shop/${item.id}`} className="flex w-full">
            <Button className="text-lg bg-dark hover:bg-dark/80 w-full">
              Beli Sekarang
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};
