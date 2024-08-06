import { useState, useEffect } from "react";
import CocktailCard from "@/components/CocktailCard/CocktailCard";
import { Cocktail } from "@/interfaces/interfaces";

const Basket = () => {
  const [basket, setBasket] = useState<Cocktail[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCocktails = localStorage.getItem("savedCocktails");
      if (storedCocktails) {
        setBasket(JSON.parse(storedCocktails));
      }
    }
  }, []);

  const handleSave = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("savedCocktails", JSON.stringify(basket));
      alert("Cocktails saved!");
    }
  };

  const handleRemove = (id: string) => {
    const updatedBasket = basket.filter((cocktail) => cocktail.idDrink !== id);
    setBasket(updatedBasket);
    if (typeof window !== "undefined") {
      localStorage.setItem("savedCocktails", JSON.stringify(updatedBasket));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Basket</h2>
      <div className="cardContainer">
        {basket.map((cocktail) => (
          <div key={cocktail.idDrink} className="relative">
            <CocktailCard
              cocktail={cocktail}
              onAddToBasket={() => {}}
              onRemoveFromBasket={handleRemove}
            />
            <button
              onClick={() => handleRemove(cocktail.idDrink)}
              className="absolute top-2 right-2 bg-red-500 text-white py-1 px-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleSave}
        className="mt-4 py-2 px-4 bg-emerald-500 text-white rounded"
      >
        Save
      </button>
    </div>
  );
};

export default Basket;
