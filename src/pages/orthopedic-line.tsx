import { Divider } from "@/components/divider";

import { BgImage } from "@/modules/orthopedic-line/components/bg-image";
import { FamiliesSection } from "@/modules/orthopedic-line/components/family-section";
import { FiltersSection } from "@/modules/orthopedic-line/components/filter-section";
import { ProductsSection } from "@/modules/orthopedic-line/components/product-section";

export const OrthopedicLine = () => {
  return (
    <>
      <BgImage />
      <FamiliesSection />
      <Divider />

      <div className="mt-6 flex flex-row gap-6 lg:mt-16">
        <FiltersSection />

        <ProductsSection />
      </div>
    </>
  );
};
