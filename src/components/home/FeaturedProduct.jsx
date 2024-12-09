import useFetchData from "./../../hook/useFetchData";
import { motion } from "framer-motion";
import { LeftInAnimationVariants } from "./../../motion";
import image from "./../../assets/image.svg";
import arrow from "./../../assets/arrowWhite.svg";
import { Button } from "../ui/button";
import ProductShortCard from "./ProductShortCard";
import arrowBlue from "./../../assets/arrow.svg";

export default function FeaturedProduct() {
  const { data: products, isLoading } = useFetchData("/product", {
    sort: "-rating",
    limit: 8,
  });

  return !isLoading ? (
    <section className="mt-20 padding-x">
      <div className="flex flex-wrap items-center justify-between my-5 text-gray-900">
        <h3 className="text-2xl font-medium">Featured Products</h3>
        <p className="flex gap-3 text-blue text-nowrap">
          <span>Browse all products</span>
          <img src={arrowBlue} alt="arrow" />
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-3">
        <motion.div
          variants={LeftInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className=" col-span-2 md:col-span-3 lg:col-span-1 lg:row-span-2 border bg-warning flex  lg:flex-col  justify-between"
        >
          <div className="p-5 text-center flex flex-col gap-5 lg:mt-12 w-full">
            <p>
              <p className="text-orange-600 font-semibold">
                COMPUTER & ACCESSORIES
              </p>
              <p className="text-2xl font-semibold">Discount</p>
              <p>For all ellectronics products</p>
            </p>

            <Button className="uppercase bg-orange-500 hover:bg-orange-600 trans rounded-none self-center">
              Shop now
              <img src={arrow} alt="arrow" />
            </Button>
          </div>
          <div className=" w-full hidden lg:block">
            <img className="w-full  h-full " src={image} alt="image" />
          </div>
        </motion.div>
        {products?.data?.map((item, index) => (
          <ProductShortCard item={item} index={index} />
        ))}
      </div>
    </section>
  ) : null;
}
