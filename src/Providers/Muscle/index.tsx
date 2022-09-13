import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../Services";

interface ChildrenProp {
  children: ReactNode;
}

interface Training {
  id: number;
  title: string;
  category: string;
  description: string;
  videoURL: string;
  genre: "feminino" | "masculino";
}

interface User {
  email: string;
  name: string;
  genre: string;
  id: string;
}

interface MuscleContextData {
  weight: number;
  height: number;
  Muscle: (id: string) => void;
  listTrainigs: Training[];
  loadTraining(token: string, user: User): void;
}

const MuscleContext = createContext<MuscleContextData>({} as MuscleContextData);

const MuscleProvider = ({ children }: ChildrenProp) => {
  const [token, setToken] = useState(
    localStorage.getItem("@Fitness:accessToken") || ""
  );
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [listTrainigs, setListTrainings] = useState<Training[]>([]);

  const Muscle = (id: string) => {
    api
      .get(`/users/${id}/muscles`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setWeight(response.data[0].weight);
        setHeight(response.data[0].height);
      });
  };

  const loadTraining = (token: string, user: User) => {
    api
      .get("/training", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const list = response.data;

        const filteredByGenre = list.filter(
          (training: Training) =>
            training.genre.toLowerCase() === user.genre.toLowerCase()
        );

        setListTrainings(filteredByGenre);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MuscleContext.Provider
      value={{ Muscle, weight, height, listTrainigs, loadTraining }}
    >
      {children}
    </MuscleContext.Provider>
  );
};

export { MuscleProvider, MuscleContext };
