export interface IUserProps {
  name: string;
  email: string;
  productId: number;
}

interface IProps {
  productId: number;
}

export type ParamList = {
  Detail: {
    product: IProps;
  };
};
