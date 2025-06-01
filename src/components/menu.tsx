import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";
import { Download, Menu } from "lucide-react";
import { FAMILIES, HEADER_TEXTS } from "@/common/constants";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <button className="font-theme-raleway hover:bg-theme-orange/90 bg-theme-orange flex w-full cursor-pointer px-4 py-2 text-center text-white">
          Fale conosco
        </button>

        <div>
          {HEADER_TEXTS.map((text) =>
            text.toLowerCase() === "catálogos" ? (
              <Catalogs label={text} />
            ) : (
              <Link
                key={text}
                to="#"
                className="font-theme-raleway block px-4 py-2 text-sm font-semibold hover:bg-gray-100"
              >
                {text}
              </Link>
            ),
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

const Catalogs = ({ label }: { label: string }) => {
  return (
    <details key={label} className="group">
      <summary className="font-theme-raleway flex w-full cursor-pointer items-center justify-between px-4 py-2 text-sm font-semibold hover:bg-gray-100">
        <span>{label}</span>
        <span className="transition-transform group-open:rotate-180">&or;</span>
      </summary>
      <div className="pl-4">
        {FAMILIES.map((family) => (
          <div
            key={family}
            className="font-theme-raleway flex items-center justify-between gap-2 px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            <span>{family}</span>

            <Download className="text-theme-orange size-4" />
          </div>
        ))}
      </div>
    </details>
  );
};
