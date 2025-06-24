import { imagePath } from "@/common/utils/image-path";
import { Breadcrumb } from "@/components/breadcrumb";

export const BgImage = () => {
  return (
    <div className="bg-home mx-undo-container-px relative h-[calc(100dvh-5rem)]">
      <Gradient />

      <div className="px-container-px relative z-10 flex h-full flex-col py-8">
        <div className="hidden lg:block">
          <Breadcrumb />
        </div>

        <div className="flex h-full flex-col items-center justify-between lg:h-fit lg:items-start lg:gap-[2.375rem] lg:pt-40">
          <figure className="3xl:w-1/2">
            <img
              src={imagePath("icons/orthopedic-logo.svg")}
              alt="logo da linha orthopedic"
              className="h-full w-full"
            />
          </figure>

          <ul className="sm:text-title-base-500 text-theme-black max-w-[39.25rem] text-center font-medium sm:pl-8 md:text-start lg:list-disc">
            <li>
              Produtos desenvolvidos para auxiliar na prevenção e retorno das
              atividades, no tratamento e recuperação de pacientes com lesões
              ortopédicas.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Gradient = () => (
  <>
    <div className="via-theme-purple-brand/20 3xl:bg-[length:150%_100%] absolute inset-0 hidden bg-gradient-to-r from-white/90 to-transparent bg-no-repeat lg:block lg:bg-[length:100%_100%]" />
    <div className="absolute inset-0 block bg-gradient-to-b from-white/90 via-transparent to-transparent lg:hidden" />
    <div className="absolute inset-0 block bg-gradient-to-t from-white/90 via-transparent to-transparent lg:hidden" />
  </>
);
