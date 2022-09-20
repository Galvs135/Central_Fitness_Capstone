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
import { useContext, useEffect, useState } from "react";
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

  console.log("teste");
  return (
    <Flex flexDirection="column" w="100vw">
      <Flex
        w={["100vh", "100%"]}
        //bg="red"
        justifyContent="space-around"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <Box
          w={["100%", "500px", "30%"]}
          //bg="blue"
          display="flex"
          flexDirection="column"
        >
          <Text fontSize="xl">Receitas para:</Text>
          <ButtonGroup
            display="flex"
            flexDirection={["row", "row", "column"]}
            alignItems="flex-start"
            colorScheme="none"
          >
            <Button
              _hover={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              _focus={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              margin="5px"
              padding="8px"
              onClick={() => filterRecipe("")}
            >
              Todas as refeições
            </Button>
            <Button
              _hover={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              _focus={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              margin="5px"
              padding="8px"
              onClick={() => filterRecipe("Café da manhã")}
            >
              Café da manhã
            </Button>
            <Button
              _hover={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              _focus={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              margin="5px"
              padding="8px"
              onClick={() => filterRecipe("Almoço")}
            >
              Almoço
            </Button>
            <Button
              _hover={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              _focus={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              margin="5px"
              padding="8px"
              onClick={() => filterRecipe("Lanche")}
            >
              Lanche
            </Button>
          </ButtonGroup>
        </Box>
        <Flex
          direction={["row", "row", "column", "row"]}
          justifyContent={["space-around"]}
        >
          <Box w="400px" ml="0px" pl="0px">
            <Heading color={theme.colors.primary}>
              Receitas para o emagrecimento
            </Heading>
          </Box>
          <Flex>
            <Box>
              <Image src={timerLogo} />
            </Box>
            <Flex ml="20px" w="250px" flexDirection="column" marginRight="30px">
              <Text mb="15px" fontSize="15">
                Lembre-se de realizar sua refeição de 25 a 30 minutos no minimo
                para ajudar na digestão antes de se exercitar
              </Text>
              <Text fontSize="15">
                Diminua o consumo de gordura, aumente o consumo de fibras e
                carboidratos para te dar a disposição no momento de treinar.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        marginTop="100px"
        //margin="auto"
        //bg="blue"
        w="100vh"
      >
        {listRecipeFiltered.length > 0 ? (
          <Grid
            justifyContent="center"
            templateColumns="repeat(2, 1fr) repeat(4, 1fr)"
            gap={6}
          >
            {listRecipeFiltered.map((recipe) => {
              return <CardReceipt key={recipe.id} data={recipe} />;
            })}
          </Grid>
        ) : (
          <Grid
            w="100%"
            templateColumns={[
              " repeat(2, 1fr)",
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
  );
};
