import { Search } from "lucide-react";
import { useAtom } from "jotai";
import {
  searchHeaderInputValueAtom,
  searchProductsInputValueAtom,
  showSearchHeaderInputAtom,
  showSearchProductsInputAtom,
} from "@/store/search-input";
import { useEffect, useMemo, useRef } from "react";

type SearchInputProps = {
  searchType: "header" | "products";
  fullWidth?: boolean;
};

export const SearchInput = ({ searchType, fullWidth }: SearchInputProps) => {
  const [showHeaderInput, setShowHeaderInput] = useAtom(
    showSearchHeaderInputAtom,
  );
  const [headerInputValue, setHeaderInputValue] = useAtom(
    searchHeaderInputValueAtom,
  );

  const [showProductsInput, setShowProductsInput] = useAtom(
    showSearchProductsInputAtom,
  );
  const [inputProductsValue, setProductsInputValue] = useAtom(
    searchProductsInputValueAtom,
  );

  const input = useMemo(() => {
    const show = searchType === "header" ? showHeaderInput : showProductsInput;
    const setShow =
      searchType === "header" ? setShowHeaderInput : setShowProductsInput;
    const value =
      searchType === "header" ? headerInputValue : inputProductsValue;
    const setValue =
      searchType === "header" ? setHeaderInputValue : setProductsInputValue;
    const placeholder =
      searchType === "header" ? "Buscar..." : "Buscar produtos...";
    return {
      show,
      setShow,
      value,
      setValue,
      placeholder,
    };
  }, [
    headerInputValue,
    inputProductsValue,
    searchType,
    setHeaderInputValue,
    setProductsInputValue,
    setShowHeaderInput,
    setShowProductsInput,
    showHeaderInput,
    showProductsInput,
  ]);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fullWidth) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        if (input.value.trim() === "") {
          input.setShow(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [input, fullWidth]);

  return (
    <div
      ref={wrapperRef}
      className={`${input.show && "gap-2"} bg-theme-muted flex items-center rounded-full p-2.5 py-2 ${fullWidth && "w-full rounded-md"}`}
    >
      <button onClick={() => input.setShow(true)}>
        <Search className="text-theme-gray size-4" />
      </button>

      <input
        type="text"
        placeholder={input.placeholder}
        value={input.value}
        onChange={(e) => input.setValue(e.target.value)}
        className={`text-theme-gray placeholder:text-theme-gray bg-transparent text-sm transition-all duration-300 ease-in-out focus:outline-none ${
          fullWidth
            ? "w-full px-1 opacity-100"
            : input.show
              ? "w-32 px-1 opacity-100"
              : "w-0 px-0 opacity-0"
        }`}
      />
    </div>
  );
};
