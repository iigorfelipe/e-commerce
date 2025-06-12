import type { TData, TProductDetail } from "../types";
import { imagePath } from "../utils/image-path";

const productDetails: TProductDetail = {
  level: "3 - Recuperação e tratamento de lesões GRAVES",
  commercialName: "Órtese Splint Bilateral",
  productLine: "Orthopedic",
  productCode: "OR83",
  productFamily: "Hidrolight Neo",
  productModels: "Bilateral",
  composition:
    "74% borracha de cloropreno, 16% poliamida, 9%poliestireno e 1%PVC.",
  description:
    "A Órtese Splint Bilateral Hidrolight é feita de neoprene Plush, com propriedades isolantes térmicas e um acabamento elegante em plush. Possui ampla capacidade de ajuste devido à aderência do tecido. Em repouso, a órtese já está pré-ajustada, com fechamento do polegar e uma membrana elástica que funciona como um bolso, facilitando a colocação pelo próprio paciente. As talas internas são facilmente ajustáveis para se adaptarem à mão desejada. São fornecidas duas talas removíveis, uma com curvatura ideal para sustentar o punho até a palma da mão, e a segunda reta na parte dorsal do punho, impedindo movimentos para cima e para baixo. O elástico aderente envolve a articulação, proporcionando compressão de acordo com a indicação médica e a necessidade do paciente.",
  images: [
    imagePath("images/product-detail-1.jpg"),
    imagePath("images/product-detail-2.jpg"),
    imagePath("images/product-detail-3.jpg"),
  ],
  colors: [{ label: "Preto", hex: "#000" }],
  model: "Bilateral",
  sizes: ["Único", "Especial"],
};

export const data: TData = {
  hidrolightNeo: [
    {
      id: "1",
      name: "Órtese Soft Curta com Polegar",
      code: "OR1065",
      image: imagePath("images/1-product.jpg"),
      isNew: false,
      details: productDetails,
    },
    {
      id: "2",
      name: "Órtese Soft Curta sem Polegar",
      code: "OR1066",
      image: imagePath("images/2-product.jpg"),
      isNew: true,
      details: productDetails,
    },
    {
      id: "3",
      name: "Órtese Soft Curta com Polegar",
      code: "OR1065",
      image: imagePath("images/3-product.jpg"),
      isNew: false,
      details: productDetails,
    },
    {
      id: "4",
      name: "Órtese Safe Air",
      code: "OR1051",
      image: imagePath("images/4-product.jpg"),
      isNew: true,
      details: productDetails,
    },
  ],
};
