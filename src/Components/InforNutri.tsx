import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { theme } from "../Styles/theme";

import WaterFresh from "../Imgs/water_fresh.png";
import Diet from "../Imgs/diet.png";

import nutrition_img from "../Imgs/nutrition-hero.png";
import bg_nutrition_img from "../Imgs/bg-nutrition.svg";

export const InforNutrition = () => {
  return (
    <Flex
      w="100%"
      h={["auto", "auto", "auto", "80vh"]}
      gap={[8]}
      bgImage={["none", "none", "none", bg_nutrition_img]}
      bgColor="#1b1b1b"
      bgPosition="center right"
      bgSize="45%"
      bgRepeat="no-repeat"
      pt={[16, 16, 16, 1]}
      pb={[24, 24, 24, 1]}
    >
      <Container maxW="container.xl" w="100%" h="100%">
        <Flex
          alignItems="center"
          justifyContent={[
            "flex-start",
            "flex-start",
            "flex-start",
            "space-between",
          ]}
          h="100%"
          flexDir={["column", "column", "column", "row"]}
        >
          <Flex
            w={["100%", "100%", "100%", "55%"]}
            flexDir="column"
            gap={[0, 0, 0, 12]}
          >
            <Box w="100%">
              <Heading
                color={theme.colors.secondary}
                fontSize={["2rem", "2rem", "2rem", "2.5rem"]}
                w={["100%", "100%", "100%", "100%"]}
                letterSpacing="1px"
              >
                DESEJA COMEÇAR UMA DIETA SAUDÁVEL ?
              </Heading>
              <Text
                fontSize={[".875rem", ".875rem", "1rem", "1.5rem"]}
                w={["100%"]}
                mt=".5rem"
              >
                Encontre a receita ideal para você preparar do seu próprio lar.
              </Text>
            </Box>
            <VStack
              mt="1.5rem"
              spacing={[6]}
              w={["100%", "100%", "100%", "80%"]}
            >
              <Grid
                gridTemplateColumns={["70px 1fr"]}
                alignItems="center"
                w="100%"
                gap={4}
                justifyContent="center"
              >
                <Center w={["60px", "60px", "60px", "70px"]}>
                  <Image src={WaterFresh} maxW="100%" objectFit="cover" />
                </Center>
                <Text
                  fontSize={[".875rem", ".875rem", ".875rem", "1.2rem"]}
                  opacity=".8"
                >
                  É sempre importante se hidratar antes, durante e depois dos
                  exercícios.
                </Text>
              </Grid>
              <Grid
                alignItems="center"
                gridTemplateColumns={["70px 1fr"]}
                w="100%"
                gap={4}
                justifyContent="center"
              >
                <Center w={["60px", "60px", "60px", "70px"]}>
                  <Image src={Diet} maxW="100%" objectFit="cover" />
                </Center>
                <Text
                  fontSize={[".875rem", ".875rem", ".875rem", "1.2rem"]}
                  opacity=".8"
                >
                  Explore as receitas montadas por <br /> especialistas.
                </Text>
              </Grid>
            </VStack>
          </Flex>
          <Box w="45%">
            <Image
              src={nutrition_img}
              display={["none", "none", "none", "block"]}
            />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};
