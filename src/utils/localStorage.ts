// utils/localStorage.ts
import { Cocktail } from "@/interfaces/interfaces"; // Adjust the path as needed

export const getSavedCocktails = (): Cocktail[] => {
  const savedCocktails = localStorage.getItem("savedCocktails");
  return savedCocktails ? JSON.parse(savedCocktails) : [];
};

export const saveCocktails = (cocktails: Cocktail[]) => {
  localStorage.setItem("savedCocktails", JSON.stringify(cocktails));
};
