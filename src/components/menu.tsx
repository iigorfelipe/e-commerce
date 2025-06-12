import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Logo } from "./logo";
import { ChevronDown, Download, Menu } from "lucide-react";
import { FAMILIES, HEADER_TEXTS } from "@/common/constants";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { imagePath } from "@/common/utils/image-path";
import { Divider } from "./divider";
import {
  SectionContatos,
  SectionInsitucional,
  SectionSocial,
} from "@/modules/footer/components/sections";

export const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="text-body-base-500 overflow-auto font-semibold"
      >
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <Divider />
        <div>
          {HEADER_TEXTS.map((text) =>
            text.toLowerCase() === "catálogos" ? (
              <Catalogs label={text} />
            ) : (
              <Link
                key={text}
                to="#"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {text}
              </Link>
            ),
          )}
        </div>
        <Button variant="theme" size="theme" className="rounded-none">
          Fale conosco
        </Button>
        <Countrys />
        <SheetFooter className="bg-theme-gray-dark mt-auto flex flex-col gap-8 px-4 py-8">
          <SectionContatos />
          <SectionSocial />
          <div className="flex justify-between">
            <SectionInsitucional />
            <span className="text-logo flex items-center text-white md:px-11">
              LOGO
            </span>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

const countrys = [
  { label: "Português", pathIcon: "icons/flag-br.svg" },
  {
    label: "Inglês",
    pathIcon: "icons/flag-us.svg",
  },
  {
    label: "Espanhol",
    pathIcon: "icons/flag-es.svg",
  },
];

const Countrys = () => {
  // TODO: criar jotai de país selecionado
  return (
    <details className="group">
      <summary className="flex w-full cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-100">
        <span> Selecionar idioma</span>
        <div className="flex items-center gap-1">
          <img
            src={imagePath("icons/flag-br.svg")}
            alt="bandeira do brasil"
            className="size-5"
          />

          <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
        </div>
      </summary>
      <div className="pl-4 font-medium">
        {countrys.map(({ label, pathIcon }) => (
          <div
            key={label}
            className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <span>{label}</span>

            <img
              src={imagePath(pathIcon)}
              alt="bandeira do brasil"
              className="size-5"
            />
          </div>
        ))}
      </div>
    </details>
  );
};

const Catalogs = ({ label }: { label: string }) => {
  return (
    <details key={label} className="group">
      <summary className="flex w-full cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-100">
        <span>{label}</span>

        <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
      </summary>
      <div className="pl-4 font-medium">
        {FAMILIES.map((family) => (
          <div
            key={family}
            className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <span>{family}</span>

            <Download className="text-theme-orange-brand size-4" />
          </div>
        ))}
      </div>
    </details>
  );
};
