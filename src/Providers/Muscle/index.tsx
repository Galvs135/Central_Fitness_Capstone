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
  const [token, setToken] = useState(
    localStorage.getItem("Fitnes:accessToken") || ""
  );
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const Muscle = (id: string) => {
    console.log(token);
    api
      .get(`/users/${id}/muscles`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setWeight(
          response.data[0].weight === undefined ? 0 : response.data[0].weight
        );
        setHeight(
          response.data[0].height === undefined ? 0 : response.data[0].height
        );
      })
      .catch((response) => console.log(response));
  };

  const MuscleAtt = (id: string, data: Muscledata) => {
    console.log(id);
    api.patch(`/muscles/${id}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const MuscleRegister = (id: string, data: Muscledata) => {
    console.log(id);
    api.post(`/muscles/${id}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
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
