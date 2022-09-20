import { Grid } from "@chakra-ui/react";
import { Menu } from "./Components/Menu";
import { RoutesApplication } from "./Routes";

function App() {
  return (
    <Grid
      h="100vh"
      gridTemplateRows={["minmax(100px,100px) 1fr"]}
      templateAreas={`"header" "main"`}
    >
      <Menu />
      <RoutesApplication />
    </Grid>
  );
}

export default App;
