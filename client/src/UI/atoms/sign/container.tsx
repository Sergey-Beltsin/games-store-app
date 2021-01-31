import styled from 'styled-components';

import { background, signCardBg, white } from '@/lib/constants/theme';

export const SignContainer = ({ children }) => (
  <Container>
    <Wrapper>
      <Inner>
        <Text>Logo</Text>
        {children}
      </Inner>
    </Wrapper>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;

  background-color: ${background};
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 470px;
  margin: 0 auto;

  height: 100%;

  background-color: ${signCardBg};
  border-radius: 4px;
`;

const Inner = styled.div`
  padding: 28px 60px 50px;
`;

const Text = styled.div`
  margin-bottom: 30px;

  color: ${white};
  text-align: center;
`;
