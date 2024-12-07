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

export default function BestDeals() {
  const { data: products, isLoading } = useFetchData("/product", {
    discount: true,
    limit: 8,
  });

  useEffect(() => {
    console.log(products);
  }, [products]);

  return !isLoading ? (
    <section className="mt-14 padding-x">
      <div className="flex flex-wrap items-center justify-between my-5 text-gray-900">
        <h3 className="text-2xl font-medium">Best Deals</h3>
        <p className="flex gap-3 text-blue text-nowrap">
          <span>Browse all products</span>
          <img src={arrow} alt="arrow" />
        </p>
      </div>
      <div className="grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 ">
        {products?.data?.map((item, index) => (
          <Card key={item?._id} className="rounded-none trans hover:shadow-2xl">
            <CardContent>
              <div className="px-2 py-1 text-sm font-medium my-2 bg-yellow-300 inline-block">
                {item?.discount}% OFF
              </div>
              <div className="h-52">
                <img
                  className="h-full w-full object-contain"
                  src={item?.images[0]}
                  alt={`product-image-${index}`}
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
          </Card>
        ))}
      </div>
    </section>
  ) : null;
}
