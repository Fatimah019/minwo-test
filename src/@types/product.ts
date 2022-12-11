export interface IProduct {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

export type ProductsContextType = {
  products: IProduct[] | undefined;
  isLoading: boolean;
  errorMessage: string;
};
