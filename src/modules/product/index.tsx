import type { TProduct } from "@/common/types";
import { imagePath } from "@/common/utils/image-path";
import { ProductDetailCarousel } from "@/components/product-detail-carousel";
import { Button } from "@/components/ui/button";
import { Maximize2 } from "lucide-react";

type ProductDetailsProps = {
  productDetail: TProduct;
};

export const ProductDetails = ({ productDetail }: ProductDetailsProps) => {
  return (
    <div className="flex flex-col gap-8 sm:flex-row lg:pt-8">
      <ProductDetailCarousel images={productDetail.details.images} />

      <div className="flex w-full flex-col sm:max-w-1/2">
        <p className="text-theme-gray-dark text-body-base-500">
          {productDetail.details.productFamily}
          <sup className="ml-0.5 text-xs">®</sup>
        </p>
        <h1 className="bg-theme-purple-brand text-title-xl-700 mt-2 mb-4 rounded-md p-2 text-white">
          {productDetail.name}
        </h1>

        <span className="text-theme-gray-brand text-sm">
          Código SKU {productDetail.code} Lado direito / Código SKU{" "}
          {productDetail.code} Lado esquerdo
        </span>

        <p className="text-theme-black pt-6 pb-2">Descrição</p>
        <p className="text-theme-gray-dark">
          {productDetail.details.description}
        </p>

        <p className="pt-6 pb-2">
          Nível {productDetail.details.level.split("-")[0]}
        </p>
        <p>{productDetail.details.level.split("-")[1]}</p>

        <div className="border-theme-gray-60 my-6 border-t" />

        <section className="flex flex-col gap-4">
          <span className="flex flex-row items-center gap-2">
            Cores disponíveis:
            {productDetail.details.colors.map((color) => (
              <>
                <div className={`size-3.5 rounded-full bg-[${color.hex}]`} />
                {color.label}
              </>
            ))}
          </span>
          <span>Modelo: {productDetail.details.model}</span>
          <span className="flex flex-row items-center gap-2">
            Tamanhos disponíveis:
            {productDetail.details.sizes.map((size) => (
              <span className="bg-theme-gray-60 text-theme-gray-dark rounded-sm px-2">
                {size}
              </span>
            ))}
          </span>

          <div className="text-theme-orange-brand flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-1">
              <Maximize2 className="size-4 rotate-x-180" />
              <span>Descubra o seu tamanho ideal</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={imagePath("/icons/tape.svg")} alt="tape" />
              <span className="text-theme-gray-dark">Tabela de medidas</span>
            </div>
          </div>
        </section>
        <Button variant="theme" size="theme" className="mt-10 w-fit">
          Encontrar lojas online
        </Button>

        <span className="text-body-base-500 text-theme-gray-dark mt-4 cursor-pointer underline">
          Gostou desse produto? Seja um vendedor
        </span>
      </div>
    </div>
  );
};
