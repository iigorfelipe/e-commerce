import type { TProduct } from "@/common/types";

export const ProductTitle = (productDetail: TProduct) => {
  return (
    <div className="flex flex-col">
      <span className="text-theme-gray-dark text-body-base-500">
        {productDetail.details.productFamily}
        <sup className="ml-0.5 text-xs">®</sup>
      </span>
      <h1 className="bg-theme-purple-brand text-title-base-700 sm:text-title-xl-700 mt-4 mb-2 rounded-md p-2 text-white">
        {productDetail.name}
      </h1>

      <span className="text-theme-gray-brand text-sm">
        Código SKU {productDetail.code} Lado direito / Código SKU{" "}
        {productDetail.code} Lado esquerdo
      </span>
    </div>
  );
};
