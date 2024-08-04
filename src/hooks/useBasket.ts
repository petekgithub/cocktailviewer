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
    setBasket((prevBasket) => {
      console.log("Adding item to basket:", cocktail);
      const newBasket = [...prevBasket, cocktail];
      console.log("Updated basket:", newBasket);
      return newBasket;
    });
  };

  const removeItemFromBasket = () => {
    setBasket((prevBasket) => {
      console.log("Removing item from basket");
      const newBasket = prevBasket.slice(0, -1);
      console.log("Updated basket:", newBasket);
      return newBasket;
    });
  };

  const saveBasket = () => {
    console.log("Saving basket:", basket);
    localStorage.setItem("savedCocktails", JSON.stringify(basket));
  };

  return {
    basketCount,
    addItemToBasket,
    removeItemFromBasket,
    saveBasket,
  };
};
