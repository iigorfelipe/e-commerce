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
  return (
    <>
      <MainHeader />
      <HeaderExtension />
    </>
  );
};

export const MainHeader = () => {
  const scrollToFooter = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mx-undo-container-px lg:px-header-px border-b px-3.5 py-2 lg:border-b-0 lg:py-4">
      <div className="flex flex-row items-center gap-4 py-1.5 lg:pl-[2.995rem]">
        <div className="lg:hidden">
          <SideBar />
        </div>
        <Logo />
        <div className="mx-auto hidden flex-row items-center gap-6 lg:flex">
          {HEADER_TEXTS.map((text) => (
            <Link
              key={text}
              className="text-body-base-500 hover:underline"
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
            size="theme"
            className="sm:text-body-base-500 hidden sm:flex"
            onClick={scrollToFooter}
          >
            Fale conosco
          </Button>

          <button className="group hover:bg-theme-orange-brand/5 flex cursor-pointer flex-row items-center gap-2 rounded-lg px-2 py-1.5">
            <img
              src={imagePath("icons/flag-br.svg")}
              alt="bandeira do brasil"
              className="size-5"
            />

            <ChevronDown className="group-hover:text-theme-orange-brand size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
