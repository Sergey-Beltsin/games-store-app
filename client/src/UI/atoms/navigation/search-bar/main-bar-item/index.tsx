import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import {
  background,
  text01,
} from '@/lib/constants/theme';
import { PC_MIDDLE_WIDTH } from '@/lib/constants/common';
import { useRouter } from 'next/router';

interface OwnProps {
  href: string;
}
interface TextOwnProps {
  isActive: boolean;
}

type MainBarItemProps = OwnProps;
type TextProps = TextOwnProps;

export const MainBarItem: FC<MainBarItemProps> = ({ href, children }) => {
  const { pathname } = useRouter();

  return (
    <Container>
      <StyledLink href={href}>
        <Text isActive={pathname === href}>
          {children}
        </Text>
      </StyledLink>
    </Container>
  );
};
const Container = styled.li`
  background-color: ${background};

  &:first-child {
    padding-top: 10px;
  }

  &:last-child {
    padding-bottom: 10px;
  }

  @media (min-width: ${PC_MIDDLE_WIDTH}px) {
    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    &:not(:first-child) {
      margin-left: 20px;
    }
  }
`;

const StyledLink = styled(Link)``;

const Text = styled.a<TextProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;

  cursor: pointer;

  font-size: 14px;
  color: ${text01};
  line-height: 1.4;
  letter-spacing: 0.2px;
  
  transition: 0.2s ease;

  @media (min-width: ${PC_MIDDLE_WIDTH}px) {
    height: auto;

    opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};

    &:hover {
      opacity: 1;
    }
  }
`;
