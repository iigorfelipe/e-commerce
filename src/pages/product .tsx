import { productsData } from "@/common/mocks/data";
import { Breadcrumb } from "@/components/breadcrumb";
import { useIsDesktop } from "@/hooks/use-is-desktop";
import { ProductDetails } from "@/modules/product";

import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams<{ id: string }>();
  const productDetail = productsData.find((product) => product.id === id);
  const isDesktop = useIsDesktop();

  if (!productDetail) return <p>Produto não encontrado</p>;

  return (
    <div className="flex flex-col">
      {isDesktop && <Breadcrumb />}

      <ProductDetails productDetail={productDetail} />
    </div>
  );
};
