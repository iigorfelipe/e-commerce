import { Button } from "@/components/ui/button";
import { SelectFamily, SelectProduct } from "./select";

export const FiltersSection = () => (
  <div className="hidden rounded-lg lg:block">
    <div className="text-theme-black flex h-[84px] w-[306px] items-center rounded-t-lg border-x-1 border-t-1 bg-white py-8 pl-4">
      Filtros
    </div>
    <Button
      variant="ghost"
      className="bg-theme-muted flex h-[84px] w-full rounded-none border-t py-8 pl-4"
    >
      <span className="text-theme-black mr-auto">Lançamento</span>
    </Button>
    <SelectFamily />
    <SelectProduct />
  </div>
);
