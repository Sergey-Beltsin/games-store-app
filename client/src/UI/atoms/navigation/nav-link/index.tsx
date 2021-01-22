import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  border,
  primary,
  whiteSecondary,
} from '@/lib/constants/theme';
import { TABLET_WIDTH } from '@/lib/constants/common';

interface OwnProps {
  href: string;
}
interface LinkOwnProps {
  isActive: boolean;
}

type NavLinkProps = OwnProps;
type LinkProps = LinkOwnProps;

export const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const path = useRouter().pathname;

  return (
    <Container isActive={path === href}>
      <StyledLink href={href}>
        <Ref isActive={path === href}>
          {children}
        </Ref>
      </StyledLink>
    </Container>
  );
};

const Container = styled.li<LinkProps>`
  min-width: fit-content;
  height: 100%;

  position: relative;
  
  border-bottom: 1px solid ${border};

  @media (min-width: ${TABLET_WIDTH}px) {
    letter-spacing: normal;
    border-color: transparent;

    &::before {
      content: '';

      height: 5px;

      position: absolute;
      right: 0;
      left: 0;
      bottom: ${({ isActive }) => (isActive ? 0 : -5)}px;

      background-color: ${primary};

      transition: 0.2s ease;
    }
    
    &:hover::before {
      bottom: 0px;
    }
  }
`;

const StyledLink = styled(Link)``;

const Ref = styled.a<LinkProps>`
  display: flex;
  height: 100%;
  padding: 10px 28px 7px 28px;

  cursor: pointer;

  font-size: 13px;
  color: ${whiteSecondary};
  letter-spacing: 1.5px;
  text-transform: uppercase;

  @media (min-width: ${TABLET_WIDTH}px) {
    justify-content: center;
    align-items: center;

    padding: 0 28px;

    font-size: 11px;
    letter-spacing: normal;
  }  
`;
