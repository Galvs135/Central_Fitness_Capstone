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
}

const MuscleContext = createContext<MuscleContextData>({} as MuscleContextData);

const MuscleProvider = ({ children }: ChildrenProp) => {
  const [token, setToken] = useState(
    localStorage.getItem("Fitnes:accessToken") || ""
  );
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

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

  return (
    <MuscleContext.Provider value={{ Muscle, weight, height }}>
      {children}
    </MuscleContext.Provider>
  );
};

export { MuscleProvider, MuscleContext };
