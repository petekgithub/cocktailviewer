import { useState, useCallback } from "react";
import Image from "next/image";
import { Cocktail } from "@/interfaces/interfaces";
import styles from "./CocktailCard.module.scss";

interface CocktailCardProps {
  cocktail: Cocktail;
  onAddToBasket: (cocktail: Cocktail) => void;
  onRemoveFromBasket: (cocktailId: string) => void;
}

const CocktailCard = ({
  cocktail,
  onAddToBasket,
  onRemoveFromBasket,
}: CocktailCardProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleRemoveClick = useCallback(() => {
    console.log("Remove button clicked");
    const confirmRemove = window.confirm(
      "Do you want to remove this cocktail from your basket?"
    );
    if (confirmRemove) {
      console.log("Confirming removal");
      onRemoveFromBasket(cocktail.idDrink);
    }
  }, [cocktail.idDrink, onRemoveFromBasket]);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {imageError ? (
          <div className={styles.errorImage}>Image Not Available</div>
        ) : (
          <Image
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            onError={handleImageError}
            className={styles.image}
            width={200}
            height={200}
          />
        )}
      </div>
      <div className={styles.details}>
        <h3>{cocktail.strDrink}</h3>
        <button
          className={styles.button}
          onClick={() => onAddToBasket(cocktail)}
        >
          Add to Basket
        </button>
        <button className={styles.button} onClick={handleRemoveClick}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CocktailCard;
