import Image from 'next/image';
import styles from './InstagramFeed.module.css';

const feedImages = [
  { src: '/hero.png', alt: 'Instagram post 1' },
  { src: '/hero-fashion.png', alt: 'Instagram post 2' },
  { src: '/hero.png', alt: 'Instagram post 3' },
  { src: '/hero-fashion.png', alt: 'Instagram post 4' },
];

export default function InstagramFeed() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className="serif">FOLLOW US @BROADCASTSIGNAL</h2>
      </div>
      <div className={styles.grid}>
        {feedImages.map((img, i) => (
          <div key={i} className={styles.item}>
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              className={styles.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
