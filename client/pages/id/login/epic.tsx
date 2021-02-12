import styled from 'styled-components';

import { SignContainer } from '@/UI/atoms/sign';
import { Login } from '@/features/id/containers/login';
import { WithAccountRedirect } from '@/UI/atoms/HOCs';

const LoginEpic = () => (
  <Container>
    <SignContainer>
      <Login />
    </SignContainer>
  </Container>
);

export default WithAccountRedirect(LoginEpic);

const Container = styled.div``;
