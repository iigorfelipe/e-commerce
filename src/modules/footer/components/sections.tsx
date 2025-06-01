import { imagePath } from "@/common/utils/image-path";

type FooterSectionProps = {
  title: string;
  items: React.ReactNode[];
  className?: string;
};

export const FooterSection = ({
  title,
  items,
  className = "",
}: FooterSectionProps) => (
  <section
    className={`flex flex-col gap-2 text-sm text-white sm:gap-4 sm:text-base ${className}`}
    style={{ fontFamily: "Roboto, sans-serif" }}
  >
    <h1 className="font-semibold">{title}</h1>
    <div className="text-theme-gray-60 flex flex-col gap-1 text-xs sm:gap-2 sm:text-base">
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  </section>
);

export const SectionInsitucional = () => (
  <FooterSection
    title="Institucional"
    items={["Sobre nós", "Trabalhe conosco"]}
  />
);

export const SectionCatalogos = () => (
  <FooterSection
    title="Download de Catálogos"
    items={[
      "Catálogo geral",
      "Linha Orthopedic",
      "Linha Sports",
      "Linha Special Cares",
      "Catálogo Foot Care",
      "Catálogo Acessibilidade",
    ]}
  />
);

export const SectionLinhas = () => (
  <FooterSection
    title="Linhas de produtos"
    items={["Orthopedic", "Sports", "Special Cares"]}
  />
);

export const SectionContatos = () => (
  <FooterSection
    title="Entre em contato e tire suas dúvidas"
    items={[
      <div className="flex items-center gap-2" key="tel">
        <img
          src={imagePath("/icons/telephone.svg")}
          className="size-8"
          alt=""
        />
        <span>+55 48 3333 3333</span>
      </div>,
      <div className="flex items-center gap-2" key="email">
        <img src={imagePath("/icons/email.svg")} className="size-8" alt="" />
        <span>
          sac@loremipsum.com.br ou <br />
          rp@loremipsum.com.br
        </span>
      </div>,
    ]}
  />
);

export const SectionSocial = () => (
  <FooterSection
    title="Nos acompanhe também nas redes sociais"
    items={[
      <div className="flex gap-4" key="social">
        <img src={imagePath("/icons/insta.svg")} className="size-8" alt="" />
        <img src={imagePath("/icons/youtube.svg")} className="size-8" alt="" />
        <img src={imagePath("/icons/facebook.svg")} className="size-8" alt="" />
      </div>,
    ]}
  />
);
