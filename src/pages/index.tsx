import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import SearchBar from "@/components/SearchBar/SearchBar";
import CocktailCard from "@/components/CocktailCard/CocktailCard";
import { Cocktail, CocktailData } from "@/interfaces/interfaces";
import styles from "./index.module.scss";

const HomePage = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  const handleSearch = async (cocktailName: string) => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
      );
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const data: CocktailData = await response.json();
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error("Error fetching cocktails:", error);
      setCocktails([]);
    }
  };

  const handleAddToBasket = (cocktail: Cocktail) => {
    const savedBasket = localStorage.getItem("basket");
    const basket = savedBasket ? JSON.parse(savedBasket) : [];
    basket.push(cocktail);
    localStorage.setItem("basket", JSON.stringify(basket));
    // Update basket count in NavBar (or a global state)
  };

  return (
    <Layout title="Cocktail Viewer">
      <SearchBar onSearch={handleSearch} />
      <div className={styles.gridContainer}>
        {cocktails.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            cocktail={cocktail}
            onAddToBasket={handleAddToBasket}
          />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
