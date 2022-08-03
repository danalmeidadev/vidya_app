export interface IProductDetailsProps {
  name: string;
  description: string;
  midias: string;
  version: string;
  clientId: string;
  id: number;
}

export type ParamList = {
  Detail: {
    products: IProductDetailsProps;
  };
};

export type INavigationProps = {
  navigate: (screen: string) => void;
};
