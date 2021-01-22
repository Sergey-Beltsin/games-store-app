import { FunctionComponent } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { white } from '@/lib/constants/theme';

export const Logo: FunctionComponent = () => (
  <Container>
    <StyledLink href="/store">
      <Ref>
        Logo
      </Ref>
    </StyledLink>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 52px;

  opacity: 0.9;
  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const StyledLink = styled(Link)``;

const Ref = styled.a`
  color: ${white};
  user-select: none;
`;
