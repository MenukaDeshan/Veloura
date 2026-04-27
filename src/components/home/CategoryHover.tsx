"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './CategoryHover.module.css';

const categories = [
  { id: 'new', label: 'NEW', count: 12, image: '/hero.png' },
  { id: 'coats', label: 'COATS & JACKETS', count: 12, image: '/hero-fashion.png' },
  { id: 'dresses', label: 'DRESSES', count: 32, image: '/hero.png' },
  { id: 'lifestyle', label: 'LIFESTYLE', count: 8, image: '/hero-fashion.png' },
];

export default function CategoryHover() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left: Category List */}
        <div className={styles.listSide}>
          <ul className={styles.categoryList}>
            {categories.map((cat) => (
              <li 
                key={cat.id}
                className={`${styles.categoryItem} ${activeCategory.id === cat.id ? styles.active : ''}`}
                onMouseEnter={() => setActiveCategory(cat)}
              >
                <span className="serif">{cat.label}</span>
                <sup className={styles.count}>{cat.count}</sup>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Dynamic Image */}
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            {categories.map((cat) => (
              <Image
                key={cat.id}
                src={cat.image}
                alt={cat.label}
                fill
                className={`${styles.image} ${activeCategory.id === cat.id ? styles.visible : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
