import { motion } from "framer-motion";
import useFetchData from "./../../hook/useFetchData";
import ShortCard from "./ShortCard";
import { BottomInAnimationVariants } from "./../../motion";

export default function SaleOverview() {
  const { data: topRated } = useFetchData("/product", {
    sort: "-rating",
    limit: 3,
  });

  const { data: saleProducts } = useFetchData("/product", {
    sort: "-sold",
    limit: 3,
  });

  const { data: discountProducts } = useFetchData("/product", {
    discount: true,
    limit: 3,
  });

  const { data: newArrival } = useFetchData("/product", {
    limit: 3,
  });

  return (
    <motion.section
      variants={BottomInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      className="mt-16 padding-x grid md:grid-cols-2 lg:grid-cols-4 gap-7"
    >
      {[
        { title: "TOP RATED", data: topRated?.data },
        { title: "BEST SELLERS", data: saleProducts?.data },
        { title: "BEST PRICE", data: discountProducts?.data },
        { title: "NEW ARRIVAL", data: newArrival?.data },
      ].map(({ title, data }, index) => (
        <div key={index}>
          <ShortCard title={title} data={data || []} />
        </div>
      ))}
    </motion.section>
  );
}
