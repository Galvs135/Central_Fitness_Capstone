import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./AuthContext";
import { theme } from "../Styles/theme";
import { LoginProvider } from "./Login";
import { MuscleProvider } from "./Muscle";

interface ChildrenProp {
  children: ReactNode;
}

export const AppProvider = ({ children }: ChildrenProp) => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        {/* <LoginProvider> */}
        <MuscleProvider>{children}</MuscleProvider>
        {/* </LoginProvider> */}
      </AuthProvider>
    </ChakraProvider>
  );
};
