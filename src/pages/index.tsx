// pages/index.tsx
import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import SearchBar from "@/components/SearchBar/SearchBar";
import CocktailCard from "@/components/CocktailCard/CocktailCard";
import { Cocktail, CocktailData } from "@/interfaces/interfaces";
import styles from "./index.module.scss";
import NavBar from "@/components/NavBar/NavBar";

const HomePage = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [basket, setBasket] = useState<Cocktail[]>([]);

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
    setBasket((prevBasket) => [...prevBasket, cocktail]);
  };

  return (
    <Layout title="Cocktail Viewer">
      <NavBar basketCount={basket.length} />
      <div className={styles.container}>
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
      </div>
    </Layout>
  );
};

export default HomePage;
