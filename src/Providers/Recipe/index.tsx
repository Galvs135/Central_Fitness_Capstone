import { createContext, useContext, ReactNode, useState } from "react";
import { api } from "../../Services/api";
import { useAuth } from "../AuthContext";

interface ChildrenProp {
  children: ReactNode;
}

interface Recipe {
  id: number;
  category: string;
  title: string;
  imageURL: string;
  ingredients: string[];
  preparation: string[];
}

interface RecipeContextData {
  listRecipe: Recipe[];
  loadRecipe(token: string): void;
}

const RecipeContext = createContext<RecipeContextData>({} as RecipeContextData);

const useRecipe = () => useContext(RecipeContext);

const RecipeProvider = ({ children }: ChildrenProp) => {
  const [listRecipe, setListRecipe] = useState<Recipe[]>([]);

  const loadRecipe = (token: string) => {
    api
      .get("/nutrition", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListRecipe(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <RecipeContext.Provider value={{ listRecipe, loadRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider, useRecipe };
