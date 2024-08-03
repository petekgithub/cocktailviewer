// components/CocktailCard.tsx
import Image from "next/image";
import styles from "./CocktailCard.module.scss";
import { Cocktail } from "@/interfaces/interfaces";

interface CocktailCardProps {
  cocktail: Cocktail;
  onAddToBasket: (cocktail: Cocktail) => void;
}

const CocktailCard = ({ cocktail, onAddToBasket }: CocktailCardProps) => {
  return (
    <div className={styles.card}>
      <Image
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        width={300}
        height={300}
        className={styles.image}
      />
      <h3 className={styles.cardTitle}>{cocktail.strDrink}</h3>
      <p className={styles.cardDescription}>{cocktail.strInstructions}</p>
      <button onClick={() => onAddToBasket(cocktail)} className={styles.button}>
        Add to Basket
      </button>
    </div>
  );
};

export default CocktailCard;
