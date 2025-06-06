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
      className="bg-theme-gray-dark mx-undo-container-px mt-[4.6875rem] flex flex-col px-2"
    >
      <FooterSectionsMobile />
      <div className="hidden flex-row pt-[3.1875rem] pb-8 md:flex">
        <span className="text-logo text-white md:px-11">LOGO</span>

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

      <div className="border-t-theme-gray-brand -mx-2 border-t" />

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
