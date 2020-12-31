import { FC } from 'react';
import styled from 'styled-components';

import { secondary } from '@/lib/constants/theme';
import { TABLET_WIDTH } from '@/lib/constants/common';
import { CloseButton, Logo } from '../../../atoms';

interface OwnProps {
  isOpen: boolean;
  onClick: () => void;
}

type NavTopBarProps = OwnProps;

export const NavTopBar: FC<NavTopBarProps> = ({ isOpen, onClick }) => (
  <Container>
    <Logo />
    <CloseButton
      isOpen={isOpen}
      onClick={onClick}
      maxWidth={TABLET_WIDTH}
    />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  height: 52px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: ${secondary};
`;
