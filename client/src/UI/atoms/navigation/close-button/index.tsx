import { FC } from 'react';
import styled from 'styled-components';

import {
  primary,
  secondaryActive,
  white,
} from '@/lib/constants/theme';

interface OwnProps {
  isOpen: boolean;
  onClick: () => void;
  maxWidth: number;
}
interface ContainerOwnProps {
  isOpen: boolean;
  maxWidth: number;
}
interface ButtonOwnProps {
  isOpen: boolean;
}

type CloseButtonProps = OwnProps;
type ContainerProps = ContainerOwnProps;
type ButtonProps = ButtonOwnProps;

export const CloseButton: FC<CloseButtonProps> = ({ isOpen, onClick, maxWidth }) => (
  <Container
    isOpen={isOpen}
    onClick={onClick}
    maxWidth={maxWidth}
    className="nav-close-btn"
  >
    <Button
      isOpen={isOpen}
      className="nav-close-btn"
    >
      <ButtonInner
        className="nav-close-btn"
      />
    </Button>
  </Container>
);

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;

  background-color: ${({ isOpen }) => (isOpen ? secondaryActive : primary)};
  cursor: pointer;

  transition: 0.2s ease;

  ${({ maxWidth }) => maxWidth && (`
    @media (min-width: ${maxWidth}px) {
      display: none;
    }
  `)}
`;

const ButtonInner = styled.div``;

const Button = styled.span<ButtonProps>`
  width: 32px;
  height: 2px;

  position: relative;
  
  & ${ButtonInner} {
    width: 32px;
    height: 2px;

    background-color: ${white};

    transition: transform 0.2s ease;
  }

  &::after,
  &::before {
    content: '';

    position: absolute;
    left: 0;
    right: 0;

    height: 2px;

    background-color: ${white};

    transition: top 0.2s ease 0.2s,
    transform 0.2s ease;
  }

  &::after {
    top: -8px;
  }

  &::before {
    top: 8px;
  }

  ${({ isOpen }) => isOpen && (`
    & ${ButtonInner} {
      transform: scale(0);
      transition: transform 0.2s ease 0.2s;
    }
    
    &::after,
    &::before {
      transition: top 0.2s ease,
      transform 0.2s ease 0.2s;
    }

    &::after {
      top: 0;
      transform: rotate(45deg);
    }

    &::before {
      top: 0;

      transform: rotate(-45deg);
    }
  `)}
`;
