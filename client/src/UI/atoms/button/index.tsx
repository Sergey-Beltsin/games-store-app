import { FC } from 'react';
import styled from 'styled-components';

import { primarySecondary, text01 } from '@/lib/constants/theme';

interface OwnProps {
  width?: number;
}
interface ContainerOwnProps {
  width: number;
}

type ButtonProps = OwnProps;
type ContainerProps = ContainerOwnProps;

export const Button: FC<ButtonProps> = ({ width }) => (
  <Container width={width} />
);

const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;

  border: 1px solid ${primarySecondary};
  border-radius: 4px;

  font-size: 11px;
  font-weight: 500;
  color: ${text01};
  letter-spacing: 0.5px;
`;
