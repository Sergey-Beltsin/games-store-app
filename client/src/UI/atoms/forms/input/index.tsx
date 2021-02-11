import { FC } from 'react';
import styled from 'styled-components';

import {
  inputBg,
  inputBgInvalid,
  red,
  white,
} from '@/lib/constants/theme';
import useTranslation from 'next-translate/useTranslation';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
};

type InputWrapperProps = {
  error: boolean;
};

export const Input: FC<Props> = ({
  value,
  onChange,
  onBlur,
  type = 'text',
  placeholder = '',
  error,
}) => {
  const { t } = useTranslation('id');

  return (
    <Container>
      <InputWrapper error={!!error}>
        <StyledInput
          value={value}
          onChange={({ target }) => onChange(target.value)}
          onBlur={() => onBlur && onBlur(value)}
          type={type}
          placeholder={placeholder}
        />
      </InputWrapper>
      {error && <ErrorText>{t(`errors.${error}`)}</ErrorText>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div<InputWrapperProps>`
  background-color: ${inputBg};
  border-radius: 4px;

  transition: 0.1s ease;

  ${({ error }) => error && (`background-color: ${inputBgInvalid};`)}
`;

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 14px;

  background-color: transparent;
  border: none;
  border-radius: 4px;
  outline: none;

  font-size: 14px;
  color: ${white};
  line-height: 20px;
`;

const ErrorText = styled.span`
  margin-top: 2px;

  font-size: 12px;
  color: ${red};
`;
