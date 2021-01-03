import { FC } from 'react';
import { useRouter } from 'next/router';

import { PageContainer } from '@/UI/atoms';

const Home: FC = () => {
  const { name } = useRouter().query;

  return (
    <PageContainer>
      {name}
    </PageContainer>
  );
};

export default Home;
