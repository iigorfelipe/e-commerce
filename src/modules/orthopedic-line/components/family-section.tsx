import { FamiliesList } from "@/modules/orthopedic-line/components/families-list";
import { FamilyDetail } from "@/modules/orthopedic-line/components/family-detail";

export const FamiliesSection = () => (
  <section className="flex flex-col gap-2 py-6 lg:gap-[50px] lg:py-10">
    <span className="font-theme-raleway text-center text-lg font-medium md:text-xl lg:text-start lg:text-[32px]">
      Conheça as{" "}
      <span className="text-theme-purple font-bold">famílias exclusivas</span>
      <br /> da linha Ortopedic
    </span>

    <FamiliesList />

    <FamilyDetail />
  </section>
);
