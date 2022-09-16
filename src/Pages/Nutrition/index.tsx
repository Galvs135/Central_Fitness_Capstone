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
  const { loadRecipe, listRecipe } = useRecipe();

  useEffect(() => {
    if (accessToken) {
      loadRecipe(accessToken);
    }
  }, []);

  console.log("teste");
  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="center
      "
        alignItems="center"
      >
        <Box display="flex" flexDirection="column">
          <Text fontSize="xl">Receitas para:</Text>
          <ButtonGroup
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            colorScheme="none"
          >
            <Button
              _hover={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              _focus={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              margin="5px"
              padding="8px"
            >
              Todas as refeições
            </Button>
            <Button
              _hover={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              _focus={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              margin="5px"
              padding="8px"
            >
              Café da manhã
            </Button>
            <Button
              _hover={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              _focus={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              margin="5px"
              padding="8px"
            >
              Almoço
            </Button>
            <Button
              _hover={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              _focus={{ borderBottom: `solid 3px ${theme.colors.primary}` }}
              margin="5px"
              padding="8px"
            >
              Lanche
            </Button>
          </ButtonGroup>
        </Box>
        <Box w="400px" ml="30px" pl="50px">
          <Heading color={theme.colors.primary}>
            Receitas para o emagrecimento
          </Heading>
        </Box>
        <Flex>
          <Box>
            <Image src={timerLogo} />
          </Box>
          <Flex ml="20px" w="250px" flexDirection="column">
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
      <Flex alignItems="center" justifyContent="center" marginTop="100px">
        {listRecipe.length > 0 ? (
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            <CardReceipt key={listRecipe[0].id} data={listRecipe[0]} />
            <CardReceipt key={listRecipe[0].id} data={listRecipe[0]} />
            <CardReceipt key={listRecipe[0].id} data={listRecipe[0]} />

            <CardReceipt key={listRecipe[1].id} data={listRecipe[1]} />

            <CardReceipt key={listRecipe[2].id} data={listRecipe[2]} />
          </Grid>
        ) : (
          <h1>Lista vazia</h1>
        )}
      </Flex>
    </Flex>
  );
};
