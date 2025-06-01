import type { TProduct } from "@/common/types";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

type ProductProps = {
  product: TProduct;
  page?: number;
};

export const ProductCard = memo(({ product, page }: ProductProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const url =
      `/orthopedic-line/${product.id}` + (page ? `?page=${page}` : "");
    navigate(url);
  };

  return (
    <div
      className="group relative flex w-[168px] flex-col gap-4 lg:w-[268px]"
      onClick={handleClick}
    >
      {product.isNew && (
        <div className="absolute top-2 left-2 rounded-md bg-[#9A1A8099] p-2 group-hover:z-10 group-hover:bg-[#9A1A80]">
          <p className="font-theme-raleway text-xs font-medium text-white sm:text-base">
            Lançamento
          </p>
        </div>
      )}
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="h-[238px] cursor-pointer rounded-sm group-hover:opacity-75 lg:h-[338px] lg:rounded-md"
      />
      <div className="flex flex-col">
        <p className="font-theme-raleway text-sm font-medium sm:text-base">
          {product.name}
        </p>
        <div className="flex flex-row items-center gap-[5px]">
          <p className="font-theme-raleway text-sm font-bold">Cód. Produto</p>
          <p
            className="text-sm font-normal"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            {product.code}
          </p>
        </div>
      </div>
    </div>
  );
});
