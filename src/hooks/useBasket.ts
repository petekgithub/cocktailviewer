// hooks/useBasket.ts
import { useState, useEffect } from "react";
import { Cocktail } from "@/interfaces/interfaces";

export const useBasket = () => {
  const [basket, setBasket] = useState<Cocktail[]>([]);
  const [basketCount, setBasketCount] = useState<number>(0);

  useEffect(() => {
    setBasketCount(basket.length);
  }, [basket]);

  const addItemToBasket = (cocktail: Cocktail) => {
    setBasket((prevBasket) => [...prevBasket, cocktail]);
  };

  const removeItemFromBasket = () => {
    setBasket((prevBasket) => prevBasket.slice(0, -1));
  };

  const saveBasket = () => {
    localStorage.setItem("savedCocktails", JSON.stringify(basket));
  };

  return {
    basketCount,
    addItemToBasket,
    removeItemFromBasket,
    saveBasket,
  };
};
