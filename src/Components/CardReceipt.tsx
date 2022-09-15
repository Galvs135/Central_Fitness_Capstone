import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import testImage from "../Imgs/Rectangle 62.png";
import logoTalher from "../Imgs/talher.png";
import { ModalRevenue } from "./ModalRevenue";

interface CardProps {
  data: {
    id: number;
    category: string;
    title: string;
    imageURL: string;
    ingredients: string[];
    preparation: string[];
  };
}

export const CardReceipt = (props: CardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [open, setOpen] = useState(false);

  const openModal = () => {
    return setOpen(!open);
  };

  return (
    <>
      <Flex
        cursor="pointer"
        flexDir="column"
        bgGradient="linear-gradient(28.43deg, #313030 23.03%, rgba(61, 61, 61, 0.915101) 60.48%, rgba(88, 86, 86, 0.733723) 74.61%, rgba(151, 148, 148, 0.3) 98.57%);"
        w="231px "
        h="400px "
        p="0px 25px 0px 25px"
        justifyContent="space-around"
        borderRadius="5px"
        onClick={openModal}
      >
        <Box>
          <Image
            borderRadius="5px"
            w="268px"
            h="187px"
            src={props.data.imageURL}
          />
        </Box>
        <Flex justifyContent="space-between">
          <Box>
            <Text>{props.data.category}</Text>
            <Text>{props.data.title}</Text>
          </Box>
          <Box>
            <Image src={logoTalher} />
          </Box>
        </Flex>
      </Flex>
      <ModalRevenue isOpen={open} onClose={openModal} revenue={props.data} />
    </>
  );
};
