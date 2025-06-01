import { FAMILIES } from "@/common/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { selectedFamilyAtom } from "@/store/families";
import { useAtom } from "jotai";

export const CarouselOfFamilies = () => {
  const [selectedFamily, setSelectedFamily] = useAtom(selectedFamilyAtom);

  return (
    <Carousel>
      <CarouselContent className="-ml-1">
        {FAMILIES.map((family, index) => {
          const isSelected = selectedFamily === family;
          return (
            <CarouselItem
              key={family + index}
              className="max-w-fit items-center justify-center gap-4"
              onClick={() => setSelectedFamily(family)}
            >
              <div
                className={`bg-theme-muted flex w-fit cursor-pointer items-center justify-center gap-2 rounded-lg p-2 ${
                  isSelected
                    ? "bg-theme-purple text-white"
                    : "bg-theme-muted text-theme-purple"
                } `}
              >
                <span className="font-theme-raleway 0.5xl:text-xs font-medium whitespace-nowrap md:text-sm lg:text-base">
                  {family}
                  <sup className="ml-0.5 text-xs">®</sup>
                </span>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
