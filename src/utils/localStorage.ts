import { Cocktail } from "@/interfaces/interfaces";

export const saveCocktail = (cocktail: Cocktail) => {
  const existingCocktails = localStorage.getItem("savedCocktails");
  let cocktails: Cocktail[] = existingCocktails
    ? JSON.parse(existingCocktails)
    : [];
  if (!cocktails.some((c) => c.idDrink === cocktail.idDrink)) {
    cocktails.push(cocktail);
    localStorage.setItem("savedCocktails", JSON.stringify(cocktails));
  }
};

export const getSavedCocktails = (): Cocktail[] => {
  const saved = localStorage.getItem("savedCocktails");
  return saved ? JSON.parse(saved) : [];
};
