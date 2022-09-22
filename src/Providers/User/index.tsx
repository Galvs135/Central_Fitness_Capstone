import { useToast } from "@chakra-ui/react";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { api } from "../../Services/api";
import { useAuth } from "../AuthContext";

interface ContextProps {
  AInformation: (data: Actualization) => void;
  MuscleAtt: (id: string, data: Muscledata) => void;
  CalculateImc: (data: Calculate) => void;
  weight: number;
  height: number;
  imc: number;
  Muscle: (id: string) => void;
}

interface ChildrenProp {
  children: ReactNode;
}

interface Actualization {
  name: string;
  genre: string;
}

interface Muscledata {
  weight: number;
  height: number;
}

interface Calculate {
  weight: number;
  height: number;
}

const UserContext = createContext<ContextProps>({} as ContextProps);

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an userProvider");
  }
  return context;
};

const UserProvider = ({ children }: ChildrenProp) => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const toast = useToast();
  const { user, accessToken, getUser } = useAuth();
  const [imc, setImc] = useState<number>(0);

  useEffect(() => {
    setImc(weight / (height * height));
  }, [weight, height]);

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
        getUser();
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

  const Muscle = (id: string) => {
    if (id) {
      api
        .get(`/users/${id}/muscles`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          setWeight(response.data[0].weight);
          setHeight(response.data[0].height);
        })
        .catch((response) => console.log(response));
    }
  };

  const MuscleAtt = (id: string, info: Muscledata) => {
    api.patch(`/muscles/${id}/`, info, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  const CalculateImc = (data: Calculate) => {
    if (data) {
      setImc(data.weight / (data.height * data.height));
    } else {
      setImc(weight / (height * height));
    }
  };

  return (
    <UserContext.Provider
      value={{
        AInformation,
        height,
        Muscle,
        MuscleAtt,
        weight,
        CalculateImc,
        imc,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };
