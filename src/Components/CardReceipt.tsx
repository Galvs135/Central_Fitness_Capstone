import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

import logoTalher from "../Imgs/talher.png";
import { ModalRevenue } from "./ModalRecipe";

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
        h="350px "
        p="25px 25px 25px 25px"
        justifyContent="flex-start"
        borderRadius="5px"
        onClick={openModal}
        gap="4"
      >
        <Box>
          <Image
            borderRadius="5px"
            w="268px"
            h="187px"
            objectFit="cover"
            src={props.data.imageURL}
          />
        </Box>
        <Flex justifyContent="space-between" flexDirection="column">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize={["12px"]} fontFamily="text">
              {props.data.category}
            </Text>
            <Image src={logoTalher} />
          </Box>
          <Box>
            <Text fontSize={["16px"]} color="primary" fontFamily="title">
              {props.data.title}
            </Text>
          </Box>
        </Flex>
      </Flex>
      <ModalRevenue isOpen={open} onClose={openModal} revenue={props.data} />
    </>
  );
};
