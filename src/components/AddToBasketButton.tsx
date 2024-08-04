// components/AddToBasketButton.tsx
import { useBasket } from "@/hooks/useBasket";
import { Cocktail } from "@/interfaces/interfaces";

const AddToBasketButton = ({ cocktail }: { cocktail: Cocktail }) => {
  const { addItemToBasket } = useBasket();

  return (
    <button onClick={() => addItemToBasket(cocktail)}>Add to Basket</button>
  );
};

export default AddToBasketButton;
