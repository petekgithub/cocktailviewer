// components/SavedCocktails.tsx
import { useEffect, useState, useCallback } from "react";
import { Cocktail } from "@/interfaces/interfaces";
import { getSavedCocktails, saveCocktails } from "@/utils/localStorage";
import styles from "./SavedCocktails.module.scss";
import CocktailCard from "../CocktailCard/CocktailCard";

const SavedCocktails = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    const initialCocktails = getSavedCocktails();
    setCocktails(initialCocktails);
  }, []);

  const handleRemoveFromBasket = useCallback(
    (cocktailId: string) => {
      const updatedCocktails = cocktails.filter(
        (cocktail) => cocktail.idDrink !== cocktailId
      );
      setCocktails(updatedCocktails);
      saveCocktails(updatedCocktails);
    },
    [cocktails]
  );

  return (
    <div className={styles.container}>
      <h1>Saved Cocktails</h1>
      <div className={styles.cardContainer}>
        {cocktails.length > 0 ? (
          cocktails.map((cocktail) => (
            <CocktailCard
              key={cocktail.idDrink}
              cocktail={cocktail}
              onAddToBasket={() => {}}
              onRemoveFromBasket={handleRemoveFromBasket}
            />
          ))
        ) : (
          <p>No saved cocktails.</p>
        )}
      </div>
    </div>
  );
};

export default SavedCocktails;
