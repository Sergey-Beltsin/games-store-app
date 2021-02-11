import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';

import { background } from '@/lib/constants/theme';
import { StoreCards } from '@/UI/molecules/store-cards';
import { ContentTitle, PageContainer } from '@/UI/atoms';
import { SearchMainBar } from '@/UI/organisms/navigation';
import {
  handleOpenExplore,
  handleOpenSearch,
  handleSearch,
  useNavigationStore,
} from '@/features/navigation/store';

const Home = () => {
  const { t } = useTranslation('common');
  const {
    isSearchOpened,
    isNavOpen,
    search,
    isExploreOpen,
  } = useNavigationStore();

  return (
    <Container>
      <PageContainer>
        <SearchMainBar
          isSearchOpen={isSearchOpened}
          setIsSearchOpened={handleOpenSearch}
          isNavOpen={isNavOpen}
          value={search}
          setValue={handleSearch}
          isExploreOpen={isExploreOpen}
          handleExploreOpen={() => handleOpenExplore(true)}
          handleExploreClose={() => handleOpenExplore(false)}
        />
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
