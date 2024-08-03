// hooks/useBasket.ts
import { useState, useEffect } from "react";
import { Cocktail } from "@/interfaces/interfaces";

export function useBasket() {
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
    // Logic to save the basket to the saved cocktails page
  };

  return {
    basketCount,
    addItemToBasket,
    removeItemFromBasket,
    saveBasket,
  };
}
