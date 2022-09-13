import { createContext, ReactNode, useState } from "react";

import { api } from "../../Services/api";
import { useAuth } from "../AuthContext";

interface ChildrenProp {
  children: ReactNode;
}

interface MuscleContextData {
  weight: number;
  height: number;
  Muscle: (id: string) => void;
  MuscleAtt: (id: string, data: Muscledata) => void;
  MuscleRegister: (id: string, data: Muscledata) => void;
}

interface Muscledata {
  weight: number;
  height: number;
}

const MuscleContext = createContext<MuscleContextData>({} as MuscleContextData);

const MuscleProvider = ({ children }: ChildrenProp) => {
  const { accessToken } = useAuth();
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const Muscle = (id: string) => {
    if (id) {
      api
        .get(`/users/${id}/muscles`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log(response);
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
    console.log(id);
    api.post(`/muscles/${id}/`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  return (
    <MuscleContext.Provider
      value={{ Muscle, MuscleAtt, MuscleRegister, weight, height }}
    >
      {children}
    </MuscleContext.Provider>
  );
};

export { MuscleProvider, MuscleContext };
