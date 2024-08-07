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

  // update the basketcount
  useEffect(() => {
    setBasketCount(basket.length);
  }, [basket]);

  //addItemToBasket
  const addItemToBasket = (cocktail: Cocktail) => {
    setBasket((prevBasket) => {
      const updatedBasket = [...prevBasket, cocktail];
      if (typeof window !== "undefined") {
        localStorage.setItem("savedCocktails", JSON.stringify(updatedBasket));
      }
      return updatedBasket;
    });
  };

  const removeItemFromBasket = (cocktailId: string) => {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.filter(
        (cocktail) => cocktail.idDrink !== cocktailId
      );
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
    basket,
    basketCount,
    addItemToBasket,
    removeItemFromBasket,
    saveBasket,
  };
};
