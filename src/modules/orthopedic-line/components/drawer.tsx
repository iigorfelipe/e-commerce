import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ListFilter } from "lucide-react";
import { SelectFamily, SelectProduct } from "./select";

export const OrthopedicLineDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <ListFilter className="text-theme-black" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filtros</DrawerTitle>
        </DrawerHeader>

        <div className="rounded-lg">
          <Button
            variant="ghost"
            className="bg-theme-muted flex h-[84px] w-full rounded-none py-8 pl-4"
          >
            <span className="text-theme-black mr-auto">Lançamento</span>
          </Button>
          <SelectFamily />
          <SelectProduct />
        </div>

        <DrawerFooter>
          <Button variant="theme">Aplicar filtros</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
