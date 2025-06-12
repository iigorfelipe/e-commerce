import { imagePath } from "@/common/utils/image-path";

import { useIsDesktop } from "@/hooks/use-is-desktop";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { memo } from "react";

export const ProductInfos = () => {
  const isDesktop = useIsDesktop();

  return (
    <>
      <Title />

      <div className="mt-8 flex lg:h-dvh lg:pt-[2.8125rem] lg:pr-[10.1875rem] lg:pl-[5.75rem]">
        {isDesktop ? <FamilyDetail /> : <MobileCarousel />}

        <div className="relative">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={imagePath("/images/product-detail-desktop.jpg")}
            />

            <img
              src={imagePath("/images/product-detail-mobile.jpg")}
              className="h-full w-full object-cover pb-[0.0625rem]"
              alt="Produto"
              loading="lazy"
            />
          </picture>

          <div className="absolute bottom-0 h-[9.5rem] w-full bg-gradient-to-t from-white to-transparent" />
        </div>

        {isDesktop && <AnvisaDetail />}
      </div>
    </>
  );
};

const Title = memo(() => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-title-lg-500 text-theme-gray-dark">
        Fabricação{" "}
        <span className="text-title-lg-700 text-theme-orange-brand">
          própria
        </span>{" "}
        e nacional. <br />
        <span className="text-title-lg-700 text-theme-orange-brand">
          Qualidade
        </span>{" "}
        garantida!
      </h2>

      <p className="text-body-base-500 text-theme-gray-brand">
        Antes de utilizar o produto, leia atentamente as precauções e Instruções
        de uso.
      </p>
    </div>
  );
});

const FamilyDetail = memo(() => {
  return (
    <div className="border-theme-orange-brand pr:pr-[2.125rem] flex h-fit flex-col gap-3 rounded-[0.625rem] border-1 border-dotted p-3.5 lg:w-[22.6875rem]">
      <h2 className="text-body-base-400 text-theme-purple-brand">
        Hidrolight Neo
        <sup className="ml-0.5 text-[0.6875rem]">®</sup>
      </h2>
      <span className="sm:text-body-base-400 text-xs">
        Família voltada para extrair os benefícios do Neoprene. Propriedades
        térmicas, compressivas e elásticas: são essas três propriedades que
        fazem do Neoprene uma ferramenta eficaz no tratamento e prevenção de
        lesões, no tratamento ortopédico
      </span>
    </div>
  );
});

const AnvisaDetail = memo(() => {
  return (
    <div className="border-theme-orange-brand flex h-fit max-w-[14.0625rem] flex-col gap-4 rounded-[0.625rem] border-1 border-dotted p-3.5 lg:px-6 lg:py-3">
      <img
        src={imagePath("/images/anvisa.jpg")}
        className="lg:max-w-[10.8125rem]"
      />
      <span className="text-body-sm-700">
        Autorização e Cadastro de produtos para saúde na ANVISA
      </span>
    </div>
  );
});

const MobileCarousel = () => {
  return (
    <div className="relative max-w-[55%]">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="max-w-[86%]">
            <FamilyDetail />
          </CarouselItem>
          <CarouselItem>
            <AnvisaDetail />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="pointer-events-none absolute top-0 right-0 h-full w-1 bg-gradient-to-l from-white/90 to-transparent" />
    </div>
  );
};
