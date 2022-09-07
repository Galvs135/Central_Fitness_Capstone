import { useToast } from "@chakra-ui/react";
import { createContext, useContext, ReactNode } from "react";
import { Redirect } from "react-router-dom";
import { api } from "../Services";

interface ContextProps {
  singUp: (data: SingUpCredentials) => void;
}

interface ChildrenProp {
  children: ReactNode;
}

interface SingUpCredentials {
  email: string;
  password: string;
  name: string;
  genre: string;
}

const AuthContext = createContext<ContextProps>({} as ContextProps);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: ChildrenProp) => {
  const toast = useToast();
  const singUp = (data: SingUpCredentials) => {
    api
      .post("/register", data)
      .then((_) => {
        toast({
          title: "Conta criada.",
          description: "conta criada com sucesso, faça o login.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        <Redirect to="/login" />;
      })
      .catch((_) => {
        toast({
          title: "error ao criar conta, tente novamente.",
          description: "Tente um email diferente.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <AuthContext.Provider value={{ singUp }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
