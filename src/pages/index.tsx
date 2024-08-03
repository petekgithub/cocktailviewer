// index.tsx
import React, { useState } from "react";
import Layout from "@/components/Layout/Layout";
import SearchBar from "@/components/SearchBar/SearchBar";
import CocktailCard from "@/components/CocktailCard/CocktailCard";
import Basket from "@/components/Basket/Basket";
import { Cocktail, CocktailData } from "@/interfaces/interfaces";
import styles from "./index.module.scss"; // Yeni eklediğimiz Sass dosyası

const HomePage = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [basket, setBasket] = useState<string[]>([]);

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

  const handleAddToBasket = (id: string) => {
    setBasket((prevBasket) => [...prevBasket, id]);
  };

  const handleSaveBasket = () => {
    console.log("Saving Basket:", basket);
    setBasket([]);
  };

  return (
    <Layout title="Cocktail Viewer">
      <SearchBar onSearch={handleSearch} />
      <div className={styles["cocktail-list"]}>
        {cocktails.map((cocktail) => (
          <CocktailCard
            key={cocktail.idDrink}
            cocktail={cocktail}
            onAddToBasket={handleAddToBasket}
          />
        ))}
      </div>
      <Basket cocktails={basket} onSave={handleSaveBasket} />
    </Layout>
  );
};

export default HomePage;
