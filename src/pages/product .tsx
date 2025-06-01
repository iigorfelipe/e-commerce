import { productsData } from "@/common/mocks/data";
import { Breadcrumb } from "@/components/breadcrumb";
import { ProductDetails } from "@/modules/product";

import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams<{ id: string }>();
  const productDetail = productsData.find((product) => product.id === id);

  if (!productDetail) return <p>Produto não encontrado</p>;

  return (
    <div className="flex flex-col">
      <div className="hidden lg:flex">
        <Breadcrumb />
      </div>
      <ProductDetails productDetail={productDetail} />
    </div>
  );
};
