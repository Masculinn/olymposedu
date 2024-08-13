import {
  Modal as ModalEntry,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";

export const Modal = ({
  modalTitle,
  isStarter,
  children,
  btnRedirect,
  btnHref,
  btnTitle,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (isStarter) {
      const timer = setTimeout(() => onOpen(), 4000);
      return () => clearTimeout(timer);
    }
  }, [isStarter, onOpen]);

  return (
    <ModalEntry
      isOpen={isOpen}
      placement="auto"
      backdrop="blur"
      classNames={{
        base: "bg-slate-950",
      }}
      size="2xl"
      className="dark text-slate-200"
      onOpenChange={onOpenChange}
      scrollBehavior="inside"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>{modalTitle}</ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              {btnRedirect && (
                <Button
                  color="primary"
                  variant="solid"
                  href={btnHref}
                  endContent={<FaArrowRight className="w-4 h-4" />}
                  className="dark"
                >
                  {btnHref ? (
                    <a
                      target="_blank"
                      rel="norefferrer noopener"
                      href={btnHref}
                      className="w-full h-full items-center justify-center text-center flex flex-row gap-2"
                    >
                      {btnTitle}
                    </a>
                  ) : (
                    btnTitle
                  )}
                </Button>
              )}
              <Button
                color="success"
                variant="solid"
                onPress={onClose}
                className="dark"
              >
                Anladım
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ModalEntry>
  );
};
