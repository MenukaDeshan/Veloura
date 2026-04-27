import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductGrid.module.css';

interface Product {
  id: string;
  title: string;
  handle: string;
  images: {
    edges: {
      node: {
        url: string;
        altText: string;
      }
    }[]
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    }
  };
}

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="serif">NEW ARRIVALS</h2>
          <Link href="/shop" className={styles.viewAll}>VIEW ALL</Link>
        </div>

        <div className={styles.grid}>
          {products.map((product) => {
            const image = product.images.edges[0]?.node;
            return (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  {/*{image && (
                    <Image
                      src={image.url}
                      alt={image.altText || product.title}
                      fill
                      className={styles.image}
                    />
                  )}*/}
                  <button className={styles.quickAdd}>QUICK ADD</button>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.title}>{product.title}</h3>
                  <p className={styles.price}>
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: product.priceRange.minVariantPrice.currencyCode,
                    }).format(parseFloat(product.priceRange.minVariantPrice.amount))}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
