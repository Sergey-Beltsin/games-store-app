import { FC } from 'react';
import styled from 'styled-components';

import {
  borderSecondary,
  secondary,
  secondarySecond,
  whiteSecondary,
} from '@/lib/constants/theme';
import { TABLET_WIDTH } from '@/lib/constants/common';
import {
  UserNavUser,
  UserNavDownload,
  UserNavTranslations,
} from '@/UI/atoms/navigation/user-nav';

interface OwnProps {
  transHandler: (isOpen: boolean) => void;
  isOpen: boolean;
  userNavHandler: () => void;
}
interface CloseMenuOwnProps {
  isOpen?: boolean;
}

type UserNavProps = OwnProps;
type CloseMenuProps = CloseMenuOwnProps;

export const UserNav: FC<UserNavProps> = ({
  transHandler,
  isOpen,
  userNavHandler,
}) => (
  <Container isOpen={isOpen}>
    <CloseMenu onClick={userNavHandler}>
      <CloseMenuIcon isOpen={isOpen} />
    </CloseMenu>
    <UserActions>
      <UserNavUser />
      <UserNavTranslations onClick={transHandler} />
    </UserActions>
    <Wrapper>
      <UserNavDownload />
    </Wrapper>
  </Container>
);

const Container = styled.div<CloseMenuProps>`
  display: flex;
  flex-direction: column;

  background-color: ${secondarySecond};
  box-shadow: 0 -4px 15px -4px rgba(0, 0, 0, 0.5);
  border-top: 1px solid ${borderSecondary};

  position: relative;
  top: 0;

  transition: 0.2s ease;

  ${({ isOpen }) => isOpen && ('top: 110px;')}
  
  @media (min-width: ${TABLET_WIDTH}px) {
    flex-direction: row;

    top: 0;

    background-color: ${secondary};
    box-shadow: none;
    border-color: transparent;
  }
`;

const CloseMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20px;

  background-color: ${secondarySecond};
  border-bottom: 1px solid ${borderSecondary};
  cursor: pointer;

  @media (min-width: ${TABLET_WIDTH}px) {
    display: none;
  }
`;

const CloseMenuIcon = styled.div<CloseMenuProps>`
  position: relative;

  &::after,
  &::before {
    content: '';

    width: 10px;
    height: 2px;

    position: absolute;
    top: 0;

    background-color: ${whiteSecondary};

    transition: 0.2s ease;
  }

  &::after {
    left: 0;

    transform: rotate(${({ isOpen }) => (isOpen ? -45 : 45)}deg);
  }

  &::before {
    left: 6px;

    transform: rotate(${({ isOpen }) => (isOpen ? 45 : -45)}deg);
  }
`;

const UserActions = styled.div`
  display: flex;

  height: 52px;

  @media (min-width: ${TABLET_WIDTH}px) {
    height: auto;
  }
`;

const Wrapper = styled.div`
  height: 56px;

  @media (min-width: ${TABLET_WIDTH}px) {
    height: 52px;
    margin-top: -1px;
  }
`;
