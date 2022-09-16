import {
  Box,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  revenue?: {
    id: number;
    category: string;
    title: string;
    imageURL: string;
    ingredients: string[];
    preparation: string[];
  };
}

export const ModalRevenue = ({ isOpen, onClose, revenue }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bg="black"
        alignSelf="center"
        rounded={8}
        overflow="hidden"
        maxW={["350px", "450px", "670px"]}
        mb={8}
      >
        <ModalCloseButton bg="black" />
        <ModalHeader p={0} m={0} bgImg={revenue?.imageURL} bgPos="center">
          <Box
            h={["100px", "120px", "170px", "212px"]}
            bgGradient="linear(to-b, #0c0c0c7f 40%, rgba(0, 0, 0, 0.897) 80%)"
            display="flex"
            alignItems="flex-end"
            py={2}
            px={4}
          >
            <Heading as="h5" variant="h5" size={["md", "md", "lg"]}>
              {revenue?.title}
            </Heading>
          </Box>
        </ModalHeader>

        <ModalBody pb={4} h="100%">
          <Flex h="100%" gap={4} flexDir={["column", "column", "row", "row"]}>
            <Box w={["100%", "100%", "45%"]}>
              <Heading
                as="h6"
                variant="h6"
                size={["xs", "xs", "md"]}
                color="secondary"
                fontFamily="title"
              >
                INGREDIENTES:
              </Heading>
              <UnorderedList
                display="flex"
                flexDir="column"
                gap={1}
                pl={4}
                mt={2}
              >
                {revenue?.ingredients.map((item) => (
                  <Text as="li" key={item} fontSize=".765rem" fontFamily="text">
                    {item}
                  </Text>
                ))}
              </UnorderedList>
            </Box>
            <Box
              h={["3px", "3px", "auto"]}
              w={["100%", "100%", "3px"]}
              bg="secondary"
              display="block"
              shadow="base"
              rounded={4}
            ></Box>
            <Box w={["100%", "100%", "45%"]}>
              <Heading
                as="h6"
                variant="h6"
                size={["xs", "xs", "md"]}
                color="secondary"
                fontFamily="title"
              >
                MODO DE PREPARO:
              </Heading>
              <OrderedList
                display="flex"
                flexDir="column"
                gap={1}
                pl={4}
                mt={2}
              >
                {revenue?.preparation.map((item) => (
                  <Text as="li" key={item} fontSize=".765rem" fontFamily="text">
                    {item}
                  </Text>
                ))}
              </OrderedList>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

// const { isOpen, onOpen, onClose } = useDisclosure();

// const openOnModal = (id: number) => {
//   setRevenue(listRevenue.find((revenueItem) => revenueItem.id === id));
//   onOpen();
// };
