import { InforNutrition } from "../../Components/InforNutri";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { CardReceipt } from "../../Components/CardReceipt";
import { useAuth } from "../../Providers/AuthContext";
import { useRecipe } from "../../Providers/Recipe";
import { theme } from "../../Styles/theme";
import timerLogo from "../../Imgs/logoTimer.png";

export const Nutrition = () => {
  const { accessToken } = useAuth();
  const { loadRecipe, listRecipe, filterRecipe, listRecipeFiltered } =
    useRecipe();

  useEffect(() => {
    if (accessToken) {
      loadRecipe(accessToken);
    }
  }, []);

  return (
    <Box w={["100vw", "100vw", "100%"]}>
      <InforNutrition />
      <Flex flexDirection="column" w="100%">
        <Flex
          justifyContent="space-between"
          flexDirection={["column", "column", "row", "row"]}
          alignItems={["center", "center", "flex-end"]}
          w={["100%", "100%", "100%", "90%", "90%"]}
          m="0 auto"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            pl="24px"
          >
            <Text fontSize="xl" w="100%" textAlign="start">
              Receitas para:
            </Text>
            <ButtonGroup
              display="flex"
              flexDirection={["row", "row", "column"]}
              alignItems="flex-start"
              colorScheme="none"
              flexWrap="wrap"
              w={["322px", "100%"]}
            >
              <Button
                _hover={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
                _focus={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
                fontSize={["12px", "12px", "16px", "16px"]}
                onClick={() => filterRecipe("")}
              >
                Todas as refeições
              </Button>
              <Button
                _hover={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
                _focus={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
                fontSize={["12px", "12px", "16px", "16px"]}
                onClick={() => filterRecipe("Café da manhã")}
              >
                Café da manhã
              </Button>
              <Button
                _hover={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
                _focus={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
                fontSize={["12px", "12px", "16px", "16px"]}
                onClick={() => filterRecipe("Almoço")}
              >
                Almoço
              </Button>
              <Button
                _hover={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
                _focus={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
                fontSize={["12px", "12px", "16px", "16px"]}
                onClick={() => filterRecipe("Lanche")}
              >
                Lanche
              </Button>
            </ButtonGroup>
          </Box>
          <Heading
            padding="18px"
            color={theme.colors.primary}
            fontSize={["18px", "20px", "24px", "34px", "42px"]}
            textAlign="center"
            maxW="400px"
            w="100%"
            mt={["5", "5", "0"]}
          >
            Receitas para o emagrecimento
          </Heading>
          <Flex w={["332px", "352px", "458px"]}>
            <Box>
              <Image src={timerLogo} w={["18px", "18px", "44px"]} />
            </Box>
            <Flex ml="20px" w="250px" flexDirection="column" marginRight="30px">
              <Text mb="15px" fontSize={["10px", "10px", "14px"]}>
                Lembre-se de realizar sua refeição de 25 a 30 minutos no minimo
                para ajudar na digestão antes de se exercitar
              </Text>
              <Text fontSize={["10px", "10px", "14px"]}>
                Diminua o consumo de gordura, aumente o consumo de fibras e
                carboidratos para te dar a disposição no momento de treinar.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          m="64px auto"
          w={["50%", "50%", "50%", "70%", "80%"]}
        >
          {listRecipeFiltered.length > 0 ? (
            <Grid
              justifyItems="center"
              templateColumns={[
                " repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={6}
            >
              {listRecipeFiltered.map((recipe) => {
                return <CardReceipt key={recipe.id} data={recipe} />;
              })}
            </Grid>
          ) : (
            <Grid
              w="100%"
              justifyContent="center"
              templateColumns={[
                " repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={6}
            >
              {listRecipe.map((recipe) => {
                return <CardReceipt key={recipe.id} data={recipe} />;
              })}
            </Grid>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
