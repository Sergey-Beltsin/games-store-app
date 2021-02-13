import { FC } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { PageContainer } from '@/UI/atoms';
import { background, text01 } from '@/lib/constants/theme';

const Home: FC = () => {
  const { name } = useRouter().query;

  return (
    <Container>
      <PageContainer>
        {name}
      </PageContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 52px);

  background-color: ${background};

  color: ${text01};
`;
