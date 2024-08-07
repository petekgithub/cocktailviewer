import { Cocktail } from "@/interfaces/interfaces";

export const saveCocktail = (cocktail: Cocktail) => {
  if (typeof window !== "undefined") {
    const savedCocktails = localStorage.getItem("savedCocktails");
    let cocktailsArray: Cocktail[] = savedCocktails
      ? JSON.parse(savedCocktails)
      : [];

    cocktailsArray.push(cocktail);
    localStorage.setItem("savedCocktails", JSON.stringify(cocktailsArray));
  }
};

export const getSavedCocktails = (): Cocktail[] => {
  if (typeof window !== "undefined") {
    const savedCocktails = localStorage.getItem("savedCocktails");
    return savedCocktails ? JSON.parse(savedCocktails) : [];
  }
  return [];
};
