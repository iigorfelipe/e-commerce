import type { TProduct } from "@/common/types";
import { ProductDetailCarousel } from "@/components/product-detail-carousel";
import { Button } from "@/components/ui/button";
import { Description } from "./components/description";
import { ColorsAndSizesAvailable } from "./components/colors-and-sizes-available";
import { ProductTitle } from "./components/title";

import { CarouselOfProducts } from "@/components/carousel-products";
import { TechnicalDetails } from "./components/technical-details";
import { ProductDetailImage } from "./components/product-infos";

type ProductDetailsProps = {
  productDetail: TProduct;
};

export const ProductDetails = ({ productDetail }: ProductDetailsProps) => {
  return (
    <div className="flex flex-col pt-8">
      <div className="flex flex-col gap-8 sm:flex-row">
        <ProductDetailCarousel images={productDetail.details.images} />

        <div className="flex w-full flex-col gap-6 md:max-w-1/2">
          <ProductTitle {...productDetail} />

          <Description description={productDetail.details.description} />

          <div className="text-body-base-400 flex flex-col gap-2">
            <p className="text-theme-black">
              Nível {productDetail.details.level.split("-")[0]}
            </p>
            <p>{productDetail.details.level.split("-")[1]}</p>
          </div>

          <div className="border-theme-gray-60 border-t" />

          <ColorsAndSizesAvailable details={productDetail.details} />

          <Button variant="theme" size="theme" className="mt-4 w-fit">
            Encontrar lojas online
          </Button>

          <span className="text-body-base-500 text-theme-gray-dark -mt-2 cursor-pointer underline">
            Gostou desse produto? Seja um vendedor
          </span>
        </div>
      </div>

      <iframe
        className="mt-12 mb-10 aspect-video w-full lg:h-dvh"
        src="https://www.youtube.com/embed/_Nzt8-mTlSA"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <ProductDetailImage />
      <TechnicalDetails />

      <div className="flex flex-col gap-8 pt-20">
        <h2 className="text-title-lg-500">
          Conheça também <br /> nossos outros produtos
        </h2>

        <CarouselOfProducts />
      </div>
    </div>
  );
};
