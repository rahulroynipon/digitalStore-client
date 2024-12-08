import { Rating } from "@mui/material";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import useFetchData from "./../../hook/useFetchData";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./../../motion";
import image from "./../../assets/image.svg";
import arrow from "./../../assets/arrowWhite.svg";
import arrowOrange from "./../../assets/arrowOrange.svg";
import cart from "./../../assets/cart.svg";
import love from "./../../assets/love.svg";
import view from "./../../assets/view.svg";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

export default function FeaturedProduct() {
  const { data: products, isLoading } = useFetchData("/product", {
    sort: "-rating",
    limit: 8,
  });

  return !isLoading ? (
    <section className="mt-20 padding-x">
      <div className=" my-12">
        <h3 className="text-3xl font-bold text-center">Featured Products</h3>
      </div>
      <div className="grid  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        <div className=" md:col-span-3 lg:col-span-1 lg:row-span-2 border bg-warning flex  lg:flex-col  justify-between">
          <div className="p-5 text-center flex flex-col gap-5 mt-12 w-full">
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
        </div>
        {products?.data?.map((item, index) => (
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
              <div className="absolute inset-0 group-hover:bg-black/40 trans flex items-center justify-center gap-10">
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
              <div className="h-36">
                <img
                  className="h-full w-full object-contain"
                  src={item?.images[0]}
                  alt={`product-image-${index}`}
                />
              </div>
            </CardContent>
            <CardHeader className="pb-2">
              <div>
                <Rating
                  name="read-only"
                  size="small"
                  value={products?.data[0]?.totalrating || 4}
                  readOnly
                />
              </div>
              <CardTitle className="text-md leading-5 line-clamp-2 text-gray-900">
                {item?.title}
              </CardTitle>
            </CardHeader>

            <CardFooter>
              <p className="font-medium text-blue">
                {(((100 - item?.discount) / 100) * item?.price).toFixed(2) ||
                  "00"}
                TK
              </p>
            </CardFooter>
          </motion.Card>
        ))}
      </div>
    </section>
  ) : null;
}
