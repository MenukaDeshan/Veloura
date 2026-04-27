import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedSection from "@/components/home/FeaturedSection";
import EditorialGrid from "@/components/home/EditorialGrid";
import PressTicker from "@/components/home/PressTicker";
import EditorialTriple from "@/components/home/EditorialTriple";
import FeatureSplit from "@/components/home/FeatureSplit";
import CountdownSale from "@/components/home/CountdownSale";
import ShoppableGrid from "@/components/home/ShoppableGrid";
import StickyLookbook from "@/components/home/StickyLookbook";
import StoryBanner from "@/components/home/StoryBanner";
import CategoryHover from "@/components/home/CategoryHover";
import EditorialProductGrid from "@/components/home/EditorialProductGrid";
import CollectionsHover from "@/components/home/CollectionsHover";
import ValueProps from "@/components/home/ValueProps";
import InstagramFeed from "@/components/home/InstagramFeed";
import { getProducts } from "@/lib/shopify";
import styles from "./page.module.css";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <Hero />
        <FeaturedSection products={products} />
        <EditorialGrid />
        <PressTicker />
        <EditorialTriple />
        <FeatureSplit />
        <CountdownSale />
        <ShoppableGrid />
        <StickyLookbook />
        <StoryBanner />
        <CategoryHover />
        <EditorialProductGrid />
        <CollectionsHover />
        <ValueProps />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
}
