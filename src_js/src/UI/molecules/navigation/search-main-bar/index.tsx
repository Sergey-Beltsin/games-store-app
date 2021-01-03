import {
  Dispatch,
  SetStateAction,
  FC,
} from 'react';
import styled from 'styled-components';
import { SearchBar } from '@/UI/atoms/navigation';

interface OwnProps {
  isSearchOpen: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

type SearchMainBarProps = OwnProps;

export const SearchMainBar: FC<SearchMainBarProps> = ({
  value,
  setValue,
  isSearchOpen,
}) => (
  <Container>
    <SearchMainBar
      isSearchOpen={isSearchOpen}
      value={value}
      setValue={setValue}
    />
    {isSearchOpen && (
    <SearchBar
      value={value}
      setValue={setValue}
    />
    )}
  </Container>
);

const Container = styled.div``;
