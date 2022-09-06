import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./AuthContext";

interface ChildrenProp {
  children: ReactNode;
}

export const AppProvider = ({ children }: ChildrenProp) => {
  return (
    <ChakraProvider>
      <AuthProvider>{children}</AuthProvider>
    </ChakraProvider>
  );
};
