import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

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
  position: relative;
`;

const StyledImage = styled(Image)`
  border-radius: 4px;
`;
