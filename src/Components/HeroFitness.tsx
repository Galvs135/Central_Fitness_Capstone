import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { GraficRepresentation } from "./GraficRepresentation";

import { theme } from "../Styles/theme";

import { ImcCalculator } from "./ImcCalculator";

import IntroductionFitness from "../Imgs/introduction-fitness.png";
import HeroFitnessImage from "../Imgs/heroFitness.png";

export const HeroFitness = () => {
  return (
    <Flex
      as="section"
      flexDir={["column", "column", "column", "row"]}
      justifyContent="flex-start"
    >
      <Box
        bg={theme.colors.primary}
        w={["100%", "100%", "100%", "0%"]}
        h={["70%", "70%", "70%", "0%"]}
        position="absolute"
        top="0"
        flex="1"
      ></Box>
      <Flex
        flexDir="column"
        zIndex="1"
        alignItems="center"
        justifyContent="center"
        w="100%"
      >
        <Box>
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
            mb="5"
          >
            O IMC é um índice que mede se você está abaixo, dentro ou acima do
            peso, de acordo com a relação entre seu peso e altura.
          </Text>

          <GraficRepresentation />
          <ImcCalculator />
        </Box>
      </Flex>

      <Image
        src={HeroFitnessImage}
        w={["322px", "372px"]}
        m="24px auto"
        display={["block", "block", "block", "none"]}
        zIndex="1"
      />

      <Image
        src={IntroductionFitness}
        w="50%"
        h="100vh"
        display={["none", "none", "none", "block"]}
      />
    </Flex>
  );
};
