import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.scss";

interface NavBarProps {
  basketCount: number;
  saveBasket: () => void; // Add this prop to handle saving
}

export default function NavBar({ basketCount, saveBasket }: NavBarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.spacer} /> {/* Empty div for spacing */}
      <Link href="/saved-cocktails">
        <div className={styles.cartButton}>
          <Image
            src="/cart.svg"
            width={40}
            height={40}
            alt="shopping cart icon"
            className={styles.cartIcon}
          />
          {basketCount > 0 && (
            <div className={styles.basketCount}>{basketCount}</div>
          )}
        </div>
      </Link>
      <button onClick={saveBasket} className={styles.saveButton}>
        Save
      </button>
    </nav>
  );
}
