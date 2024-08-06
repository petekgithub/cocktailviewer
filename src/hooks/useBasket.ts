import { useState, useEffect } from "react";
import { Cocktail } from "@/interfaces/interfaces";

export const useBasket = () => {
  const [basket, setBasket] = useState<Cocktail[]>([]);
  const [basketCount, setBasketCount] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCocktails = localStorage.getItem("savedCocktails");
      if (storedCocktails) {
        setBasket(JSON.parse(storedCocktails));
      }
    }
  }, []);

  useEffect(() => {
    setBasketCount(basket.length);
  }, [basket]);

  const addItemToBasket = (cocktail: Cocktail) => {
    setBasket((prevBasket) => {
      const updatedBasket = [...prevBasket, cocktail];
      if (typeof window !== "undefined") {
        localStorage.setItem("savedCocktails", JSON.stringify(updatedBasket));
      }
      return updatedBasket;
    });
  };

  const removeItemFromBasket = () => {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.slice(0, -1);
      if (typeof window !== "undefined") {
        localStorage.setItem("savedCocktails", JSON.stringify(updatedBasket));
      }
      return updatedBasket;
    });
  };

  const saveBasket = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("savedCocktails", JSON.stringify(basket));
    }
  };

  return {
    basketCount,
    addItemToBasket,
    removeItemFromBasket,
    saveBasket,
  };
};
