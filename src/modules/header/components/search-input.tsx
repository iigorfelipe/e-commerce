import { searchHeaderInputValueAtom } from "@/store/search-input";
import { useAtom } from "jotai";
import { Search } from "lucide-react";

export const HeaderSearchInput = () => {
  const [inputValue, setInputValue] = useAtom(searchHeaderInputValueAtom);

  return (
    <div className="flex flex-col gap-2 lg:hidden">
      <div className="bg-theme-muted flex items-center gap-2 rounded-md p-2 py-1.5">
        <Search className="text-theme-gray-dark size-4" />

        <input
          type="text"
          placeholder="Buscar..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="text-theme-gray-dark placeholder:text-theme-gray-dark w-full bg-transparent px-1 text-sm opacity-100 focus:outline-none"
        />
      </div>
    </div>
  );
};
