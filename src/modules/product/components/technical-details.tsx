import { ChevronDown } from "lucide-react";
import { Divider } from "@/components/divider";

export const TechnicalDetails = () => {
  return (
    <div className="flex flex-col gap-4">
      <Divider fullWidth={false} />
      <details className="group">
        <summary className="flex w-full cursor-pointer items-center justify-between">
          Detalhes
          <ChevronDown
            strokeWidth="0.09375rem"
            className="transition-transform group-open:rotate-180 lg:size-8"
          />
        </summary>
        <div className="text-body-base-500 text-theme-gray-dark flex flex-col gap-[1.125rem] pt-8">
          <span className="text-theme-black">
            Nível 3- Recuperação e tratamento de lesões GRAVES
          </span>

          <div className="flex gap-2">
            <span>Nome Comercial:</span>
            <span className="font-normal">Órtese Splint Bilateral</span>
          </div>

          <div className="flex gap-2">
            <span>Linha:</span>
            <span className="font-normal">Orthopedic</span>
          </div>
          <div className="flex gap-2">
            <span>Cod. Produto (referências/SKU):</span>
            <span className="font-normal">OR83</span>
          </div>
          <div className="flex gap-2">
            <span>Família de Produtos:</span>
            <span className="font-normal">Hidrolight Neo</span>
          </div>
          <div className="flex gap-2">
            <span>Modelos do produto(esquerda/direita–bilateral):</span>
            <span className="font-normal">Bilateral</span>
          </div>
          <div className="flex gap-2">
            <span>Composição:</span>
            <span className="font-normal">
              74% borracha de cloropreno, 16% poliamida, 9%poliestireno e 1%PVC.
            </span>
          </div>

          <span>PRODUTO TÉRMICO</span>
        </div>
      </details>
      <Divider fullWidth={false} />

      <details className="group">
        <summary className="flex w-full cursor-pointer items-center justify-between">
          Especificações técnicas
          <ChevronDown
            strokeWidth="0.09375rem"
            className="transition-transform group-open:rotate-180 lg:size-8"
          />
        </summary>
      </details>
      <Divider fullWidth={false} />

      <details className="group">
        <summary className="flex w-full cursor-pointer items-center justify-between">
          Indicações e Instrução de uso
          <ChevronDown
            strokeWidth="0.09375rem"
            className="transition-transform group-open:rotate-180 lg:size-8"
          />
        </summary>
      </details>
      <Divider fullWidth={false} />

      <details className="group">
        <summary className="flex w-full cursor-pointer items-center justify-between">
          Garantia
          <ChevronDown
            strokeWidth="0.09375rem"
            className="transition-transform group-open:rotate-180 lg:size-8"
          />
        </summary>
      </details>
      <Divider fullWidth={false} />
    </div>
  );
};
