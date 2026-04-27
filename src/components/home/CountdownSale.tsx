import styles from './CountdownSale.module.css';

export default function CountdownSale() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>COUNTDOWN IS ON</span>
        <h2 className={`${styles.title} serif`}>SHOP THE SALE BEFORE IT ENDS</h2>
        
        <div className={styles.timer}>
          <div className={styles.timeItem}>
            <span className={`${styles.number} serif`}>02</span>
            <span className={styles.unit}>DAYS</span>
          </div>
          <div className={styles.timeItem}>
            <span className={`${styles.number} serif`}>23</span>
            <span className={styles.unit}>HOURS</span>
          </div>
          <div className={styles.timeItem}>
            <span className={`${styles.number} serif`}>59</span>
            <span className={styles.unit}>MINUTES</span>
          </div>
          <div className={styles.timeItem}>
            <span className={`${styles.number} serif`}>48</span>
            <span className={styles.unit}>SECONDS</span>
          </div>
        </div>
        
        <button className={styles.button}>SHOP NOW</button>
      </div>
    </section>
  );
}
