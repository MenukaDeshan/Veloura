import { Globe, Music, Share2 } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Large Background Logo */}
      <div className={styles.motifContainer}>
        <h1 className={`${styles.motifText} serif`}>veloura</h1>
      </div>

      <div className={styles.container}>
        {/* About */}
        <div className={styles.column}>
          <h3 className="serif">ABOUT</h3>
          <p>All products in this store are for demo purposes only. Veloura represents the modern woman who writes her own story.</p>
        </div>

        {/* Shop */}
        <div className={styles.column}>
          <h3 className="serif">SHOP</h3>
          <ul>
            <li>New arrivals</li>
            <li>Bestsellers</li>
            <li>Sale</li>
          </ul>
        </div>

        {/* Info */}
        <div className={styles.column}>
          <h3 className="serif">INFO</h3>
          <ul>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Theme Features</li>
          </ul>
        </div>

        {/* Stay in the know */}
        <div className={styles.column}>
          <h3 className="serif">STAY IN THE KNOW</h3>
          <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <div className={styles.newsletter}>
            <input type="email" placeholder="Email" className={styles.input} />
            <button className={styles.joinBtn}>JOIN</button>
          </div>
          <div className={styles.socials}>
            <Globe size={20} strokeWidth={1.5} />
            <Music size={20} strokeWidth={1.5} /> {/* TikTok fallback */}
            <Share2 size={20} strokeWidth={1.5} /> {/* Tumblr fallback */}
          </div>
        </div>
      </div>
    </footer>
  );
}
