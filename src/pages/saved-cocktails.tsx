import { useEffect, useState } from "react";
import Layout from "@/components/Layout/Layout";
import styles from "./saved-cocktails.module.scss";
import withAuth from "@/components/withAuth";
import Image from "next/image";
import { getSavedCocktails } from "@/utils/localStorage";

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}

const SavedCocktailsPage = () => {
  const [savedCocktails, setSavedCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    setSavedCocktails(getSavedCocktails());
  }, []); // Bu useEffect yalnızca bileşen ilk yüklendiğinde çalışır

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
        <ul className={styles.cardList}>
          {savedCocktails.length > 0 ? (
            savedCocktails.map((cocktail) => (
              <li key={cocktail.idDrink} className={styles.card}>
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
                  onClick={() => handleRemove(cocktail.idDrink)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </li>
            ))
          ) : (
            <p>No saved cocktails found.</p>
          )}
        </ul>
      </div>
    </Layout>
  );
};

export default withAuth(SavedCocktailsPage);
