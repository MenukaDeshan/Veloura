import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import styles from './ShoppableGrid.module.css';

const images = [
  { src: '/hero.png', alt: 'Look 1' },
  { src: '/hero-fashion.png', alt: 'Look 2' },
  { src: '/hero.png', alt: 'Look 3' },
  { src: '/hero-fashion.png', alt: 'Look 4' },
  { src: '/hero-fashion.png', alt: 'Look 5', large: true },
];

export default function ShoppableGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftGrid}>
          {images.slice(0, 4).map((img, i) => (
            <div key={i} className={styles.item}>
              <Image src={img.src} alt={img.alt} fill className={styles.image} />
              <button className={styles.shopIcon} aria-label="Shop this look">
                <ShoppingBag size={14} />
              </button>
            </div>
          ))}
        </div>
        <div className={styles.rightLarge}>
          <div className={styles.item}>
            <Image src={images[4].src} alt={images[4].alt} fill className={styles.image} />
            <button className={styles.shopIcon} aria-label="Shop this look">
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
