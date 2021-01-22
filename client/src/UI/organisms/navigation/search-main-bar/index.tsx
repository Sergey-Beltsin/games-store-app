import {
  Dispatch,
  SetStateAction,
  FC,
} from 'react';
import styled from 'styled-components';
import { SearchBar } from '@/UI/atoms/navigation/search-bar';
import { MainBar } from '@/UI/molecules/navigation';
import { PC_MIDDLE_WIDTH } from '@/lib/constants/common';
import { background } from '@/lib/constants/theme';

interface OwnProps {
  isSearchOpen: boolean;
  setIsSearchOpened: Dispatch<SetStateAction<boolean>>;
  isNavOpen: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  isExploreOpen: boolean;
  handleExploreOpen: () => void;
  handleExploreClose: () => void;
}
interface ContainerOwnProps {
  isOpen: boolean;
}

type SearchMainBarProps = OwnProps;
type ContainerProps = ContainerOwnProps;

export const SearchMainBar: FC<SearchMainBarProps> = ({
  value,
  setValue,
  isSearchOpen,
  setIsSearchOpened,
  isNavOpen,
  isExploreOpen,
  handleExploreOpen,
  handleExploreClose,
}) => (
  <Container isOpen={isNavOpen}>
    <MainBar
      setIsSearchOpened={setIsSearchOpened}
      isOpen={isExploreOpen}
      handleExploreOpen={handleExploreOpen}
      handleExploreClose={handleExploreClose}
    />
    <SearchBar
      value={value}
      setValue={setValue}
      isOpen={isSearchOpen}
      setIsOpen={setIsSearchOpened}
    />
  </Container>
);

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 100;

  &::before {
    content: '';

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;

    visibility: hidden;
    cursor: pointer;

    transition: 0.2s ease;

    ${({ isOpen }) => isOpen && (`
      background-color: rgba(0, 0, 0, 0.75);
      visibility: visible;
    `)}
  }

  @media (min-width: ${PC_MIDDLE_WIDTH}px) {
    padding-top: 10px;

    background-color: ${background};
  }
`;
