import { Rating } from "@mui/material";
import { CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./../../motion";
import cart from "./../../assets/cart.svg";
import love from "./../../assets/love.svg";
import view from "./../../assets/view.svg";
import { Button } from "../ui/button";

export default function ProductShortCard({ item, index }) {
  return (
    <motion.Card
      key={item?._id}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      custom={index}
      className="rounded-none hover:shadow-2xl trans border group"
    >
      <CardContent className="pt-2 px-2 relative">
        <div className="absolute inset-0 group-hover:bg-black/40 trans flex items-center justify-center  space-x-4 md:space-x-8">
          <Button className="bg-orange-200 hover:bg-orange-300 rounded-full h-10 w-10 p-0 trans opacity-0 group-hover:opacity-100">
            <img src={love} alt="love" />
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 rounded-full h-10 w-10 p-0 trans opacity-0 group-hover:opacity-100">
            <img src={cart} alt="cart" />
          </Button>

          <Button className="bg-orange-200 hover:bg-orange-300 rounded-full h-10 w-10 p-0 trans opacity-0 group-hover:opacity-100">
            <img src={view} alt="view" />
          </Button>
        </div>
        <div className="md:h-36">
          <img
            className="h-full w-full object-contain"
            src={item?.images[0]}
            alt={`product-image-${index}`}
          />
        </div>
      </CardContent>
      <CardHeader className="pb-1 px-2 pt-3 md:pb-1 md:px-6">
        <div>
          <Rating
            name="read-only"
            size="small"
            value={item?.totalrating || 4}
            readOnly
          />
        </div>
        <CardTitle className="text-sm md:text-base leading-5 line-clamp-2 text-gray-900">
          {item?.title}
        </CardTitle>
      </CardHeader>

      <CardFooter className="pt-1 px-2 md:px-6 ">
        <p className="font-medium text-blue">
          {(((100 - item?.discount) / 100) * item?.price).toFixed(2) || "00"}
          TK
        </p>
      </CardFooter>
    </motion.Card>
  );
}
