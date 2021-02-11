import { FC } from 'react';
import styled from 'styled-components';

import { SignContainer } from '@/UI/atoms/sign';
import { EpicRegister } from '@/features/id/containers/register';

const RegisterEpic: FC = () => (
  <SignContainer>
    <Container>
      <EpicRegister />
    </Container>
  </SignContainer>
);

export default RegisterEpic;

const Container = styled.div``;
