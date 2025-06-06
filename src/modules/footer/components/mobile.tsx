import {
  SectionCatalogos,
  SectionContatos,
  SectionInsitucional,
  SectionLinhas,
  SectionSocial,
} from "./sections";

export const FooterSectionsMobile = () => {
  return (
    <div className="flex flex-col gap-8 px-4 py-8 md:hidden">
      <div className="flex h-full flex-row items-start justify-between gap-2">
        <div className="w-1/2">
          <SectionInsitucional />
        </div>
        <div className="my-auto flex w-1/2 justify-center">
          <span className="text-logo text-white">LOGO</span>
        </div>
      </div>

      <div className="flex h-full flex-row items-start justify-between gap-2">
        <div className="w-1/2">
          <SectionLinhas />
        </div>
        <div className="w-1/2">
          <SectionSocial />
        </div>
      </div>

      <div className="flex h-full flex-row items-start justify-between gap-2">
        <div className="w-1/2">
          <SectionCatalogos />
        </div>
        <div className="w-1/2">
          <SectionContatos />
        </div>
      </div>
    </div>
  );
};
