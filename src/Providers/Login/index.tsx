import { useToast } from "@chakra-ui/react";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../Services/api";

interface ChildrenProp {
  children: ReactNode;
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

interface SignInCredentials {
  email: string;
  password: string;
}

interface LoginContextData {
  user: User;
  accessToken: string;
  signIn: (credentials: SignInCredentials) => Promise<void>;
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData);

const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLogin must be used within an LoginProvider");
  }
  return context;
};

const LoginProvider = ({ children }: ChildrenProp) => {
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
          title: "Usuario ou senha não existente",
          description: "Usuario ous enha Invalidos",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LoginContext.Provider
      value={{ accessToken: data.accessToken, signIn, user: data.user }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, useLogin };
