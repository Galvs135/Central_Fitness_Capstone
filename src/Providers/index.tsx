import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./AuthContext";
import { theme } from "../Styles/theme";
import { LoginProvider } from "./Login";

interface ChildrenProp {
  children: ReactNode;
}

export const AppProvider = ({ children }: ChildrenProp) => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        {/* <LoginProvider> */}
        {children}
        {/* </LoginProvider> */}
      </AuthProvider>
    </ChakraProvider>
  );
};
