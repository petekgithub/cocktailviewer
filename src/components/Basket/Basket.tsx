import { BasketProps } from "@/interfaces/interfaces";
import styles from "./Basket.module.scss";

const Basket = ({ cocktails, onSave }: BasketProps) => {
  return (
    <div className={styles.basket}>
      <h2>Basket</h2>
      <ul>
        {cocktails.map((cocktailId) => (
          <li key={cocktailId}>{cocktailId}</li>
        ))}
      </ul>
      <button onClick={onSave}>Save</button>
    </div>
  );
};

export default Basket;
