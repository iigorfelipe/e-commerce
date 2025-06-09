import { FamiliesList } from "@/modules/orthopedic-line/components/families-list";
import { FamilyDetail } from "@/modules/orthopedic-line/components/family-detail";

export const FamiliesSection = () => (
  <section className="flex flex-col gap-2 py-6 lg:gap-[3.125rem] lg:py-10">
    <span className="text-title-sm-500 sm:text-title-lg-500 text-center lg:text-start">
      Conheça as{" "}
      <span className="text-theme-purple-brand text-title-sm-700 sm:text-title-lg-700">
        famílias exclusivas
      </span>
      <br /> da linha Ortopedic
    </span>

    <FamiliesList />

    <FamilyDetail />
  </section>
);
