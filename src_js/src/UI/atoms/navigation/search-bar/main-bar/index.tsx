import {
  FC,
} from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { background, text01 } from '@/lib/constants/theme';
import { STORE_NAME } from '@/lib/constants/common';
import { SearchIcon } from '@/lib/icons/user';

interface OwnProps {
  searchHandler: () => void;
}
interface WrapperOwnProps {
  width?: boolean;
}
interface SearchIconOwnProps {
  onClick: () => void;
}

type SearchIconProps = SearchIconOwnProps;

type SearchMainBarProps = OwnProps;
type WrapperProps = WrapperOwnProps;

export const SearchMainBar: FC<SearchMainBarProps> = ({
  searchHandler,
}) => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Wrapper width>
        <Descr>{t('store', { name: STORE_NAME })}</Descr>
        <Text>{t('searchBar.find')}</Text>
      </Wrapper>
      <Wrapper>
        <Icon onClick={searchHandler}>
          <SearchIcon />
        </Icon>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 80px;

  position: fixed;
  top: 52px;
  left: 0;
  right: 0;

  background-color: ${background};
  cursor: pointer;
`;

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ width }) => width && ('width: 90%;')}
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${text01};
  letter-spacing: 0.2px;
  line-height: 1.4;
`;

const Descr = styled(Text)`
  opacity: 0.6;

  font-size: 9px;
  letter-spacing: 0.09px;
`;

const Icon = styled.div<SearchIconProps>``;
