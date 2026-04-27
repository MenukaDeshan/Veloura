import styles from './PressTicker.module.css';

export default function PressTicker() {
  const logos = [
    'marie claire', 'VOGUE', 'VANITY FAIR', 'allure',
    'marie claire', 'VOGUE', 'VANITY FAIR', 'allure',
    'marie claire', 'VOGUE', 'VANITY FAIR', 'allure'
  ];

  return (
    <section className={styles.section}>
      <div className={styles.ticker}>
        <div className={styles.track}>
          {logos.map((logo, index) => (
            <span key={index} className={`${styles.logo} serif`}>
              {logo}
            </span>
          ))}
          {/* Duplicate for infinite effect */}
          {logos.map((logo, index) => (
            <span key={`dup-${index}`} className={`${styles.logo} serif`}>
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
