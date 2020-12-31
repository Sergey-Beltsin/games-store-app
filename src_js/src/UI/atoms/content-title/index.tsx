import { FC } from 'react';
import styled from 'styled-components';

import { white } from '@/lib/constants/theme';

export const ContentTitle: FC = ({ children }) => (
  <Text>
    {children}
  </Text>
);

const Text = styled.div`
  font-size: 18px;
  color: ${white};
  line-height: 1.4;
`;
