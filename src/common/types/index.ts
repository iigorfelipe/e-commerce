export type TProduct = {
  id: string;
  name: string;
  code: string;
  image: string;
  isNew: boolean;
  details: TProductDetail;
};

export type TProductDetail = {
  level: string;
  commercialName: string;
  productLine: string;
  productCode: string;
  productFamily: string;
  productModels: string;
  composition: string;
  description: string;
  images: string[];
};

export type TData = {
  hidrolightNeo: TProduct[];
  // comfortAir: TProduct[];
  // orthoRecovery: TProduct[];
  // airFlex: TProduct[];
  // softline: TProduct[];
  // footCare: TProduct[];
  // lean: TProduct[];
};
