// components/NavBar/NavBar.tsx
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [basketCount, setBasketCount] = useState<number>(0);

  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");
    if (savedBasket) {
      setBasketCount(JSON.parse(savedBasket).length);
    }
  }, []);

  return (
    <nav className="py-5 px-12 flex justify-between">
      <Link href="/">
        <p className="bg-white text-3xl font-bold underline underline-offset-4 decoration-wavy decoration-2 decoration-emerald-500">
          fresh
        </p>
      </Link>
      <Link href="/saved-cocktails">
        <button className="relative">
          <Image
            src="/cart.svg"
            width={40}
            height={40}
            alt="shopping cart icon"
          />
          {basketCount > 0 && (
            <div className="rounded-full flex justify-center items-center bg-emerald-500 text-xs text-white absolute w-6 h-5 bottom-6 -right-1">
              {basketCount}
            </div>
          )}
        </button>
      </Link>
    </nav>
  );
}
