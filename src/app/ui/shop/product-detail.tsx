import { Image } from "@nextui-org/react";
import { ProductDetailProps } from "@/app/interface/product";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";


export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const paymentMethods = [
    { name: "Visa", image: "/assestsShop/visa-img.png" },
    { name: "Go-Pay", image: "/assestsShop/gopay-img.jpg" },
    { name: "PayPal", image: "/assestsShop/paypal-img.png" },
    { name: "BCA", image: "/assestsShop/bca-img.png" },
  ];

  return (
    <>
      <div className="grid gap-4 py-4 mt-24 lg:mt-28">
        <Link href="/shop">
          <Button className="text-lg text-white bg-dark hover:bg-dark/80">
            <ChevronLeft />
            Back
          </Button>
        </Link>
        <div className="md:grid md:grid-cols-2 gap-10 w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            className="w-full md:w-[30rem] h-96 aspect-square object-cover mb-4"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg text">{product.description}</p>
            <p className="text-2xl font-bold">
              Rp {product.price.toLocaleString()}
            </p>
            <Button className="text-lg text-white bg-dark hover:bg-dark/80" onPress={onOpen}>
              Buy Now
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">Pilih metode pembayaran</ModalHeader>
                    <ModalBody>
                      <div className="grid grid-cols-2 gap-4">
                        {paymentMethods.map((method, index) => (
                          <button
                            key={index}
                            className="flex flex-col items-center p-2 border rounded-lg hover:bg-gray-100"
                            onClick={() => {
                              alert(`Your ${method.name} payment is SUCCESS ! `);
                              onClose();
                            }}
                          >
                            <img
                              src={method.image}
                              alt={method.name}
                              className="w-16 h-16 object-contain"
                            />
                            <span className="mt-2 text-sm font-medium">{method.name}</span>
                          </button>
                        ))}
                      </div>
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          defaultValue="desc"
          className="w-full"
        >
          <AccordionItem value="desc">
            <AccordionTrigger className="font-bold text-xl">
              Description
            </AccordionTrigger>
            <AccordionContent>{product.subDescription}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};
