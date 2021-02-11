/* eslint-disable no-shadow */
import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';

import { greyText, text01 } from '@/lib/constants/theme';
import { STORE_NAME } from '@/lib/constants/common';
import { Input, Checkbox } from '@/UI/atoms/forms';
import {
  handleEmail,
  handleEmailError,
  handlePassword,
  handlePasswordError,
  handleRemember,
  useLoginStore,
} from '@/features/id/login-store';
import { Button } from '@/UI/atoms/button';

type TextProps = {
  bottomMargin?: number;
  rightMargin?: number;
  alignCenter?: boolean;
  grey?: boolean;
};

type RefProps = {
  grey?: boolean;
  alignCenter?: boolean;
};

type WrapperProps = {
  flex?: boolean;
  flexSb?: boolean;
  flexCenter?: boolean;
  alignCenter?: boolean;
  topMargin?: number;
};

const emailValidation = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const Login: FC = () => {
  const { t } = useTranslation('id');
  const {
    email,
    password,
    remember,
    errors,
  } = useLoginStore();

  const onBlurEmail = (email: string) => {
    if (!email.length) {
      handleEmailError('length');
      return;
    }
    if (!emailValidation(email)) {
      handleEmailError('emailValidation');
      return;
    }

    handleEmailError('');
  };

  const onBlurPassword = (password: string) => {
    if (!password.length) {
      handlePasswordError('length');
      return;
    }

    handlePasswordError('');
  };

  return (
    <Container>
      <Title bottomMargin={15}>
        {t('loginWithAccount', { store: STORE_NAME })}
      </Title>
      <Form>
        <InputWrapper>
          <Input
            value={email}
            onChange={(value) => handleEmail(value)}
            placeholder={t('emailPlaceholder')}
            onBlur={onBlurEmail}
            error={errors.email}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            value={password}
            onChange={(value) => handlePassword(value)}
            placeholder={t('passwordPlaceholder')}
            onBlur={onBlurPassword}
            error={errors.password}
          />
        </InputWrapper>
        <Wrapper flex flexSb alignCenter>
          <Checkbox
            checked={remember}
            onChange={(checked) => handleRemember(checked)}
            label={t('rememberMe')}
          />
          <Link href="/id/login/forgot-password">
            <Ref grey>
              {t('forgotPassword')}
            </Ref>
          </Link>
        </Wrapper>
        <StyledButton
          isBoldText
          isUpperCase
          width="100%"
          height={50}
        >
          {t('loginNow')}
        </StyledButton>
        <Text bottomMargin={20} alignCenter>
          <Link href="/privacy-policy">
            <Ref>
              {t('privacyPolicy')}
            </Ref>
          </Link>
        </Text>
        <Wrapper>
          <Text grey alignCenter bottomMargin={5}>
            {t('haveNotAccount', { store: STORE_NAME })}
          </Text>
          <Link href="/id/register/epic">
            <Ref alignCenter>
              {t('register')}
            </Ref>
          </Link>
          <Wrapper flex flexCenter alignCenter topMargin={5}>
            <Text grey rightMargin={5}>
              {t('backToLogin.title')}
            </Text>
            <Link href="/id/login">
              <Ref>
                {t('backToLogin.link')}
              </Ref>
            </Link>
          </Wrapper>
        </Wrapper>
      </Form>
    </Container>
  );
};

const Container = styled.div``;

const Form = styled.form``;

const Wrapper = styled.div<WrapperProps>`
  ${({ flex }) => flex && ('display: flex;')}
  ${({ flexSb }) => flexSb && ('justify-content: space-between;')}
  ${({ flexCenter }) => flexCenter && ('justify-content: center;')}
  ${({ alignCenter }) => alignCenter && ('align-items: center;')}

  ${({ topMargin }) => topMargin && (`margin-top: ${topMargin}px;`)}
`;

const Text = styled.div<TextProps>`
  ${({ bottomMargin }) => bottomMargin && (`margin-bottom: ${bottomMargin}px;`)}
  ${({ rightMargin }) => rightMargin && (`margin-right: ${rightMargin}px;`)}

  font-size: 14px;
  color: ${({ grey }) => (grey ? greyText : text01)};
  ${({ alignCenter }) => alignCenter && ('text-align: center;')}
  line-height: 16px;
`;

const Title = styled(Text)`
  font-size: 12px;
  font-weight: 500;
  color: ${text01};
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const Ref = styled.a<RefProps>`
  display: block;

  cursor: pointer;

  font-size: 14px;
  color: ${({ grey }) => (grey ? greyText : text01)};
  ${({ alignCenter }) => alignCenter && ('text-align: center;')}

  &:hover {
    text-decoration: underline;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 15px;
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
  margin-bottom: 35px;
`;
