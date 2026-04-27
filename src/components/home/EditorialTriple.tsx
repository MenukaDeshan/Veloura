import Link from 'next/link';
import Image from 'next/image';
import styles from './EditorialTriple.module.css';

const sections = [
  {
    title: 'THE SWIM EDIT',
    subtitle: 'Effortless swimwear made for salt, sand, and long afternoons.',
    image: '/hero.png',
    link: '/collections/swim'
  },
  {
    title: 'THE POETRY OF SPRING',
    subtitle: "Romantic details, modern cuts — a season's story unfolding.",
    image: '/hero-fashion.png',
    link: '/collections/spring'
  },
  {
    title: 'FROM DESK TO DINNER',
    subtitle: 'Structured for meetings, softened for moments after.',
    image: '/hero.png',
    link: '/collections/essentials'
  }
];

export default function EditorialTriple() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {sections.map((item, index) => (
          <div key={index} className={styles.column}>
            <div className={styles.imageWrapper}>
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h3 className="serif">{item.title}</h3>
              <p>{item.subtitle}</p>
              <Link href={item.link} className={styles.link}>
                SHOP NOW <span className={styles.arrow}>›</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
