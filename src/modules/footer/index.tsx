import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  SectionCatalogos,
  SectionContatos,
  SectionInsitucional,
  SectionLinhas,
  SectionSocial,
} from "./components/sections";
import { FooterSectionsMobile } from "./components/mobile";
import { imagePath } from "@/common/utils/image-path";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-theme-gray-dark 0.5xl:-mx-[86px] 0.5xl:px-[86px] -mx-2 mt-[72px] flex flex-col px-2"
    >
      <FooterSectionsMobile />
      <div className="hidden flex-row pt-[51px] pb-8 md:flex">
        <span className="font-theme-raleway text-3xl font-medium text-white md:px-11">
          LOGO
        </span>

        <div className="ml-auto flex flex-row gap-11">
          <SectionInsitucional />
          <SectionCatalogos />
          <SectionLinhas />

          <div className="flex flex-col gap-6">
            <SectionContatos />
            <SectionSocial />
          </div>
        </div>
      </div>

      <div className="border-t-theme-gray-brand 0.5xl:-mx-[86px] -mx-2 border-t" />

      <div className="flex flex-col items-center justify-between gap-2 pt-[18px] pb-8 sm:flex-row sm:items-start">
        <Button variant="ghost" className="text-white">
          Selecionar País
          <img
            src={imagePath("icons/flag-br.svg")}
            alt="bandeira do brasil"
            className="size-5"
          />
          <ChevronDown className="size-4" />
        </Button>

        <span
          className="text-theme-gray-60 text-center text-sm sm:text-end"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          © 2023 Lorem Ipsum. Todos os direitos reservados. <br />
          Av dos Butiá, 150 - Florianopolis - SC - Brasil
        </span>
      </div>
    </footer>
  );
};
