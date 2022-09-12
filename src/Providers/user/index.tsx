import { useToast } from "@chakra-ui/react";
import { createContext, useContext, ReactNode, useState } from "react";
import { api } from "../../Services/api";
import { useLogin } from "../Login";

interface ContextProps {
  AInformation: (data: Atualization) => void;
}

interface ChildrenProp {
  children: ReactNode;
}

interface Atualization {
  name: string;
  genre: string;
}

const UserContext = createContext<ContextProps>({} as ContextProps);

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an userProvider");
  }
  return context;
};

const AuthProvider = ({ children }: ChildrenProp) => {
  const toast = useToast();
  const [token, setToken] = useState(
    localStorage.getItem("Fitnes:accessToken") || ""
  );
  const { user } = useLogin();

  const AInformation = (data: Atualization) => {
    api
      .patch(`/users/${user.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast({
          position: "top",
          title: "Informações atualizadas.",
          description: "suas informações foram atualizadas",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((_) => {
        toast({
          position: "top",
          title: "Erro ao tentar atualizar",
          description: "tente novamente.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <UserContext.Provider value={{ AInformation }}>
      {children}
    </UserContext.Provider>
  );
};

export { AuthProvider, useUser };
