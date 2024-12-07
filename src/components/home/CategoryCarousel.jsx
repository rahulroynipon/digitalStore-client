import * as React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useSelector } from "react-redux";

export function CategoryCarousel() {
  const { isLoading, categories } = useSelector((state) => state.category);

  return !isLoading ? (
    <section className="mt-24 padding-x">
      <h4 className="text-gray-900 text-xl md:text-2xl lg:text-3xl text-center mb-10">
        <strong>Shop with Categories</strong>
      </h4>
      <Carousel className="relative">
        <CarouselContent className="flex flex-nowrap gap-2 sm:gap-4 -ml-1">
          {categories?.map((item, index) => (
            <CarouselItem
              key={item?._id}
              className="pl-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/5"
            >
              <div className="p-2">
                <Card>
                  <CardContent
                    className="flex flex-col items-center justify-center p-3 
                  rounded hover:ring-1 hover:shadow trans"
                  >
                    <div className="h-44">
                      <img
                        className="h-full w-full object-contain max-w-full"
                        src={item?.image}
                        alt={`Category-${index}`}
                      />
                    </div>
                    <p className="text-gray-900 text-center whitespace-normal mt-1 font-medium">
                      {item?.name}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2  lg:-translate-x-4 lg:h-12 lg:w-12 bg-orange-500 hover:bg-orange-400 text-white" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 lg:translate-x-4 lg:h-12 lg:w-12 bg-orange-500 hover:bg-orange-400 text-white" />
      </Carousel>
    </section>
  ) : null;
}
