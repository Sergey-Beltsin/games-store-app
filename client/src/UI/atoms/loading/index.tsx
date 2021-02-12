import { FC } from 'react';
import styled from 'styled-components';
import { primary, white } from '@/lib/constants/theme';

export const Loading: FC = () => (
  <Container>
    <Wrapper />
    <Wrapper />
    <Wrapper />
    <Wrapper />
  </Container>
);

const Wrapper = styled.div``;

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 45px;
  height: 45px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 29px;
    height: 29px;
    margin: 8px;
    border: 4px solid ${primary};
    border-radius: 50%;
    animation: ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${primary}  transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
