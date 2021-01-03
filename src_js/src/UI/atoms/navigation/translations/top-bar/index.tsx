import { FC } from 'react';
import styled from 'styled-components';

import { secondaryBar, text02 } from '@/lib/constants/theme';
import { TABLET_WIDTH } from '@/lib/constants/common';

interface OwnProps {
  lang: string;
  onClose: () => void;
}

type TranslationsItemProps = OwnProps;

export const TranslationsTopBar: FC<TranslationsItemProps> = ({
  lang,
  onClose,
}) => (
  <Container onClick={onClose} className="nav-close-btn">
    <CloseIcon className="nav-close-btn" />
    <Text className="nav-close-btn">{lang}</Text>
  </Container>
);

const Text = styled.span`
  font-size: 14px;
  color: ${text02};
  letter-spacing: 1.3px;
  text-transform: uppercase;
`;

const Container = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 42px;
  cursor: pointer;

  background-color: ${secondaryBar};

  @media (min-width: ${TABLET_WIDTH}px) {
    display: none;
  }
`;

const CloseIcon = styled.span`
  position: absolute;
  left: 10px;
  top: 20px;

  &::after,
  &::before {
    content: '';

    width: 7px;
    height: 2px;

    position: absolute;
    left: 0;

    background-color: ${text02};
  }

  &::after {
    top: 0;

    transform: rotate(-45deg);
  }

  &::before {
    top: 5px;

    transform: rotate(45deg);
  }
`;
