import { FAMILIES } from "@/common/constants";
import { CarouselOfFamilies } from "@/components/carousel-families";
import { selectedFamilyAtom } from "@/store/families";
import { useAtom } from "jotai";

export const FamiliesList = () => {
  const [selectedFamily, setSelectedFamily] = useAtom(selectedFamilyAtom);

  return (
    <>
      <div className="py-4 lg:hidden">
        <CarouselOfFamilies />
      </div>

      <div className="hidden flex-row gap-4 lg:flex">
        {FAMILIES.map((family) => {
          const isSelected = selectedFamily === family;
          return (
            <div
              key={family}
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
            </div>
          );
        })}
      </div>
    </>
  );
};
