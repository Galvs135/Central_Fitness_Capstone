import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./AuthContext";
import { theme } from "../Styles/theme";
import { LoginProvider } from "./Login";

import { RecipeProvider } from "./Recipe";

interface ChildrenProp {
  children: ReactNode;
}

export const AppProvider = ({ children }: ChildrenProp) => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RecipeProvider>{children}</RecipeProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};
