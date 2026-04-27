import { Truck, ShieldCheck, Leaf } from 'lucide-react';
import styles from './ValueProps.module.css';

export default function ValueProps() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.item}>
          <Truck size={24} strokeWidth={1} className={styles.icon} />
          <h3 className="serif">FREE SHIPPING OVER $200</h3>
        </div>
        <div className={styles.item}>
          <ShieldCheck size={24} strokeWidth={1} className={styles.icon} />
          <h3 className="serif">SECURE PAYMENTS</h3>
        </div>
        <div className={styles.item}>
          <Leaf size={24} strokeWidth={1} className={styles.icon} />
          <h3 className="serif">ETHICALLY PRODUCED</h3>
        </div>
      </div>
    </section>
  );
}
