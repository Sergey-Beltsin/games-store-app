import useTranslation from 'next-translate/useTranslation';

import styled from 'styled-components';
import { background } from '@/lib/constants/theme';
import { StoreCards } from '../../src/UI/molecules/store-cards';
import { ContentTitle, PageContainer } from '../../src/UI/atoms';

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <PageContainer>
        <ContentTitle>
          {t('storePage.sell')}
        </ContentTitle>
        <StoreCards />
      </PageContainer>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: ${background};
`;
