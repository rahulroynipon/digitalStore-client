import Header from "../components/global/Header";
import BestDeals from "../components/home/BestDeals";
import { CategoryCarousel } from "../components/home/CategoryCarousel";
import FeaturedProduct from "../components/home/FeaturedProduct";
import SaleOverview from "../components/home/SaleOverview";
import Services from "./../components/home/Services";
import laptop from "./../assets/laptop.svg";

export default function Home() {
  return (
    <section className="width">
      <Services />
      <BestDeals />
      <CategoryCarousel />
      <FeaturedProduct />
      <section className="bg-orange-100 mt-16 flex items-center justify-between">
        <div className="px-5 md:px-12">
          <strong className="text-3xl">Macbook Pro</strong>
          <p>Apple M4 Max Chip. 32GB Unified Memory, 1TB SSD Storage</p>
        </div>
        <div>
          <img src={laptop} alt="Laptop" />
        </div>
      </section>
      <SaleOverview />
    </section>
  );
}
