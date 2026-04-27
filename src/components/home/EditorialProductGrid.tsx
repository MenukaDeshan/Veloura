import Image from 'next/image';
import styles from './EditorialProductGrid.module.css';

const products = [
  {
    title: 'Oversized suit vest in maroon',
    price: '$175.00',
    colors: '2 colors',
    image: '/hero-fashion.png'
  },
  {
    title: 'Classic silk slip dress in ivory',
    price: '$250.00',
    colors: '2 colors',
    image: '/hero.png'
  },
  {
    title: 'Linen shift dress in black',
    price: '$200.00',
    colors: '2 colors',
    image: '/hero-fashion.png'
  },
  {
    title: 'Belted short in beige',
    price: '$180.00',
    colors: '2 colors',
    image: '/hero.png'
  }
];

export default function EditorialProductGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left: Large Editorial */}
        <div className={styles.editorialSide}>
          <Image 
            src="/hero-fashion.png" 
            alt="Editorial Feature" 
            fill 
            className={styles.mainImage}
          />
        </div>

        {/* Right: 2x2 Product Grid */}
        <div className={styles.gridSide}>
          <div className={styles.productGrid}>
            {products.map((product, i) => (
              <div key={i} className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill 
                    className={styles.productImage}
                  />
                  <div className={styles.overlay}>
                    <button className={styles.addToCart}>ADD TO CART</button>
                  </div>
                </div>
                <div className={styles.info}>
                  <h3>{product.title}</h3>
                  <p className={styles.price}>{product.price}</p>
                  <p className={styles.variants}>{product.colors}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
