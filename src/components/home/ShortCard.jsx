import { Card } from "../ui/card";
import { motion } from "framer-motion";
import { CardAnimationVariants } from "./../../motion";

export default function ShortCard({ data, title }) {
  return (
    <motion.div
      variants={CardAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-4"
    >
      <h4 className="font-semibold uppercase">{title}</h4>
      {data?.map((item, index) => (
        <Card
          key={item?._id}
          className="rounded-none flex items-center p-2 gap-5 hover:shadow-2xl trans"
        >
          <div className="h-20 w-20 shrink-0">
            <img
              className="w-full h-full object-contain"
              src={item?.images[0]}
              alt={`product-image-${index}`}
            />
          </div>
          <div>
            <h5 className="font-medium line-clamp-2 leading-2 text-xs">
              {item?.title}
            </h5>
            <p className="font-medium text-blue text-sm mt-1">
              {item?.price || "00"}TK
            </p>
          </div>
        </Card>
      ))}
    </motion.div>
  );
}
