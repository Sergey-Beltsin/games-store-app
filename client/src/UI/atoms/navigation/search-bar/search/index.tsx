import {
  Dispatch,
  SetStateAction,
  FC,
  useRef,
  useEffect,
} from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { secondary, secondaryTertiary, text01 } from '@/lib/constants/theme';
import { CloseIcon, SearchIcon } from '@/lib/icons/user';
import ScrollLock from 'react-scrolllock';
import { useOutsideAlerter } from '@/lib/utils/hooks';
import { PC_MIDDLE_WIDTH } from '@/lib/constants/common';

interface OwnProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
interface IconOwnProps {
  value?: string;
  adaptive?: boolean;
}
interface ContainerOwnProps {
  isOpen: boolean;
}

type Props = OwnProps;
type IconProps = IconOwnProps;
type ContainerProps = ContainerOwnProps;

export const SearchBar: FC<Props> = ({
  value,
  setValue,
  isOpen,
  setIsOpen,
}) => {
  const { t } = useTranslation('nav');
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setIsOpen(false));
  useEffect(() => () => {
    setValue('');
  }, []);
  useEffect(() => {
    if (inputRef?.current && isOpen) inputRef.current.focus();
  }, [isOpen]);

  return (
    <Container isOpen={isOpen}>
      <MainWrapper ref={wrapperRef}>
        <Wrapper>
          <Icon>
            <SearchIcon />
          </Icon>
          <Input
            value={value}
            onChange={({ target }) => setValue(target.value)}
            placeholder={t('searchBar.search')}
            ref={inputRef}
          />
          <Icon
            value={value}
            adaptive
            onClick={() => {
              setIsOpen(false);
              setValue('');
            }}
          >
            <CloseIcon />
          </Icon>
        </Wrapper>
      </MainWrapper>
      <ScrollLock isActive={isOpen} />
    </Container>
  );
};

const Container = styled.div<ContainerProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

  height: 80px;
  
  position: fixed;
  top: 52px;
  left: 0;
  right: 0;
  z-index: 100;

  background-color: ${secondary};

  &::before {
    content: '';

    position: fixed;
    top: 132px;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;

    background-color: rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }

  @media (min-width: ${PC_MIDDLE_WIDTH}px) {
    display: flex;

    height: 42px;
    padding: 0 15px;

    position: relative;
    top: auto;

    background-color: ${secondaryTertiary};
    border-radius: 3px;

    &::before {
      display: none;
    }
  }
`;

const MainWrapper = styled.div`
  display: flex;

  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 85%;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  margin: 0 20px;
  padding: 12px 5px;

  background-color: transparent;
  border: none;
  outline: none;

  font-size: 14px;
  color: ${text01};
  letter-spacing: 0.2px;

  @media (min-width: ${PC_MIDDLE_WIDTH}px) {
    margin: 0 10px;
  }
`;

const Icon = styled.div<IconProps>`
  position: relative;
  top: 3px;

  cursor: pointer;

  & svg {
    width: 17px;

    & path {
      fill: ${text01};
    }
  }
  
  @media (min-width: ${PC_MIDDLE_WIDTH}px) {
    ${({ value, adaptive }) => adaptive && !value.length && ('display: none;')}
  }
`;
