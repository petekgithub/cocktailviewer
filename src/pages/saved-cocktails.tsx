import { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import { getSavedCocktails } from "@/utils/localStorage";
import { Cocktail } from "@/interfaces/interfaces";
import Image from "next/image";
import styles from "./saved-cocktails.module.scss";

const SavedCocktailsPage = () => {
  const [savedCocktails, setSavedCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    const saved = getSavedCocktails();
    setSavedCocktails(saved);
  }, []);

  const handleRemove = (id: string) => {
    const updatedCocktails = savedCocktails.filter(
      (cocktail) => cocktail.idDrink !== id
    );
    setSavedCocktails(updatedCocktails);
    localStorage.setItem("savedCocktails", JSON.stringify(updatedCocktails));
  };

  return (
    <Layout title="Saved Cocktails">
      <div className={styles.container}>
        <h1>Saved Cocktails</h1>
        {savedCocktails.length === 0 ? (
          <p>No saved cocktails found.</p>
        ) : (
          <ul className={styles.cardList}>
            {savedCocktails.map((cocktail) => (
              <li key={cocktail.idDrink} className={styles.card}>
                <Image
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                  width={200} // specify width
                  height={200} // specify height
                  className={styles.image}
                />
                <h3 className={styles.cardTitle}>{cocktail.strDrink}</h3>
                <p className={styles.cardDescription}>
                  {cocktail.strInstructions}
                </p>
                <button
                  onClick={() => handleRemove(cocktail.idDrink)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default SavedCocktailsPage;
