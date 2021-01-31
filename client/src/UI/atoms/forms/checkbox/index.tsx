import { FC } from 'react';
import styled from 'styled-components';

import { checkboxBg, greyText, white } from '@/lib/constants/theme';

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
};

type InputWrapperProps = {
  checked: boolean;
};

export const Checkbox: FC<Props> = ({ checked, onChange, label }) => (
  <Container onClick={() => onChange(!checked)}>
    <InputWrapper checked={checked} />
    {label && (
      <Label>{label}</Label>
    )}
  </Container>
);

const Container = styled.div`
  display: flex;

  position: relative;

  user-select: none;
  cursor: pointer;
`;

const InputWrapper = styled.span<InputWrapperProps>`
  display: block;

  width: 20px;
  height: 20px;

  position: relative;

  background-color: ${checkboxBg};
  border-radius: 2px;

  ${({ checked }) => checked && (`
    &::after {
      content: '';

      width: 5px;
      height: 10px;

      position: absolute;
      left: 8px;
      top: 4px;

      transform: rotate(45deg);
      border: solid ${white};
      border-width: 0 1px 1px 0;
    }
  `)}
`;

const Label = styled.div`
  margin-left: 20px;

  font-size: 14px;
  font-weight: 400;
  color: ${greyText};
  line-height: 1.5;
`;
