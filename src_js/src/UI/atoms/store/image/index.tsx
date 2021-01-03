import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { white } from '@/lib/constants/theme';

interface OwnProps {
  src: string;
}

type StoreImageProps = OwnProps;

export const StoreImage: FC<StoreImageProps> = ({ src }) => (
  <Container>
    <StyledImage
      src={src}
      width={100}
      height={200}
    />
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  position: relative;

  background: linear-gradient(to bottom, rgb(43, 43, 43), rgb(32, 32, 32));
  border-radius: 4px;

  &::after {
    content: '';

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background-color: ${white};
    opacity: 0;

    transition: 0.15s ease;
  }

  &:hover::after {
    opacity: 0.1;
  }

  & div {
    width: 100%;
    height: 100%;
  }
  
  & img {
    width: 100% !important;
    height: 100% !important;
    min-width: auto !important;
    min-height: auto !important;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 4px;
`;
