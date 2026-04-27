import { Flower2 } from 'lucide-react';
import styles from './StoryBanner.module.css';

export default function StoryBanner() {
  const text = "FOR WOMEN WHO WRITE THEIR OWN STORIES";
  
  return (
    <section className={styles.section}>
      <div className={styles.ticker}>
        <div className={styles.track}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={styles.item}>
              <h2 className="serif">{text}</h2>
              <Flower2 className={styles.icon} size={40} strokeWidth={1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
