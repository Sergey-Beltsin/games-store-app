/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import styled from 'styled-components';

import {
  buttonBg,
  buttonBgHovered,
  buttonDisabled,
  greyText02,
  primarySecondary,
  text01,
  white,
} from '@/lib/constants/theme';

type Props = {
  width?: number | string;
  height?: number;
  isOutlined?: boolean;
  isBoldText?: boolean;
  isUpperCase?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: FC<Props> = ({
  width,
  height,
  isOutlined,
  isBoldText,
  isUpperCase,
  disabled,
  onClick,
  children,
  ...props
}) => (
  <Container
    width={width}
    height={height}
    isOutlined={isOutlined}
    isBoldText={isBoldText}
    isUpperCase={isUpperCase}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {children}
  </Container>
);

const Container = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => (height ? `${height}px` : '40px')};

  background-color: ${buttonBg};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  font-size: 12px;
  ${({ isBoldText }) => isBoldText && ('font-weight: 500;')}
  color: ${white};
  ${({ isUpperCase }) => isUpperCase && ('text-transform: uppercase;')}
  letter-spacing: 0.5px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: ${buttonBgHovered};
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  ${({ isOutlined }) => isOutlined && (`
    background-color: transparent;
    border: 1px solid ${primarySecondary};

    color: ${text01};
  `)}

  ${({ disabled }) => disabled && (`
    background-color: ${buttonDisabled};

    color: ${greyText02};

    &:hover {
      background-color: ${buttonDisabled};
      box-shadow: none;
      cursor: default;
    }
  `)}
`;
