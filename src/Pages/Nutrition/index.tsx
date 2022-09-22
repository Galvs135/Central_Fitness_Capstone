import { InforNutrition } from "../../Components/InforNutri";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useAuth } from "../../Providers/AuthContext";
import { useRecipe } from "../../Providers/Recipe";
import { ListReceits } from "../../Components/ListReceits";
import { FilterRecepit } from "../../Components/FilterRecepit";

import timerLogo from "../../Imgs/logoTimer.png";

export const Nutrition = () => {
  const { accessToken } = useAuth();
  const { loadRecipe } = useRecipe();

  useEffect(() => {
    if (accessToken) {
      loadRecipe(accessToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box w={["100%", "100%", "100%"]} h="auto">
      <InforNutrition />
      <Container maxW="container.xl" w="100%" py={[12, 12, 12, 24]} h="100vh">
        <Flex
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          flexDir={["column", "column", "column", "row"]}
          gap={4}
        >
          <Heading
            color="primary"
            fontSize={["24px", "34px", "42px"]}
            w={["100%", "100%", "100%", "65%"]}
          >
            Receitas para o emagrecimento
          </Heading>
          <Flex
            w={["100%", "100%", "100%", "35%"]}
            justifyContent="flex-end"
            alignSelf="center"
            gap={4}
          >
            <Box>
              <Image src={timerLogo} w={["50px", "60px", "60px", "94px"]} />
            </Box>
            <Flex flexDirection="column" fontSize={["14px"]}>
              <Text mb="15px">
                Lembre-se de realizar sua refeição de 25 a 30 minutos no mínimo
                para ajudar na digestão antes de se exercitar
              </Text>
              <Text>
                Diminua o consumo de gordura, aumente o consumo de fibras e
                carboidratos para te dar a disposição no momento de treinar.
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Grid
          flexDirection="column"
          w="100%"
          gridTemplateColumns={["1fr", "150px 1fr"]}
          pb={24}
          pt={16}
        >
          <FilterRecepit />
          <ListReceits />
        </Grid>
      </Container>
    </Box>
  );
};
