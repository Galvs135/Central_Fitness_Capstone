import { Flex, Grid } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRecipe } from "../Providers/Recipe";
import { container } from "../Styles/animate";
import { CardReceipt } from "./CardReceipt";

export const ListReceits = () => {
  const { listRecipe, listRecipeFiltered } = useRecipe();
  return (
    <Flex alignItems="center" justifyContent="center" w="100%" px={4}>
      {listRecipeFiltered.length > 0 ? (
        <Grid
          as={motion.div}
          layout
          variants={container}
          h={["auto"]}
          justifyItems="center"
          templateColumns={[
            "1fr",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
        >
          <AnimatePresence>
            {listRecipeFiltered.map((recipe) => {
              return <CardReceipt key={recipe.id} data={recipe} />;
            })}
          </AnimatePresence>
        </Grid>
      ) : (
        <Grid
          variants={container}
          h={["auto"]}
          w="100%"
          justifyContent="center"
          templateColumns={[
            "1fr",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
          as={motion.div}
          layout
          overflow="hidden"
        >
          <AnimatePresence>
            {listRecipe.map((recipe) => {
              return <CardReceipt key={recipe.id} data={recipe} />;
            })}
          </AnimatePresence>
        </Grid>
      )}
    </Flex>
  );
};
