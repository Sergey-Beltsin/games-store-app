// eslint-disable-next-line no-use-before-define
import React, {
  Dispatch,
  SetStateAction,
  FC,
  useRef,
} from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import hash from 'object-hash';

import {
  background,
  borderTertiary,
  text01,
  whiteTertiary,
} from '@/lib/constants/theme';
import { PC_MIDDLE_WIDTH, STORE_NAME } from '@/lib/constants/common';
import { SearchIcon } from '@/lib/icons/user';
import { MainBarItem } from '@/UI/atoms/navigation/search-bar';
import ScrollLock from 'react-scrolllock';
import { useOutsideAlerter } from '@/lib/utils/hooks';

interface OwnProps {
  setIsSearchOpened: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  handleExploreOpen: () => void;
  handleExploreClose: () => void;
}
interface WrapperOwnProps {
  leftMargin?: boolean;
  flexColumn?: boolean;
}
interface SearchIconOwnProps {
  onClick: () => void;
  isOpen: boolean;
}
interface CloseIconOwnProps {
  isOpen: boolean;
}
interface ContainerOwnProps {
  isOpen: boolean;
}
interface Item {
  title: string;
  href: string;
}

type MainBarProps = OwnProps;
type WrapperProps = WrapperOwnProps;
type SearchIconProps = SearchIconOwnProps;
type CloseIconProps = CloseIconOwnProps;
type ContainerProps = ContainerOwnProps;
type MainBarItems = Item[];

export const MainBar: FC<MainBarProps> = ({
  setIsSearchOpened,
  isOpen,
  handleExploreOpen,
  handleExploreClose,
}) => {
  const { t } = useTranslation('nav');
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => handleExploreClose());
  const MAIN_BAR_ITEMS: MainBarItems = [
    {
      title: t('searchBar.find'),
      href: '/store',
    },
    {
      title: t('searchBar.browse'),
      href: '/store/browse',
    },
  ];

  return (
    <Container isOpen={isOpen}>
      <ContainerWrapper ref={wrapperRef}>
        <MainWrapper>
          <Wrapper
            leftMargin
            flexColumn
            onClick={() => (isOpen ? handleExploreClose() : handleExploreOpen())}
          >
            <Descr>{t('common:store', { name: STORE_NAME })}</Descr>
            <Wrapper>
              <Text>{t('searchBar.find')}</Text>
              <CloseIcon isOpen={isOpen} />
            </Wrapper>
          </Wrapper>
          <Wrapper>
            <Icon
              onClick={() => !isOpen && setIsSearchOpened((prevState) => !prevState)}
              isOpen={isOpen}
            >
              <SearchIcon />
            </Icon>
          </Wrapper>
        </MainWrapper>
        <MainBarItemsWrapper onClick={handleExploreClose} isOpen={isOpen}>
          {MAIN_BAR_ITEMS.map((item) => (
            <React.Fragment key={hash(item)}>
              <MainBarItem href={item.href}>
                {item.title}
              </MainBarItem>
              <ScrollLock isActive={isOpen} />
            </React.Fragment>
          ))}
        </MainBarItemsWrapper>
      </ContainerWrapper>
    </Container>
  );
};

const Container = styled.div<ContainerProps>`
  display: flex;

  width: 100%;
  height: 80px;

  position: fixed;
  top: 52px;
  left: 0;
  right: 0;

  background-color: ${background};
  border-bottom: 1px solid ${borderTertiary};

  ${({ isOpen }) => isOpen && (`
    &::before {
      content: '';
  
      position: fixed;
      top: 133px;
      bottom: 0;
      left: 0;
      right: 0;
  
      background-color: rgba(0, 0, 0, 0.75);
      cursor: pointer;
    }
  `)}

  @media (min-width: ${PC_MIDDLE_WIDTH}px) {
    width: 50%;

    position: relative;
    top: auto;

    border-color: transparent;
  }
`;

const ContainerWrapper = styled.div`
  display: flex;

  width: 100%;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  margin: 0 auto;

  @media (min-width: ${PC_MIDDLE_WIDTH}px) {
    display: none;
  }
`;

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  ${({ flexColumn }) => flexColumn && ('flex-direction: column;')}
  align-items: center;
  justify-content: center;

  ${({ leftMargin }) => leftMargin && (`
    width: 90%;
    margin-left: 4%;
  `)}

  cursor: pointer;
`;

const Text = styled.span`
  margin-right: 3px;

  font-size: 14px;
  font-weight: 500;
  color: ${text01};
  letter-spacing: 0.2px;
  line-height: 1.4;
`;

const Descr = styled(Text)`
  margin-right: 0;
  margin-left: 8px;

  opacity: 0.6;

  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.09px;
`;

const Icon = styled.div<SearchIconProps>`
  & svg {
    width: 17px;

    position: relative;
    top: 3px;

    ${({ isOpen }) => isOpen && ('opacity: 0.15;')}

    transition: 0.15s ease;

    & path {
      fill: ${text01};
    }
  }
`;

const CloseIcon = styled.div<CloseIconProps>`
  position: relative;

  &::after,
  &::before {
    content: '';

    width: 6px;
    height: 1px;

    position: absolute;
    top: 0;

    background-color: ${whiteTertiary};

    transition: 0.15s ease;
  }

  &::after {
    left: 0;

    transform: rotate(${({ isOpen }) => (isOpen ? -45 : 45)}deg);
  }

  &::before {
    left: 4px;

    transform: rotate(${({ isOpen }) => (isOpen ? 45 : -45)}deg);
  }
`;

const MainBarItemsWrapper = styled.ul<ContainerProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  margin: 0;
  padding: 0;

  position: fixed;
  top: 133px;
  left: 0;
  right: 0;

  list-style: none;

  @media (min-width: ${PC_MIDDLE_WIDTH}px) {
    display: flex;
    align-items: center;

    width: 100%;

    position: relative;
    top: auto;
  }
`;
