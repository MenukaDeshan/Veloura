"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './CollectionsHover.module.css';

const collections = [
  { id: 'spring', label: 'SPRING 2026', count: 12, image: '/hero.png' },
  { id: 'dress', label: 'THE DRESS EDIT', count: 32, image: '/hero-fashion.png' },
  { id: 'sale', label: 'SALE', count: 9, image: '/hero.png' },
  { id: 'autumn', label: 'AUTUMN CAPSULE', count: 18, image: '/hero-fashion.png' },
  { id: 'essentials', label: 'THE ESSENTIALS', count: 20, image: '/hero.png' },
];

export default function CollectionsHover() {
  const [activeCollection, setActiveCollection] = useState(collections[0]);

  return (
    <section className={styles.section}>
      {/* Background Images */}
      <div className={styles.backgroundContainer}>
        {collections.map((col) => (
          <Image
            key={col.id}
            src={col.image}
            alt={col.label}
            fill
            className={`${styles.bgImage} ${activeCollection.id === col.id ? styles.visible : ''}`}
            priority
          />
        ))}
        <div className={styles.overlay} />
      </div>

      {/* Floating Content */}
      <div className={styles.content}>
        <div className={styles.menuGrid}>
          <div className={styles.topRow}>
            <div 
              className={`${styles.item} ${activeCollection.id === 'spring' ? styles.active : ''}`}
              onMouseEnter={() => setActiveCollection(collections[0])}
            >
              <span className="serif">SPRING 2026</span>
              <sup>12</sup>
            </div>
            <div 
              className={`${styles.item} ${activeCollection.id === 'dress' ? styles.active : ''}`}
              onMouseEnter={() => setActiveCollection(collections[1])}
            >
              <span className="serif">THE DRESS EDIT</span>
              <sup>32</sup>
            </div>
            <div 
              className={`${styles.item} ${activeCollection.id === 'sale' ? styles.active : ''}`}
              onMouseEnter={() => setActiveCollection(collections[2])}
            >
              <span className="serif">SALE</span>
              <sup>9</sup>
            </div>
            <div 
              className={`${styles.item} ${activeCollection.id === 'autumn' ? styles.active : ''}`}
              onMouseEnter={() => setActiveCollection(collections[3])}
            >
              <span className="serif">AUTUMN CAPSULE</span>
              <sup>18</sup>
            </div>
          </div>
          <div className={styles.bottomRow}>
            <div 
              className={`${styles.item} ${activeCollection.id === 'essentials' ? styles.active : ''}`}
              onMouseEnter={() => setActiveCollection(collections[4])}
            >
              <span className="serif">THE ESSENTIALS</span>
              <sup>20</sup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
