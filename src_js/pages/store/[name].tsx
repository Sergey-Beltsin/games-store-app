import { FC } from 'react';
import { useRouter } from 'next/router';

const Product: FC = () => {
  const { name } = useRouter().query;

  return (
    <div>
      {name}
    </div>
  );
};
export default Product;
