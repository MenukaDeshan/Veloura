"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import styles from './FeaturedSection.module.css';

interface Product {
  id: string;
  title: string;
  handle: string;
  images: {
    edges: {
      node: {
        url: string;
        altText: string;
      }
    }[]
  };
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    }
  };
}

export default function FeaturedSection({ products }: { products: Product[] }) {
  const [activeTab, setActiveTab] = useState('BESTSELLERS');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 2); // Show earlier
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    checkScroll(); // Update visibility while dragging
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={`${styles.heading} serif`}>WORN, LOVED AND WORN AGAIN</h2>
          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeTab === 'BESTSELLERS' ? styles.active : ''}`}
              onClick={() => setActiveTab('BESTSELLERS')}
            >
              BESTSELLERS
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'NEW ARRIVALS' ? styles.active : ''}`}
              onClick={() => setActiveTab('NEW ARRIVALS')}
            >
              NEW ARRIVALS
            </button>
          </div>
        </div>

        <div className={styles.productCarousel}>
          {canScrollLeft && (
            <button 
              className={`${styles.scrollBtn} ${styles.left}`} 
              aria-label="Previous"
              onClick={() => scroll('left')}
            >
              <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
            </button>
          )}
          
          <div 
            className={`${styles.scrollContainer} ${isDragging ? styles.dragging : ''}`} 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className={styles.promoCard}>
              <div className={styles.promoImageWrapper}>
                <Image 
                  src="/hero-fashion.png" 
                  alt="Most Loved" 
                  fill 
                  className={styles.promoImage}
                  draggable={false}
                />
                <div className={styles.promoOverlay}>
                  <h3 className={`${styles.promoTitle} serif`}>MOST LOVED</h3>
                  <button className={styles.promoBtn}>VIEW PRODUCTS</button>
                </div>
              </div>
            </div>

            {products.map((product) => {
              const image = product.images.edges[0]?.node;
              return (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.imageWrapper}>
                    <span className={styles.badge}>Selling fast!</span>
                    {image && (
                      <Image
                        src={image.url}
                        alt={image.altText || product.title}
                        fill
                        className={styles.image}
                        draggable={false}
                      />
                    )}
                    <button className={styles.addToCart}>ADD TO CART</button>
                  </div>
                  <div className={styles.info}>
                    <h4 className={styles.title}>{product.title}</h4>
                    <p className={styles.price}>
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: product.priceRange.minVariantPrice.currencyCode,
                      }).format(parseFloat(product.priceRange.minVariantPrice.amount))}
                    </p>
                    <span className={styles.variants}>2 colors</span>
                  </div>
                </div>
              );
            })}
          </div>

          {canScrollRight && (
            <button 
              className={`${styles.scrollBtn} ${styles.right}`} 
              aria-label="Next"
              onClick={() => scroll('right')}
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
