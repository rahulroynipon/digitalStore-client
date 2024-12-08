import { useEffect } from "react";
import useFetchData from "./../../hook/useFetchData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import arrow from "./../../assets/arrow.svg";
import cart from "./../../assets/cart.svg";
import love from "./../../assets/love.svg";
import view from "./../../assets/view.svg";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./../../motion";
import { Button } from "../ui/button";
import Rating from "@mui/material/Rating";

export default function BestDeals() {
  const { data: products, isLoading } = useFetchData("/product", {
    discount: true,
    limit: 7,
  });

  return !isLoading ? (
    <section className="mt-14 padding-x">
      <div className="flex flex-wrap items-center justify-between my-5 text-gray-900">
        <h3 className="text-2xl font-medium">Best Deals</h3>
        <p className="flex gap-3 text-blue text-nowrap">
          <span>Browse all products</span>
          <img src={arrow} alt="arrow" />
        </p>
      </div>
      <div className="grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        <Card className="row-span-2 rounded-none trans hover:shadow-2xl">
          <CardContent className="pb-0">
            <div className="px-2 py-1 text-sm font-medium my-2 bg-yellow-300 inline-block">
              {products?.data[0]?.discount || "00"}% OFF
            </div>
            <div className="">
              <img
                className="h-full w-full object-contain"
                src={products?.data[0]?.images[0]}
                alt={`product-image-0`}
              />
            </div>
          </CardContent>

          <CardHeader className="pb-2">
            <div className="mb-4">
              <Rating
                name="read-only"
                value={products?.data[0]?.totalrating || 4}
                readOnly
              />
            </div>
            <CardTitle className="text-md leading-6 line-clamp-2 text-gray-900 font-medium flex flex-col gap-5">
              {products?.data[0]?.title}
            </CardTitle>
          </CardHeader>

          <CardFooter className="pt-1 flex flex-col items-start gap-2">
            <div className="flex gap-3 mt-4">
              <p className="font-medium text-gray-600 line-through text-lg">
                {products?.data[0]?.price || "00"}TK
              </p>
              <p className="font-medium text-blue text-lg">
                {(
                  ((100 - products?.data[0]?.discount) / 100) *
                  products?.data[0]?.price
                ).toFixed(2) || "00"}
                TK
              </p>
            </div>

            <div className=" mt-5 w-full flex items-center gap-2 justify-center">
              <Button className="bg-orange-200 hover:bg-orange-300 rounded-none trans w-16">
                <img src={love} alt="love" />
              </Button>
              <Button className="uppercase bg-orange-500  rounded-none hover:bg-orange-600 trans w-full">
                <img src={cart} alt="cart" />
                Add to cart
              </Button>
              <Button className="bg-orange-200 hover:bg-orange-300 rounded-none trans w-16">
                <img src={view} alt="view" />
              </Button>
            </div>
          </CardFooter>
        </Card>

        {products?.data?.slice(1)?.map((item, index) => (
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
            className="rounded-none border trans hover:shadow-2xl group"
          >
            <CardContent className="relative">
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
              <div className="px-2 py-1 text-sm font-medium my-2 bg-yellow-300 inline-block">
                {item?.discount || "00"}% OFF
              </div>
              <div className="h-36">
                <img
                  className="h-full w-full object-contain"
                  src={item?.images[0]}
                  alt={`product-image-${index + 1}`}
                />
              </div>
            </CardContent>
            <CardHeader className="pb-2">
              <CardTitle className="text-md leading-5 line-clamp-2 text-gray-900 font-medium">
                {item?.title}
              </CardTitle>
            </CardHeader>

            <CardFooter className="pt-1 flex gap-2">
              <p className="font-medium text-gray-600 line-through">
                {item?.price || "00"}TK
              </p>
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
