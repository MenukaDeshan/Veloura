"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={styles.imageWrapper}
        >
          <Image
            src="/hero.png"
            alt="Veloura Summer Collection"
            fill
            priority
            className={styles.image}
          />
        </motion.div>
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <motion.h1
            className={`${styles.title} serif`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span>LAST CHANCE</span>
            <motion.span
              className={styles.outline}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              SALE
            </motion.span>
          </motion.h1>
        </div>

        <motion.div
          className={styles.actions}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <button className={styles.primaryBtn}>SHOP THE SALE</button>
          <button className={styles.secondaryBtn}>VIEW PRODUCTS</button>
        </motion.div>
      </div>


    </section>
  );
}
