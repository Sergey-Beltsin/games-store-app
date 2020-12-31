import useTranslation from 'next-translate/useTranslation';

import { STORE_NAME } from '@/lib/constants/common';
import styled from 'styled-components';
import { background } from '@/lib/constants/theme';
import { StoreCards } from '../src/UI/molecules/store-cards';

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <StoreCards />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: ${background};
`;
