import Link from 'next/link';
import Image from 'next/image';
import styles from './EditorialGrid.module.css';

export default function EditorialGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <Image 
          src="/hero.png" 
          alt="Daily Go-Tos" 
          fill 
          className={styles.image}
        />
        <div className={styles.content}>
          <h2 className="serif">YOUR DAILY GO-TOS</h2>
          <p>Timeless pieces designed to move with your every day.</p>
          <Link href="/shop" className={styles.link}>SHOP NOW</Link>
        </div>
      </div>

      <div className={styles.banner}>
        <Image 
          src="/hero-fashion.png" 
          alt="Wardrobe Icons" 
          fill 
          className={styles.image}
        />
        <div className={styles.content}>
          <h2 className="serif">THE WARDROBE ICONS</h2>
          <p>The silhouettes that never let you down.</p>
          <Link href="/shop" className={styles.link}>SHOP NOW</Link>
        </div>
      </div>
    </section>
  );
}
