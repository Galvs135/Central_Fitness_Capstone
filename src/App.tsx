import { Grid } from "@chakra-ui/react";
import { Menu } from "./Components/Menu";
import { useAuth } from "./Providers/AuthContext";
import { RoutesApplication } from "./Routes";

function App() {
  const { accessToken } = useAuth();
  return (
    <Grid
      h="100vh"
      gridTemplateRows={["minmax(100px,100px) 1fr"]}
      templateAreas={`"header" "main"`}
    >
      {accessToken ? <Menu /> : null}
      <RoutesApplication />
    </Grid>
  );
}

export default App;
