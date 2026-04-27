import Link from 'next/link';
import { Search, ShoppingBag, User, Globe, Share2 } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.announcement}>
        <p>New customers save 10% with code <strong>GET10</strong></p>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.left}>
            <Link href="#" aria-label="Social"><Globe size={18} /></Link>
            <Link href="#" aria-label="Social"><Share2 size={18} /></Link>
          </div>

          <div className={styles.center}>
            <Link href="/" className={`${styles.logo} serif`}>
              veloura
            </Link>
            <div className={styles.navLinks}>
              <Link href="/shop">Shop</Link>
              <Link href="/sale" className={styles.saleLink}>Sale</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
            </div>
          </div>

          <div className={styles.right}>
            <button aria-label="Account"><User size={20} /></button>
            <button aria-label="Search"><Search size={20} /></button>
            <Link href="/cart" className={styles.cartBtn}>
              <ShoppingBag size={20} />
              <span className={styles.cartCount}>0</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
