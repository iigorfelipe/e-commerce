import type { TProductDetail } from "@/common/types";
import { imagePath } from "@/common/utils/image-path";
import { Maximize2 } from "lucide-react";

type ColorsAndSizesAvailableProps = {
  details: TProductDetail;
};

export const ColorsAndSizesAvailable = ({
  details,
}: ColorsAndSizesAvailableProps) => {
  return (
    <section className="flex flex-col gap-4">
      <span className="text-theme-black flex flex-row items-center gap-2">
        Cores disponíveis:
        {details.colors.map((color) => (
          <>
            <div
              className="size-3.5 rounded-full"
              style={{ backgroundColor: color.hex }}
            />
            {color.label}
          </>
        ))}
      </span>

      <span>Modelo: {details.model}</span>

      <span className="flex flex-row items-center gap-2">
        Tamanhos disponíveis:
        {details.sizes.map((size) => (
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
  );
};
