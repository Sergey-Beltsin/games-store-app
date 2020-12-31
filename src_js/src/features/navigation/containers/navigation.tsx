import { FC, useRef, useState } from 'react';
import styled from 'styled-components';

import { secondary } from '@/lib/constants/theme';
import { useOutsideAlerter } from '@/lib/utils/hooks';
import { TABLET_WIDTH } from '@/lib/constants/common';
import {
  NavLinks,
  NavTopBar,
  UserNav,
} from '../../../UI/molecules';

interface OwnProps {}

interface ContainerOwnProps {
  isOpen: boolean;
}

type NavigationProps = OwnProps;
type ContainerProps = ContainerOwnProps;

export const Navigation: FC<NavigationProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isUserNavOpen, setIsUserNavOpen] = useState<boolean>(true);
  const navigationRef = useRef(null);
  useOutsideAlerter(navigationRef, () => setIsNavOpen(false), 'nav-close-btn');

  return (
    <Container isOpen={isNavOpen}>
      <Wrapper>
        <NavTopBar
          isOpen={isNavOpen}
          onClick={() => setIsNavOpen((prevState) => !prevState)}
          transHandler={() => console.log('translation handler')}
          isUserNavOpen={isUserNavOpen}
          userNavHandler={() => setIsUserNavOpen((prevState) => !prevState)}
        />
        <NavigationWrapper isOpen={isNavOpen} ref={navigationRef}>
          <NavigationInner>
            <NavLinks />
            <UserNav
              transHandler={() => console.log('translation handler')}
              userNavHandler={() => setIsUserNavOpen((prevState) => !prevState)}
              isOpen={isUserNavOpen}
            />
          </NavigationInner>
        </NavigationWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.nav<ContainerProps>`
  position: relative;

  &::before {
    content: '';

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;

    visibility: hidden;
    cursor: pointer;

    transition: 0.2s ease;

    ${({ isOpen }) => isOpen && (`
      background-color: rgba(0, 0, 0, 0.75);
      visibility: visible;
    `)}
  }

  @media (min-width: ${TABLET_WIDTH}px) {
    &::before {
      visibility: hidden;
    }
  }
`;

const Wrapper = styled.div`
  z-index: 1;
`;

const NavigationWrapper = styled.div<ContainerProps>`
  width: 90vw;

  position: fixed;
  right: ${({ isOpen }) => (isOpen ? 0 : -150)}vw;
  top: 52px;
  bottom: 0;
  
  transition: right 0.6s;
`;

const NavigationInner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: 100%;

  background-color: ${secondary};

  @media (min-width: ${TABLET_WIDTH}px) {
    display: none;
  }
`;
