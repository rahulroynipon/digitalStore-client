import BestDeals from "../components/home/BestDeals";
import { CategoryCarousel } from "../components/home/CategoryCarousel";
import Services from "./../components/home/Services";

export default function Home() {
  return (
    <>
      <Services />
      <BestDeals />
      <CategoryCarousel />
    </>
  );
}
