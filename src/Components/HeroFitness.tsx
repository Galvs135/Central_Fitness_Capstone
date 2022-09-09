import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { GraficRepresentation } from "./GraficRepresentation";

import ImageHeroFitness from "../../Imgs/heroFitness.png";
import { theme } from "../Styles/theme";

export const HeroFitness = () => {
  return (
    <Flex flexDir={["column", "column", "column", "row"]} position="relative">
      <Box
        bg={theme.colors.primary}
        w={["100%", "100%", "100%", "0%"]}
        h={["70%", "70%", "70%", "0%"]}
        position="absolute"
        flex="1"
      ></Box>
      <Flex flexDir="column" margin="auto" mb="42px" zIndex="1">
        <Heading
          as="h1"
          fontSize={["22px", "22px", "32px", "32px"]}
          fontWeight="extrabold"
          color="white"
          w={["326px", "326px", "524px", "524px"]}
        >
          Saiba qual é o seu índice de massa muscular (IMC)
        </Heading>
        <Text
          fontSize={["12px", "16px", "18px", "18px"]}
          fontWeight="semibold"
          color="white"
          w={["285px", "325px", "425px"]}
          mt="2.5"
        >
          O IMC é um índice que mede se você está abaixo, dentro ou acima do
          peso, de acordo com a relação entre seu peso e altura.
        </Text>

        <GraficRepresentation />

        <Button
          mt="5"
          bg="#F6CB33"
          w={["152px", "152px", "252px"]}
          h={["45px", "45px", "60px"]}
          color="#fff"
          fontSize="18px"
          fontWeight="semibold"
          borderRadius="5px 5px 120px 5px"
          boxShadow="4px 4px 4px 0px #333"
          _hover={{ bg: "yellow.400" }}
        >
          Calcular IMC
        </Button>
      </Flex>

      <Center
        w="50%"
        position="relative"
        margin={["auto", "auto", "auto", "0"]}
      >
        <Image
          src={ImageHeroFitness}
          w={["299px", "299px", "452px"]}
          zIndex="2"
        />

        <Box
          bg={theme.colors.primary}
          w={["0", "0", "0%", "100%"]}
          h={["0", "0", "0", "100%"]}
          position="absolute"
          zIndex="0"
          overflow="hidden"
          bottom="0"
          _after={{
            content: "''",
            position: "absolute",
            top: "90px",
            left: "-550",
            bg: theme.colors.black,
            w: "200%",
            h: "50%",
            transform: "rotate(-40deg)",
          }}
        ></Box>
      </Center>
    </Flex>
  );
};
