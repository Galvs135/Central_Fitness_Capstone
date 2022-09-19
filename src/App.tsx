import { Menu } from "./Components/Menu";
import { useAuth } from "./Providers/AuthContext";
import { RoutesApplication } from "./Routes";

function App() {
  const { accessToken } = useAuth();
  return (
    <>
      {accessToken ? <Menu /> : null}
      <RoutesApplication />
    </>
  );
}

export default App;
