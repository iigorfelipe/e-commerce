import { imagePath } from "@/common/utils/image-path";
import { Breadcrumb } from "@/components/breadcrumb";

export const BgImage = () => {
  return (
    <div
      className="0.5xl:-mx-[86px] relative -mx-2 h-[400px] bg-cover bg-center md:h-[517px] lg:h-[617px] lg:bg-[center_37%] xl:h-[717px]"
      style={{ backgroundImage: `url(${imagePath("images/home-bg.jpg")})` }}
    >
      <Gradient />

      <div className="0.5xl:pl-[86px] relative z-10 flex h-full flex-col pt-4 md:pt-8 lg:pl-10 2xl:pl-22">
        <div className="hidden lg:block">
          <Breadcrumb />
        </div>

        <div className="flex h-full flex-col items-center justify-between pb-4 lg:my-auto lg:h-fit lg:items-start lg:gap-9">
          <img
            src={imagePath("icons/orthopedic-logo.svg")}
            alt="logo da linha orthopedic"
            className="w-3xs sm:w-96 md:w-1/2 lg:w-[492px]"
          />

          <ul className="lg:max-w-1.5xl px-4 md:max-w-[660px] lg:list-disc lg:pr-0 lg:pl-10">
            <li className="font-theme-raleway text-theme-black text-center text-sm font-medium sm:text-lg lg:text-start lg:text-2xl">
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
    <div className="via-theme-purple/20 absolute inset-0 hidden bg-gradient-to-r from-white/90 to-transparent lg:block" />
    <div className="absolute inset-0 block bg-gradient-to-b from-white/90 via-transparent to-transparent lg:hidden" />
    <div className="absolute inset-0 block bg-gradient-to-t from-white/90 via-transparent to-transparent lg:hidden" />
  </>
);
