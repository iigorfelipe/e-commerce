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
                className={`bg-theme-gray-50 flex w-fit cursor-pointer items-center justify-center gap-2 rounded-lg p-2 ${
                  isSelected
                    ? "bg-theme-purple-brand text-white"
                    : "bg-theme-gray-50 text-theme-purple-brand"
                } `}
              >
                <span className="text-body-base-500 whitespace-nowrap">
                  {family}
                  <sup className="ml-0.5">®</sup>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
