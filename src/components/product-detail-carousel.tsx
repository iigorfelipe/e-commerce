import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ZoomIn } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const ProductDetailCarousel = ({ images }: { images: string[] }) => {
  const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4 lg:w-[42.75rem]">
      <div className="relative">
        <img
          src={selectedImg}
          alt="detalhes do produto"
          className="h-[18.75rem] w-full rounded-md bg-center object-cover sm:h-[25rem] lg:h-[32.6875rem]"
        />
        <Button
          variant="ghost"
          className="hover:bg-[absolute absolute right-4 bottom-4 rounded-sm bg-[#12121266] text-white hover:bg-[#121212]/70 hover:text-white"
        >
          <ZoomIn className="size-6" />
        </Button>
      </div>

      <div className="px-0 sm:px-12">
        <Carousel className="w-full">
          <CarouselContent className="flex gap-2">
            {images.map((img, index) => {
              const isSelected = selectedImg === img;
              return (
                <CarouselItem
                  key={img + index}
                  className="max-w-fit items-center justify-center gap-4"
                  onClick={() => setSelectedImg(img)}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className={`h-[7rem] w-[7rem] rounded-md transition-opacity duration-200 ${
                      isSelected
                        ? "border-b-theme-orange-brand border-b-2 opacity-100"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious className="hidden cursor-pointer border-none sm:flex" />
          <CarouselNext className="hidden cursor-pointer border-none sm:flex" />
        </Carousel>
      </div>
    </div>
  );
};
