
export interface Product {
  id: string;
  name: string;
  count: string;
  ply: string;
  length: string;
  packing: string;
  type: string;
  useCase: string;
}

export interface BrandCatalog {
  brandName: string;
  description: string;
  products: Product[];
}

export enum CatalogBrand {
  METRO_SPUN = 'Metro Poly - Spun Poly',
  METRO_POLY = 'Metro Poly - Poly Poly',
  OM_SHIV = 'Om Shiv Ram'
}
