import { createContext, ReactNode, useState } from "react";

import { api } from "../../Services/api";
import { useAuth } from "../AuthContext";

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
  MuscleAtt: (id: string, data: Muscledata) => void;
  MuscleRegister: (id: string, data: Muscledata) => void;
}

interface Muscledata {
  weight: number;
  height: number;
}

const MuscleContext = createContext<MuscleContextData>({} as MuscleContextData);

const MuscleProvider = ({ children }: ChildrenProp) => {
  const [token, setToken] = useState(
    localStorage.getItem("@Fitness:accessToken") || ""
  );

  const { accessToken, user } = useAuth();
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [listTrainigs, setListTrainings] = useState<Training[]>([]);

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

  const MuscleAtt = (id: string, data: Muscledata) => {
    console.log(id);
    api.patch(`/muscles/${id}/`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  const MuscleRegister = (id: string, data: Muscledata) => {
    api.post(`/muscles/${id}/`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
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
      value={{
        Muscle,
        MuscleAtt,
        MuscleRegister,
        weight,
        height,
        loadTraining,
        listTrainigs,
      }}
    >
      {children}
    </MuscleContext.Provider>
  );
};

export { MuscleProvider, MuscleContext };
