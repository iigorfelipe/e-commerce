import { Divider } from "@/components/divider";
import { HeaderSearchInput } from "./search-input";
import { Breadcrumb } from "@/components/breadcrumb";

export const HeaderExtension = () => {
  return (
    <div className="flex flex-col gap-2 lg:hidden">
      <Divider />
      <HeaderSearchInput />
      <Breadcrumb />
    </div>
  );
};
