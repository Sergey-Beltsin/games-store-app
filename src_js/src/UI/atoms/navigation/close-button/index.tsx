import styled from 'styled-components';

import {
  primary,
  secondaryActive,
} from '@/constants/theme';

interface OwnProps {
  isOpen: boolean;
  onClick: () => boolean;
}

type Props = OwnProps;

export const CloseButton: React.FC<Props> = (props) => {

  return <Container />;
};

const Container = styled.div<Props>`
  background-color: ${({ isOpen }) => (isOpen ? secondaryActive : primary)};
`;
