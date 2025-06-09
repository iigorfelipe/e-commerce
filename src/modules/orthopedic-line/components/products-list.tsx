import { PaginationControlled } from "./pagination";
import { ProductCard } from "@/components/product-card";
import { productsData } from "@/common/mocks/data";
import { usePageParam } from "@/hooks/use-page-param";
import { useMemo } from "react";

const ITEMS_PER_PAGE = 9;

export const ProductList = () => {
  const { page, setPage } = usePageParam();
  const totalPages = Math.ceil(productsData.length / ITEMS_PER_PAGE);

  const currentItems = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = page * ITEMS_PER_PAGE;
    return productsData.slice(start, end);
  }, [page]);

  return (
    <div className="hidden flex-col gap-[4.5rem] lg:flex">
      <div className="hidden w-full grid-cols-3 gap-[1.875rem] sm:grid">
        {currentItems.map((product) => (
          <ProductCard key={product.id} product={product} page={page} />
        ))}
      </div>

      <PaginationControlled
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};
