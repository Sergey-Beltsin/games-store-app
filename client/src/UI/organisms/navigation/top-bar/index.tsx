import {
  Dispatch,
  SetStateAction,
  FC,
  forwardRef,
} from 'react';
import styled from 'styled-components';

import { secondary } from '@/lib/constants/theme';
import { PC_MIDDLE_WIDTH, TABLET_WIDTH } from '@/lib/constants/common';
import { CloseButton } from '@/UI/atoms/navigation';
import { Logo } from '@/UI/atoms';
import {
  NavLinks,
  Translations,
  UserNav,
} from '@/UI/molecules/navigation';

interface OwnProps {
  isOpen: boolean;
  onClick: () => void;
  transHandler: (isOpen: boolean) => void;
  isUserNavOpen: boolean;
  userNavHandler: () => void;
  ref: any;
  isTransOpen: boolean;
  setIsTransOpen: Dispatch<SetStateAction<boolean>>;
}
interface WrapperOwnProps {
  tabletWidth?: boolean;
  ref?: any;
}
interface ContainerOwnProps {
  isOpen: boolean;
}

type NavTopBarProps = OwnProps;
type WrapperProps = WrapperOwnProps;
type ContainerProps = ContainerOwnProps;

export const NavTopBar: FC<NavTopBarProps> = forwardRef(({
  isOpen,
  onClick,
  transHandler,
  isUserNavOpen,
  userNavHandler,
  isTransOpen,
  setIsTransOpen,
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
      <Wrapper>
        <UserNavWrapper>
          <UserNav
            transHandler={transHandler}
            isOpen={isUserNavOpen}
            userNavHandler={userNavHandler}
          />
        </UserNavWrapper>
        <TranslationsContainer
          isOpen={isTransOpen}
          className="nav-close-btn"
        >
          <Translations onClose={() => setIsTransOpen(false)} />
        </TranslationsContainer>
      </Wrapper>
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
`;

const Wrapper = styled.div`
  display: flex;
`;

const AdaptiveWrapper = styled.div<WrapperProps>`
  display: none;

  @media (min-width: ${PC_MIDDLE_WIDTH}px) {
    display: flex;
  }
`;

const UserNavWrapper = styled.div`
  display: none;

  @media (min-width: ${TABLET_WIDTH}px) {
    display: block;
  }
`;

const TranslationsContainer = styled.div<ContainerProps>`
  width: 90vw;

  position: fixed;
  right: ${({ isOpen }) => (isOpen ? 0 : -150)}vw;
  top: 52px;
  bottom: 0;

  transition: right 0.4s ease,
    opacity 0.2s ease;

  @media (min-width: ${TABLET_WIDTH}px) {
    display: none;
  }
`;
