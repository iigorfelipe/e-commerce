import { SearchInput } from "@/components/search-input";
import { Button } from "@/components/ui/button";
import { CarouselOfProducts } from "@/components/carousel-products";
import { OrthopedicLineDrawer } from "@/modules/orthopedic-line/components/drawer";
import { ProductList } from "@/modules/orthopedic-line/components/products-list";
import { Download } from "lucide-react";

export const ProductsSection = () => (
  <div className="flex w-full flex-col gap-[1.3125rem]">
    <div className="flex flex-col gap-2">
      <div className="flex0-row flex items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <div className="bg-theme-gray-50 text-body-sm-700 flex h-8 flex-row items-center rounded-lg p-2 sm:h-auto">
            86 produtos
          </div>
          <div className="lg:hidden">
            <OrthopedicLineDrawer />
          </div>
          <div className="hidden lg:flex">
            <SearchInput searchType="products" key="products" />
          </div>
        </div>

        <Button variant="theme" className="h-8 sm:h-auto">
          Baixar Catálogo
          <Download />
        </Button>
      </div>

      <div className="lg:hidden">
        <SearchInput searchType="products" key="products" fullWidth={true} />
      </div>
    </div>

    <div className="lg:hidden">
      <CarouselOfProducts />
    </div>
    <div className="hidden lg:block">
      <ProductList />
    </div>
  </div>
);
