import { useToast } from "@chakra-ui/react";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";
import { api } from "../Services/api";

interface ContextProps {
  singUp: (data: SingUpCredentials) => void;
  user: User;
  accessToken: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  weight: number;
  height: number;
  Muscle: (id: string) => void;
  listTrainigs: Training[];
  loadTraining(token: string, user: User): void;
  MuscleAtt: (id: string, data: Muscledata) => void;

  logOut: () => void;
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
interface SignInCredentials {
  email: string;
  password: string;
}
interface User {
  email: string;
  password: string;
  id: string;
  name: string;
  genre: string;
}

interface LoginState {
  accessToken: string;
  user: User;
}

interface Training {
  id: number;
  title: string;
  category: string;
  description: string;
  videoURL: string;
  genre: "feminino" | "masculino";
}

interface Muscledata {
  weight: number;
  height: number;
}

interface User {
  email: string;
  name: string;
  genre: string;
  id: string;
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
  const [data, setData] = useState<LoginState>(() => {
    const accessToken = localStorage.getItem("@Fitness:accessToken");
    const user = localStorage.getItem("@Fitness:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }
    return {} as LoginState;
  });
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [listTrainigs, setListTrainings] = useState<Training[]>([]);

  useEffect(() => {
    if (data.accessToken) {
      loadTraining();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    api
      .post("/signin", { email, password })
      .then((response) => {
        const { accessToken, user } = response.data;
        localStorage.setItem("@Fitness:accessToken", accessToken);
        localStorage.setItem("@Fitness:user", JSON.stringify(user));
        setData({ accessToken, user });

        toast({
          position: "top",
          title: "login realizado.",
          description: "Login Realizado com sucesso",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        history.push("/fitnessHome");
      })
      .catch((_) => {
        toast({
          position: "top",
          title: "Usuário ou senha não existente",
          description: "Usuário ou senha inválidos",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const singUp = (data: SingUpCredentials) => {
    api
      .post("/register", data)
      .then(({ data }) => {
        toast({
          position: "top",
          title: "Conta criada.",
          description: "sua conta foi criada com sucesso, faça o login.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        api.post(
          `/muscles`,
          { weight: 0, height: 0, userId: data.user.id },
          {
            headers: {
              Authorization: `Bearer ${data.accessToken}`,
            },
          }
        );
        history.push("/");
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

  const Muscle = (id: string) => {
    if (id) {
      api
        .get(`/users/${id}/muscles`, {
          headers: {
            Authorization: `Bearer ${data.accessToken}`,
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
        Authorization: `Bearer ${data.accessToken}`,
      },
    });
  };

  const loadTraining = () => {
    api
      .get("/training", {
        headers: {
          Authorization: `Bearer ${data.accessToken}`,
        },
      })
      .then((response) => {
        const list = response.data;
        const filteredByGenre = list.filter(
          (training: Training) =>
            training.genre.toLowerCase() === data.user.genre.toLowerCase()
        );

        setListTrainings(filteredByGenre);
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          logOut();
          toast({
            position: "top",
            title: "Sua sessão expirou",
            description: "Por favor, faça o login novamente",
            status: "warning",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            position: "top",
            title: "Ocorreu um error",
            description:
              "Erro desconhecido por favor tente novamente mais tarde",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        }
      });
  };

  const logOut = () => {
    localStorage.clear();
    setData({} as LoginState);
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        singUp,
        signIn,
        accessToken: data.accessToken,
        user: data.user,
        Muscle,
        MuscleAtt,
        weight,
        height,
        loadTraining,
        listTrainigs,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
