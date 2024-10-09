import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
  } from "@chakra-ui/react";
  import { Button } from "@nextui-org/react";
  import { MdDensityMedium, MdClose } from "react-icons/md"; 
  import { scroller } from "react-scroll";
  
  const handleScroll = (target: string) => {
    scroller.scrollTo(target, {
      duration: 1100,
      delay: 100,
      smooth: "easeInOut",
      offset: -110,
    });
  };
  
  const MobileDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <nav className="bottom-10 right-5 fixed z-[999] md:hidden">
          <Button
            onClick={isOpen ? onClose : onOpen} 
            isIconOnly
            size="lg"
            className="bg-black/15 backdrop-blur-sm"
          >
            {isOpen ? (
              <MdClose size={25} className="text-light" /> 
            ) : (
              <MdDensityMedium size={25} className="text-light" /> 
            )}
          </Button>
  
          <Drawer size="xs" isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerBody className="bg-black text-light flex justify-center">
                <nav className="flex flex-col space-y-4 w-full items-center">
                  <div className="flex items-center justify-center w-full">
                    <Button
                      onClick={() => {
                        handleScroll("dashboard");
                        onClose();
                      }}
                      className="hover:bg-accent hover:text-darkAccent py-2 px-4 rounded-md transition duration-300"
                    >
                      Dashboard
                    </Button>
                  </div>
  
                  <div className="flex items-center justify-center w-full">
                    <Button
                      onClick={() => {
                        handleScroll("about");
                        onClose();
                      }}
                      className="hover:bg-accent hover:text-darkAccent py-2 px-4 rounded-md transition duration-300"
                    >
                      About
                    </Button>
                  </div>
  
                  <div className="flex items-center justify-center w-full">
                    <Button
                      onClick={() => {
                        handleScroll("projects");
                        onClose();
                      }}
                      className="hover:bg-accent hover:text-darkAccent py-2 px-4 rounded-md transition duration-300"
                    >
                      Projects
                    </Button>
                  </div>
                </nav>
              </DrawerBody>
  
              <DrawerFooter className="bg-black">
                <Button onClick={onClose} className="mr-3">
                  Close
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </nav>
      </>
    );
  };
  
  export default MobileDrawer;
  