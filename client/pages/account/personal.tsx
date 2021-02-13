import { FC } from 'react';
import styled from 'styled-components';

import { PageContainer } from '@/UI/atoms';
import { backgroundWhite, borderWhite, white } from '@/lib/constants/theme';
import { Personal } from '@/features/account';

const AccountPersonal: FC = () => (
  <Container>
    <PageContainer>
      <MainWrapper>
        <Personal />
      </MainWrapper>
    </PageContainer>
  </Container>
);

export default AccountPersonal;

const Container = styled.div`
  min-height: calc(100vh - 102px);
  padding-top: 50px;

  background-color: ${backgroundWhite};
`;

const MainWrapper = styled.div`
  padding: 35px 30px;

  background-color: ${white};
  border: 1px solid ${borderWhite};
`;
