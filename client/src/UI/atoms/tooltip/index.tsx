import { FC, useState } from 'react';
import styled from 'styled-components';

import { borderSecondary, text01 } from '@/lib/constants/theme';

type Props = {
  content: string;
};

export const Tooltip: FC<Props> = ({ content, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <TriggerElement
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </TriggerElement>
      {isOpen && (
        <Content>
          <Text>
            {content}
          </Text>
        </Content>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Content = styled.div`
  width: 250px;
  padding: 10px;

  position: absolute;
  left: -125px;
  top: calc(100% + 20px);
  z-index: 999;

  background-color: ${borderSecondary};
  border-radius: 4px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);

  animation: scaleIn 0.2s;

  @keyframes scaleIn {
    from {
      transform: scale(0.8);
      opacity: 0.8;
    }
  }
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${text01};
  word-break: break-word;
`;

const TriggerElement = styled.div``;
