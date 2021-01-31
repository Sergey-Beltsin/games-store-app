import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import {
  loginCard,
  loginCardHovered,
  storeLogoBg,
  text01,
} from '@/lib/constants/theme';

type Props = {
  logo: string;
  href: string;
  content: string;
}

export const SignLoginCard: FC<Props> = ({ logo, href, content }) => (
  <Link href={`/id/${href}`}>
    <Ref>
      <Container>
        <Logo>
          {logo}
        </Logo>
        <TextContainer>
          {content}
        </TextContainer>
      </Container>
    </Ref>
  </Link>
);

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-shrink: 0;

  width: 56px;

  position: relative;

  background-color: ${storeLogoBg};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  font-weight: 500;
  color: ${text01};

  &::after {
    content: '';

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: transparent;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  min-height: 50px;

  background-color: ${loginCard};
  border-radius: 4px;
  cursor: pointer;

  transition: 0.1s ease;

  &:hover {
    background-color: ${loginCardHovered};

    & ${Logo} {
      &::after {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;

const TextContainer = styled.div`
  padding: 0 20px;

  font-size: 12px;
  font-weight: 500;
  color: ${text01};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 15px;
`;

const Ref = styled.a``;
