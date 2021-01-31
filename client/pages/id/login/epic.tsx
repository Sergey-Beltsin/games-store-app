import styled from 'styled-components';

import { SignContainer } from '@/UI/atoms/sign';
import { Login } from '@/features/id/containers/login';

const LoginEpic = () => (
  <Container>
    <SignContainer>
      <Login />
    </SignContainer>
  </Container>
);

export default LoginEpic;

const Container = styled.div``;
