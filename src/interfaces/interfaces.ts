// interface for a single coctail
export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}

//Props for SearchBar component
export interface SearchBarProps {
  onSearch: (cocktailName: string) => void;
}

//Props for CocktailCard component
export interface CocktailCardProps {
  cocktail: Cocktail;
  onAddToBasket: (id: string) => void;
}

//Props for Basket component
export interface BasketProps {
  cocktails: string[];
  onSave: () => void;
}

// Interface for the cocktail data fetched from the API
export interface CocktailData {
  drinks: Cocktail[];
}
