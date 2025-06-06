import { imagePath } from "@/common/utils/image-path";
import { Breadcrumb } from "@/components/breadcrumb";

export const LOGO_WIDTH = `clamp(120px, 36vw, 560px)`;
export const LOGO_HEIGHT = `clamp(18px, 5.125vw, 80px)`;

export const BgImage = () => {
  return (
    <div
      className="mx-undo-container-px relative h-[calc(100dvh-5rem)] bg-cover bg-center lg:bg-[center_37%]"
      style={{ backgroundImage: `url(${imagePath("images/home-bg.jpg")})` }}
    >
      <Gradient />

      <div className="px-container-px relative z-10 flex h-full flex-col py-8">
        <div className="hidden lg:block">
          <Breadcrumb />
        </div>

        <div className="flex h-full flex-col items-center justify-between lg:h-fit lg:items-start lg:gap-[2.375rem] lg:pt-40">
          <img
            src={imagePath("icons/orthopedic-logo.svg")}
            alt="logo da linha orthopedic"
          />

          <ul className="text-title-base-500 text-theme-black max-w-[39.25rem] pl-8 lg:list-disc">
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
    <div className="via-theme-purple-brand/20 absolute inset-0 hidden bg-gradient-to-r from-white/90 to-transparent lg:block" />
    <div className="absolute inset-0 block bg-gradient-to-b from-white/90 via-transparent to-transparent lg:hidden" />
    <div className="absolute inset-0 block bg-gradient-to-t from-white/90 via-transparent to-transparent lg:hidden" />
  </>
);
