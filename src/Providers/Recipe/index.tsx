import { createContext, useContext, ReactNode, useState } from "react";
import { api } from "../../Services/api";

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
  listRecipeFiltered: Recipe[];
  loadRecipe(token: string): void;
  filterRecipe(category: string): void;
}

const RecipeContext = createContext<RecipeContextData>({} as RecipeContextData);

const useRecipe = () => useContext(RecipeContext);

const RecipeProvider = ({ children }: ChildrenProp) => {
  const [listRecipe, setListRecipe] = useState<Recipe[]>([]);
  const [listRecipeFiltered, setListRecipeFiltered] = useState<Recipe[]>([]);

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

  const filterRecipe = (category: string) => {
    const result = listRecipe.filter((recipe) => recipe.category === category);
    setListRecipeFiltered(result);
  };

  return (
    <RecipeContext.Provider
      value={{
        listRecipe,
        loadRecipe,
        filterRecipe,
        listRecipeFiltered,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider, useRecipe };
