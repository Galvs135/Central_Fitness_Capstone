import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./AuthContext";
import { theme } from "../Styles/theme";
import { RecipeProvider } from "./Recipe";
import { UserProvider } from "./User";

interface ChildrenProp {
  children: ReactNode;
}

export const AppProvider = ({ children }: ChildrenProp) => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <UserProvider>
          <RecipeProvider>{children}</RecipeProvider>
        </UserProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};
