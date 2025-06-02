import { ChevronDown } from "lucide-react";
import { SideBar } from "@/components/menu";
import { Logo } from "@/components/logo";
import { HeaderExtension } from "./components/header-extension";
import { HEADER_TEXTS } from "@/common/constants";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/search-input";
import { imagePath } from "@/common/utils/image-path";

export const Header = () => {
  const scrollToFooter = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-2 py-2 lg:py-0">
      <div className="0.5xl:px-[86px] flex flex-row items-center gap-4 py-1.5 lg:my-4 lg:px-10">
        <div className="lg:hidden">
          <SideBar />
        </div>
        <Logo />

        <div className="mx-auto hidden flex-row items-center gap-6 lg:flex">
          {HEADER_TEXTS.map((text) => (
            <Link
              key={text}
              className="font-theme-raleway font-medium hover:underline"
              to="#"
              onClick={scrollToFooter}
            >
              {text}
            </Link>
          ))}

          <SearchInput searchType="header" key="header" />
        </div>

        <div className="ml-auto flex flex-row items-center gap-2 lg:ml-0">
          <Button
            variant="theme"
            className="hidden sm:flex"
            onClick={scrollToFooter}
          >
            Fale conosco
          </Button>

          <button className="group hover:bg-theme-orange/5 flex cursor-pointer flex-row items-center gap-2 rounded-lg px-2 py-1.5">
            <img
              src={imagePath("icons/flag-br.svg")}
              alt="bandeira do brasil"
              className="size-5"
            />

            <ChevronDown className="group-hover:text-theme-orange size-4" />
          </button>
        </div>
      </div>

      <HeaderExtension />
    </div>
  );
};
