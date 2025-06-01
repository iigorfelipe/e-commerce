import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { ProductCard } from "./product-card";
import { productsData } from "@/common/mocks/data";

export const CarouselOfProducts = () => {
  return (
    <Carousel>
      <CarouselContent className="-ml-1">
        {productsData.map((product, index) => {
          return (
            <CarouselItem
              key={product.id + index}
              className="max-w-fit items-center justify-center gap-4"
            >
              <ProductCard product={product} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
