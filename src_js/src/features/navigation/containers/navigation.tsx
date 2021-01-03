import {
  FC,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

import { secondary } from '@/lib/constants/theme';
import { useOutsideAlerter } from '@/lib/utils/hooks';
import { TABLET_WIDTH } from '@/lib/constants/common';
import {
  NavLinks,
  UserNav,
  SearchMainBar,
} from '@/UI/molecules/navigation';
import { NavTopBar } from '@/UI/organisms/navigation';

interface OwnProps {}
interface ContainerOwnProps {
  isOpen: boolean;
}

type NavigationProps = OwnProps;
type ContainerProps = ContainerOwnProps;

export const Navigation: FC<NavigationProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isUserNavOpen, setIsUserNavOpen] = useState<boolean>(false);
  const [isTransOpen, setIsTransOpen] = useState<boolean>(false);
  const [isSearchOpened, setIsSearchOpened] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const navigationRef = useRef(null);
  const navLinksRef = useRef(null);
  useOutsideAlerter(navigationRef, () => {
    setIsNavOpen(false);
    setIsTransOpen(false);
  }, 'nav-close-btn');
  const minLinksWidth = navLinksRef?.current && navLinksRef.current.offsetWidth + 300 + 52;
  // console.log(navLinksRef?.current && (navLinksRef.current.offsetWidth), minLinksWidth);

  return (
    <Container isOpen={isNavOpen}>
      <Wrapper>
        <NavTopBar
          isOpen={isNavOpen}
          onClick={() => {
            setIsNavOpen((prevState) => !prevState);
            setIsTransOpen(false);
          }}
          transHandler={(isOpen) => setIsTransOpen(isOpen)}
          isTransOpen={isTransOpen}
          isUserNavOpen={isUserNavOpen}
          userNavHandler={() => setIsUserNavOpen((prevState) => !prevState)}
          setIsTransOpen={setIsTransOpen}
          ref={navLinksRef}
        />
        <NavigationWrapper
          isOpen={isNavOpen}
          ref={navigationRef}
        >
          <NavigationInner>
            <NavLinks />
            <UserNav
              transHandler={() => setIsTransOpen((prevState) => !prevState)}
              userNavHandler={() => setIsUserNavOpen((prevState) => !prevState)}
              isOpen={isUserNavOpen}
            />
          </NavigationInner>
        </NavigationWrapper>
        <SearchMainBar
          isSearchOpen={isSearchOpened}
          value={search}
          setValue={setSearch}
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.nav<ContainerProps>`
  position: relative;
  z-index: 200;

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
