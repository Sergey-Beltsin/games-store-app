import {
  FC,
  forwardRef,
} from 'react';
import styled from 'styled-components';

import { secondary } from '@/lib/constants/theme';
import { PC_MIDDLE_WIDTH, TABLET_WIDTH } from '@/lib/constants/common';
import { CloseButton, Logo } from '../../../atoms';
import { NavLinks, UserNav } from '../../../molecules';

interface OwnProps {
  isOpen: boolean;
  onClick: () => void;
  transHandler: () => void;
  isUserNavOpen: boolean;
  userNavHandler: () => void;
  ref: any;
}
interface WrapperOwnProps {
  tabletWidth?: boolean;
  ref?: any;
}

type NavTopBarProps = OwnProps;
type WrapperProps = WrapperOwnProps;

export const NavTopBar: FC<NavTopBarProps> = forwardRef(({
  isOpen,
  onClick,
  transHandler,
  isUserNavOpen,
  userNavHandler,
}, ref) => (
  <Container>
    <Wrapper>
      <Logo />
      <AdaptiveWrapper ref={ref}>
        <NavLinks />
      </AdaptiveWrapper>
    </Wrapper>
    <Wrapper>
      <CloseButton
        isOpen={isOpen}
        onClick={onClick}
        maxWidth={TABLET_WIDTH}
      />
      <AdaptiveWrapper tabletWidth>
        <UserNav
          transHandler={transHandler}
          isOpen={isUserNavOpen}
          userNavHandler={userNavHandler}
        />
      </AdaptiveWrapper>
    </Wrapper>
  </Container>
));

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  height: 52px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;

  background-color: ${secondary};

  @media (min-width: ${TABLET_WIDTH}px) {
    overflow: hidden;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const AdaptiveWrapper = styled.div<WrapperProps>`
  display: none;

  @media (min-width: ${({ tabletWidth }) => (tabletWidth ? TABLET_WIDTH : PC_MIDDLE_WIDTH)}px) {
    display: flex;
  }
`;
