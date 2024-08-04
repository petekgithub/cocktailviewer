// pages/saved-cocktails.tsx
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./saved-cocktails.module.scss";

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}

const SavedCocktails = () => {
  const [savedCocktails, setSavedCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("savedCocktails");
    if (saved) {
      setSavedCocktails(JSON.parse(saved));
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1>Saved Cocktails</h1>
      <ul>
        {savedCocktails.map((cocktail) => (
          <li key={cocktail.idDrink}>
            <Image
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              width={100}
              height={100}
              className={styles.image}
            />
            <p>{cocktail.strDrink}</p>
            <p>{cocktail.strInstructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedCocktails;
