import Image from 'next/image';
import styles from './FeatureSplit.module.css';

export default function FeatureSplit() {
  return (
    <section className={styles.section}>
      <div className={styles.textSide}>
        <div className={styles.content}>
          <span className={styles.label}>STYLE THAT FITS YOUR LIFE</span>
          <h2 className="serif">THE DRESSES YOU'LL ACTUALLY LIVE IN</h2>
          <p>
            Meet the pieces that never ask for effort. Slip one on and go — 
            to work, to wander, to wherever the day leads. Because true style 
            should always feel this natural.
          </p>
          <button className={styles.button}>SHOP DRESSES</button>
        </div>
      </div>
      <div className={styles.imageSide}>
        <Image 
          src="/hero-fashion.png" 
          alt="Dress Collection" 
          fill 
          className={styles.image}
        />
      </div>
    </section>
  );
}
