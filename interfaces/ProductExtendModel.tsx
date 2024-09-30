import Review from "./Review";

export default interface ProductExtendModel {
  id: number;
  name: string;
  style: string;
  pagraph: string;
  description: string;
  imgsDescription: string[];
  price: number;
  priceBefore: number;
  descount: string;
  isNew: boolean;
  images: string[];
  sizes: string[];
  colors: string[];
  category: string;
  tags: string[];
  sku: string;
  reviews: Review[];
}
