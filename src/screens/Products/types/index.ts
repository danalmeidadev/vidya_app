export type ICreateProductsProps = {
  name: string;
  description: string;
  midias: string;
  version: string;
  clientId: number;
};
export type INavigationProps = {
  navigate: (screen: string) => void;
};
