import { useState } from "react";
import Layout from "@/components/Layout/Layout";
import SearchBar from "@/components/SearchBar/SearchBar";
import CocktailCard from "@/components/CocktailCard/CocktailCard";
import NavBar from "@/components/NavBar/NavBar";
import { Cocktail, CocktailData } from "@/interfaces/interfaces";
import ProtectedRoute from "@/components/ProtectedRoute";
import styles from "./index.module.scss";

const fetchWithTimeout = (
  url: string,
  options: RequestInit = {},
  timeout: number = 10000
): Promise<Response> => {
  return Promise.race([
    fetch(url, options),
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), timeout)
    ),
  ]);
};

const HomePage = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [basket, setBasket] = useState<Cocktail[]>([]);

  const handleSearch = async (cocktailName: string) => {
    try {
      const response = await fetchWithTimeout(
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
    if (window.confirm("Do you want to add this cocktail to your basket?")) {
      setBasket((prevBasket) => [...prevBasket, cocktail]);
    }
  };

  const handleRemoveFromBasket = (cocktailId: string) => {
    if (
      window.confirm("Do you want to remove this cocktail from your basket?")
    ) {
      setBasket((prevBasket) =>
        prevBasket.filter((cocktail) => cocktail.idDrink !== cocktailId)
      );
    }
  };

  const saveBasket = () => {
    localStorage.setItem("savedCocktails", JSON.stringify(basket));
    alert("Basket saved!");
  };

  return (
    <ProtectedRoute>
      <Layout title="Cocktail Viewer">
        <NavBar basketCount={basket.length} saveBasket={saveBasket} />
        <div className={styles.container}>
          <SearchBar onSearch={handleSearch} />
          <div className={styles.gridContainer}>
            {cocktails.map((cocktail) => (
              <CocktailCard
                key={cocktail.idDrink}
                cocktail={cocktail}
                onAddToBasket={handleAddToBasket}
                onRemoveFromBasket={handleRemoveFromBasket}
              />
            ))}
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default HomePage;
