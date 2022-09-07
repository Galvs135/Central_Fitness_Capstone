import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../Styles/theme";

interface AppProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: AppProviderProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
