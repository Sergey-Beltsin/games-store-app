import { FC, useRef, useState } from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { ArrowShortIcon } from '@/lib/icons';
import {
  borderTertiary,
  greyText,
  iconsColor,
  inputBg,
  text01,
} from '@/lib/constants/theme';
import { useOutsideAlerter } from '@/lib/utils/hooks';
import { IOption } from '@/features/id/store.types';

type ListItemProps = {
  isActive: boolean;
};

type IconProps = {
  rotate: boolean;
};

type Props = {
  options: IOption[];
  onSelect: (option: IOption) => void;
  placeholder?: string;
};

export const Select: FC<Props> = ({ options, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [searchedValue, setSearchedValue] = useState<string>('');
  const [isSearch, setIsSearch] = useState(false);

  const { t } = useTranslation('id');

  const listRef = useRef(null);
  useOutsideAlerter(listRef, () => {
    setIsOpen(false);
    setIsSearch(false);
  });

  const renderItem = (item: IOption) => (
    <ListItem
      key={item.key}
      onClick={() => {
        onSelect(item);
        setIsOpen(false);
        setValue(item.title);
        setSearchedValue(item.title);
      }}
      isActive={item.title === value}
    >
      {item.title}
    </ListItem>
  );

  return (
    <Container>
      <Input
        onClick={() => setIsOpen(true)}
        value={isSearch ? searchedValue : value}
        onChange={({ target }) => {
          setSearchedValue(target.value);
          setIsSearch(true);

          if (target.value === value) setIsSearch(false);
        }}
        placeholder={placeholder}
      />
      <Wrapper ref={listRef}>
        <Icon
          rotate={isOpen || undefined}
          onClick={() => setIsOpen((prevState) => !prevState)}
          type="button"
        >
          <ArrowShortIcon />
        </Icon>
        {isOpen && (
          <List>
            {options
              .filter((item) => item.title.toLowerCase().includes(searchedValue.toLowerCase()))
              .length
              ? options
                .sort()
                .map((item) => (isSearch
                  ? item.title.toLowerCase().includes(searchedValue.toLowerCase())
                    && renderItem(item)
                  : renderItem(item)))
              : <Text>{t('noOptions')}</Text>}
          </List>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  height: 50px;
  padding: 0 16px;

  position: relative;

  background-color: ${inputBg};
  border-radius: 4px;
`;

const Wrapper = styled.div``;

const Input = styled.input`
  width: 100%;
  height: 50px;

  background-color: transparent;
  border: none;
  outline: none;

  font-size: 13px;
  color: ${text01};
`;

const Icon = styled.button<IconProps>`
  background-color: transparent;
  border: none;
  cursor: pointer;

  transition: 0.1s ease;

  & svg path {
    fill: ${iconsColor};
  }

  &:hover svg path {
    fill: ${text01};
  }

  ${({ rotate }) => rotate && ('transform: rotate(180deg);')}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;

  max-height: 250px;

  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  right: 0;
  z-index: 999;

  overflow: auto;
  background-color: ${borderTertiary};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  list-style: none;
`;

const ListItem = styled.li<ListItemProps>`
  display: flex;
  align-items: center;

  width: calc(100% - 32px);
  height: 30px;
  padding: 0 16px;

  position: relative;

  cursor: pointer;

  font-size: 14px;
  color: ${text01};

  &::after {
    content: '';

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:hover::after {
    background-color: rgba(255, 255, 255, 0.2);
  }

  ${({ isActive }) => isActive && (`
    &::after {
      background-color: rgba(255, 255, 255, 0.4);
    }
  `)}
`;

const Text = styled.span`
  display: block;

  margin: 20px 10px;

  font-size: 14px;
  color: ${greyText};
`;
