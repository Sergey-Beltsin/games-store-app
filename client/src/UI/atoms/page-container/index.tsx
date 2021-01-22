import { FC } from 'react';
import styled from 'styled-components';

import { MAX_WIDTH, PC_MIDDLE_WIDTH } from '@/lib/constants/common';

export const PageContainer: FC = ({ children }) => (
  <Container>
    {children}
  </Container>
);

const Container = styled.div`
  width: 95%;
  max-width: ${MAX_WIDTH}px;
  margin: 0 auto;

  @media (min-width: ${PC_MIDDLE_WIDTH}px) {
    width: 75%;
  }
`;
