import {
  Dispatch,
  SetStateAction,
  FC,
} from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { secondary, text01 } from '@/lib/constants/theme';
import { CloseIcon, SearchIcon } from '@/lib/icons/user';

interface OwnProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

type Props = OwnProps;

export const SearchBar: FC<Props> = ({ value, setValue }) => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <SearchIcon />
      <Input
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder={t('searchBar.search')}
      />
      <CloseIcon />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80px;

  background-color: ${secondary};
`;

const Input = styled.input`
  width: 100%;
  min-height: 100%;
  margin: 0 20px;
  padding: 12px 5px;

  font-size: 14px;
  color: ${text01};
  letter-spacing: 0.2px;
`;
