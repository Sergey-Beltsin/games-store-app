import { FC, useState } from 'react';
import styled from 'styled-components';

import { DropdownItem } from '@/UI/atoms';

export interface IDropdownOption {
  href?: string;
  locale?: string;
  title: string;
}

type Props = {
  options: IDropdownOption[];
  filterMethod?: (item: IDropdownOption) => boolean;
};

export const Dropdown: FC<Props> = ({ options, filterMethod, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <TriggerElement
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
        {isOpen && (
          <Content className="dropdown__content">
            {options.filter((item) => (filterMethod ? filterMethod(item) : true)).map((item) => (
              <DropdownItem
                href={item.href}
                locale={item.locale}
                title={item.title}
              />
            ))}
          </Content>
        )}
      </TriggerElement>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  width: 100%;

  position: relative;
`;

const TriggerElement = styled.div`
  display: flex;

  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 180px !important;
  
  position: absolute;
  top: calc(100% - 1px);
  left: -70px;
  z-index: 999;

  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);

  animation: opacityIn 0.3s;

  @keyframes opacityIn {
    from {
      opacity: 0;
    }
  }
`;
