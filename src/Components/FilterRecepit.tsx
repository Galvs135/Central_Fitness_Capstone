import { Box, Grid, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import { useRecipe } from "../Providers/Recipe";

export const FilterRecepit = () => {
  const { filterRecipe } = useRecipe();

  return (
    <Grid>
      <Box display="flex" flexDirection="column" gap={4}>
        <Text fontSize="1.5rem" w="100%" textAlign="start">
          Receitas para:
        </Text>
        <UnorderedList
          display="grid"
          gap={4}
          gridTemplateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "1fr"]}
          pb={4}
          textAlign="left"
        >
          <ListItem
            cursor="pointer"
            _hover={{ color: "third" }}
            onClick={() => filterRecipe("")}
          >
            Todas as refeições
          </ListItem>
          <ListItem
            cursor="pointer"
            _hover={{ color: "third" }}
            onClick={() => filterRecipe("Café da manhã")}
          >
            Café da manhã
          </ListItem>
          <ListItem
            cursor="pointer"
            _hover={{ color: "third" }}
            onClick={() => filterRecipe("Almoço")}
          >
            Almoço
          </ListItem>
          <ListItem
            cursor="pointer"
            _hover={{ color: "third" }}
            onClick={() => filterRecipe("Lanche")}
          >
            Lanche
          </ListItem>
        </UnorderedList>
      </Box>
    </Grid>
  );
};
