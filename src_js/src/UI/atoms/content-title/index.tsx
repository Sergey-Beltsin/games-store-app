import { FC } from 'react';
import styled from 'styled-components';

import { white } from '@/lib/constants/theme';

export const ContentTitle: FC = ({ children }) => (
  <Text>
    {children}
  </Text>
);

const Text = styled.div`
  margin-bottom: 15px;
  padding-top: 50px;

  font-size: 18px;
  color: ${white};
  line-height: 1.4;
`;
