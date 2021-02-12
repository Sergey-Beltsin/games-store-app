import { FC, useState } from 'react';
import styled from 'styled-components';

import {
  iconsColor,
  inputBg,
  inputBgInvalid,
  red,
  white,
} from '@/lib/constants/theme';
import useTranslation from 'next-translate/useTranslation';
import { InfoIcon, InvisibleIcon, VisibleIcon } from '@/lib/icons/UI';
import { Tooltip } from '@/UI/atoms';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  tooltipContent?: string;
};

type InputWrapperProps = {
  error: boolean;
};

type IconProps = {
  rightMargin?: boolean;
}

export const Input: FC<Props> = ({
  value,
  onChange,
  onBlur,
  type = 'text',
  placeholder = '',
  error,
  tooltipContent,
}) => {
  const { t } = useTranslation('id');
  const [isPasswordType, setIsPasswordType] = useState<boolean>(type === 'password');

  return (
    <Container>
      <InputWrapper error={!!error}>
        <StyledInput
          value={value}
          onChange={({ target }) => onChange(target.value)}
          onBlur={() => onBlur && onBlur(value)}
          type={isPasswordType ? 'password' : 'text'}
          placeholder={placeholder}
        />
        <IconsWrapper>
          {type === 'password' && (
            <Icon
              onClick={() => setIsPasswordType((prevState) => !prevState)}
              rightMargin={!!tooltipContent}
            >
              {isPasswordType ? <InvisibleIcon /> : <VisibleIcon />}
            </Icon>
          )}
          {tooltipContent && (
            <Tooltip content={tooltipContent}>
              <Icon>
                <InfoIcon />
              </Icon>
            </Tooltip>
          )}
        </IconsWrapper>
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
  display: flex;
  justify-content: space-between;

  padding: 0 14px;

  background-color: ${inputBg};
  border-radius: 4px;

  transition: 0.1s ease;

  ${({ error }) => error && (`background-color: ${inputBgInvalid};`)}
`;

const StyledInput = styled.input`
  width: 80%;
  height: 50px;

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

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span<IconProps>`
  display: block;
  ${({ rightMargin }) => rightMargin && ('margin-right: 15px;')}

  width: 17px;
  height: 17px;

  cursor: pointer;

  & svg path {
    fill: ${iconsColor};
    transition: 0.1s ease;
  }

  &:hover {
    & svg path {
      fill: ${white};
    }
  }
`;
