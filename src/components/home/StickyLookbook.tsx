import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import styles from './StickyLookbook.module.css';

const products = [
  {
    title: 'Floral crop tank in ivory',
    price: '$140.00',
    colors: '2 colors',
    image: '/hero.png'
  },
  {
    title: 'Floral shorts in ivory',
    price: '$120.00',
    colors: '2 colors',
    image: '/hero-fashion.png',
    soldOut: true
  },
  {
    title: 'Woven Straw Clutch',
    price: '$85.00',
    colors: 'Natural',
    image: '/hero.png'
  }
];

export default function StickyLookbook() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left: Sticky Image */}
        <div className={styles.stickySide}>
          <div className={styles.imageContainer}>
            <Image 
              src="/hero-fashion.png" 
              alt="Lookbook Feature" 
              fill 
              className={styles.mainImage}
            />
            {/* Shoppable Hotspots */}
            <div className={`${styles.hotspot} ${styles.top}`}><ShoppingBag size={14} /></div>
            <div className={`${styles.hotspot} ${styles.bottom}`}><ShoppingBag size={14} /></div>
          </div>
        </div>

        {/* Right: Scrolling Products */}
        <div className={styles.scrollSide}>
          <h2 className={styles.title}>SHOP THE LOOK</h2>
          <div className={styles.productList}>
            {products.map((product, i) => (
              <div key={i} className={styles.productCard}>
                <div className={styles.productImageWrapper}>
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill 
                    className={styles.productImage}
                  />
                  {product.soldOut && <span className={styles.soldOutBadge}>Sold Out</span>}
                </div>
                <div className={styles.productInfo}>
                  <h3>{product.title}</h3>
                  <p className={styles.price}>{product.price}</p>
                  <p className={styles.colors}>{product.colors}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
