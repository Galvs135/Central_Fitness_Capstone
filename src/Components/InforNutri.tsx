import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { theme } from "../Styles/theme";

import WaterFresh from "../Imgs/water_fresh.png";
import Diet from "../Imgs/diet.png";

import NutritionImage from "../Imgs/nutrition.png";

export const InforNutrition = () => {
  return (
    <Flex
      w="100%"
      alignItems="center"
      mb="92px"
      justifyContent={["center", "center", "center", "space-between"]}
    >
      <Box w={["100%", "100%", "100%", "65%"]} pl={["18px", "32px", "112px"]}>
        <Heading
          color={theme.colors.secondary}
          fontSize={["16px", "24px", "28px", "35px"]}
          w={["100%", "100%", "65%", "75%", "75%"]}
        >
          DESEJA COMEÇAR UMA DIETA SAUDÁVEL ?
        </Heading>
        <Text
          fontSize={["14px", "16px", "18px", "22px", "22px"]}
          w={["322px", "322px", "522px", "522px"]}
          mt="20px"
        >
          Encontre a receita ideal para você preparar do seu próprio lar.
        </Text>
        <VStack ml="6" mt="24px" spacing="4" w="80%">
          <Flex alignItems="center" w="100%">
            <Center w="55px">
              <Image src={WaterFresh} w="100%" />
            </Center>
            <Text
              ml="4"
              fontSize={["12px", "16px", "16px", "16px", "20px"]}
              w={["322px", "332px", "392px", "492px"]}
            >
              É sempre importante se hidratar antes, durante e depois dos
              exércicios.
            </Text>
          </Flex>
          <Flex alignItems="center" w="100%">
            <Center w="45px">
              <Image src={Diet} w="100%" />
            </Center>
            <Text
              ml="5"
              fontSize={["12px", "16px", "16px", "16px", "20px"]}
              w={["322px", "332px", "392px", "492px"]}
            >
              Explore as receitas montadas por <br /> especialistas.
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Image
        src={NutritionImage}
        display={["none", "none", "none", "block"]}
        w="42%"
      />
    </Flex>
  );
};
