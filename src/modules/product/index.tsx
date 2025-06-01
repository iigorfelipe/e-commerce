import type { TProduct } from "@/common/types";
import { ProductDetailCarousel } from "@/components/product-detail-carousel";

type ProductDetailsProps = {
  productDetail: TProduct;
};

export const ProductDetails = ({ productDetail }: ProductDetailsProps) => {
  return (
    <div className="flex flex-col gap-8 sm:flex-row lg:pt-8">
      <ProductDetailCarousel images={productDetail.details.images} />

      <div className="flex w-full flex-col sm:max-w-1/2">
        <p className="font-theme-raleway text-theme-gray-dark font-medium">
          {productDetail.details.productFamily}
        </p>
        <h1 className="font-theme-raleway bg-theme-purple mt-2 mb-4 rounded-md p-2 text-2xl font-bold text-white lg:text-5xl">
          {productDetail.name}
        </h1>

        <span className="text-theme-gray-brand text-sm">
          Código SKU {productDetail.code} Lado direito / Código SKU{" "}
          {productDetail.code} Lado esquerdo
        </span>

        <p className="font-theme-raleway text-theme-black pt-6 pb-2">
          Descrição
        </p>
        <p className="font-theme-raleway text-theme-gray-dark">
          {productDetail.details.description}
        </p>

        <p className="pt-6 pb-2">
          Nível {productDetail.details.level.split("-")[0]}
        </p>
        <p>{productDetail.details.level.split("-")[1]}</p>

        <div className="border-theme-gray-60 my-6 border-t" />
      </div>
    </div>
  );
};
