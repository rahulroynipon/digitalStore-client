import Header from "../components/global/Header";
import BestDeals from "../components/home/BestDeals";
import { CategoryCarousel } from "../components/home/CategoryCarousel";
import FeaturedProduct from "../components/home/FeaturedProduct";
import SaleOverview from "../components/home/SaleOverview";
import Services from "./../components/home/Services";

export default function Home() {
  return (
    <section className="width">
      <Services />
      <BestDeals />
      <CategoryCarousel />
      <FeaturedProduct />
      <SaleOverview />
    </section>
  );
}
