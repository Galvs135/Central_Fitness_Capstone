import { useToast } from "@chakra-ui/react";
import { createContext, useContext, ReactNode } from "react";
import { api } from "../../Services/api";
import { useAuth } from "../AuthContext";

interface ContextProps {
  AInformation: (data: Actualization) => void;
}

interface ChildrenProp {
  children: ReactNode;
}

interface Actualization {
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
  const { user, accessToken } = useAuth();

  const AInformation = (data: Actualization) => {
    api
      .patch(`/users/${user.id}`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
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
          description: "tente novamente. ",
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
