import { Button } from "@/components/ui/button";
import { SelectFamily, SelectProduct } from "./select";

export const FiltersSection = () => (
  <div className="hidden rounded-lg lg:block">
    <div className="text-theme-black flex h-[5.25rem] w-[19.125rem] items-center rounded-t-lg border-x-1 border-t-1 bg-white py-8 pl-4">
      Filtros
    </div>
    <Button
      variant="ghost"
      className="bg-theme-gray-50 flex h-[5.25rem] w-full rounded-none border-t py-8 pl-4"
    >
      <span className="text-theme-black mr-auto">Lançamento</span>
    </Button>
    <SelectFamily />
    <SelectProduct />
  </div>
);
