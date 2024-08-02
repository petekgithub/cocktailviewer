import Image from "next/image";
import styles from "./CocktailCard.module.scss";
import { Cocktail } from "@/interfaces/interfaces";

interface CocktailCardProps {
  cocktail: Cocktail;
  onAddToBasket: (id: string) => void;
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
      <h3>{cocktail.strDrink}</h3>
      <p>{cocktail.strInstructions}</p>
      <button onClick={() => onAddToBasket(cocktail.idDrink)}>
        Add to Basket
      </button>
    </div>
  );
};

export default CocktailCard;
