// components/NavBar.tsx
import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.scss";

interface NavBarProps {
  basketCount: number;
}

export default function NavBar({ basketCount }: NavBarProps) {
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
    </nav>
  );
}
