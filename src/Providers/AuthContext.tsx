import { useToast } from "@chakra-ui/react";
import { createContext, useContext, ReactNode, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../Services";
import { useLogin } from "./Login";

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

interface Atualization {
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
  const history = useHistory();
  const [token, setToken] = useState(
    localStorage.getItem("Fitnes:accessToken") || ""
  );
  const { user } = useLogin();
  const singUp = (data: SingUpCredentials) => {
    api
      .post("/register", data)
      .then((_) => {
        toast({
          position: "top",
          title: "Conta criada.",
          description: "sua conta foi criada com sucesso, faça o login.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        history.push("/login");
      })
      .catch((_) => {
        toast({
          position: "top",
          title: "Error ao criar conta, tente novamente.",
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
