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

  const handleRemoveClick = (id: string) => {
    const updatedCocktails = savedCocktails.filter(
      (cocktail) => cocktail.idDrink !== id
    );
    setSavedCocktails(updatedCocktails);
    localStorage.setItem("savedCocktails", JSON.stringify(updatedCocktails));
  };

  return (
    <div className={styles.container}>
      <h1>Saved Cocktails</h1>
      <ul className={styles.cardList}>
        {savedCocktails.map((cocktail) => (
          <li key={cocktail.idDrink}>
            <div className={styles.card}>
              <Image
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                width={200}
                height={200}
                className={styles.image}
              />
              <h3 className={styles.cardTitle}>{cocktail.strDrink}</h3>
              <p className={styles.cardDescription}>
                {cocktail.strInstructions}
              </p>
              <button
                className={styles.button}
                onClick={() => handleRemoveClick(cocktail.idDrink)}
              >
                Remove from Basket
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedCocktails;
