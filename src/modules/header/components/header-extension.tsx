import { HeaderSearchInput } from "./search-input";
import { Breadcrumb } from "@/components/breadcrumb";

export const HeaderExtension = () => {
  return (
    <div className="flex flex-col gap-2 py-2">
      <Breadcrumb />
      <HeaderSearchInput />
    </div>
  );
};
