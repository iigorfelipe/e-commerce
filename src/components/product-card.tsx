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
      className="group relative flex w-full flex-col gap-4"
      onClick={handleClick}
    >
      {product.isNew && (
        <div className="absolute top-2 left-2 rounded-md bg-[#9A1A8099] p-2 group-hover:z-10 group-hover:bg-[#9A1A80]">
          <p className="text-body-base-500 text-white">Lançamento</p>
        </div>
      )}
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full cursor-pointer rounded-sm group-hover:opacity-75 lg:rounded-md"
      />
      <div className="flex flex-col">
        <p className="text-body-base-500">{product.name}</p>
        <div className="flex flex-row items-center gap-[0.3125rem]">
          <p className="text-body-sm-700">Cód. Produto</p>
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
