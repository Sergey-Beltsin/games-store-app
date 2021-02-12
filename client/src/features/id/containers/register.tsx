/* eslint-disable no-shadow */
import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { Checkbox, Input, Select } from '@/UI/atoms/forms';
import { IOption, IRegisterErrors } from '@/features/id/store.types';
import useTranslation from 'next-translate/useTranslation';
import {
  handleAcceptTerms,
  handleCountry,
  handleEmail,
  handleErrors,
  handleLogin,
  handleFirstName,
  handlePassword,
  handleLastName,
  handleRegister,
  useRegisterStore,
} from '@/features/id/register-store';
import { greyText, text01 } from '@/lib/constants/theme';
import { Button } from '@/UI/atoms/button';
import { STORE_NAME } from '@/lib/constants/common';

type WrapperProps = {
  rightMargin?: boolean;
  bottomMargin?: boolean;
  flex?: boolean;
  flexCenter?: boolean;
};

type RefProps = {
  alignCenter?: boolean;
  bottomMargin?: boolean;
  leftMargin?: boolean;
};

const emailValidation = (email: string): boolean => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const passwordValidation = (password: string): boolean => {
  const re = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
  return re.test(password);
};

export const EpicRegister: FC = () => {
  const {
    loading,
    country,
    firstName,
    lastName,
    login,
    email,
    password,
    acceptTerms,
    errors,
  } = useRegisterStore();
  const { t } = useTranslation('id');

  const LIST_ITEMS: IOption[] = [
    {
      title: t('countries:US'),
      key: 'US',
    },
    {
      title: t('countries:RU'),
      key: 'RU',
    },
    {
      title: t('countries:UK'),
      key: 'UK',
    },
    {
      title: t('countries:JP'),
      key: 'JP',
    },
    {
      title: t('countries:CN'),
      key: 'CN',
    },
    {
      title: t('countries:CA'),
      key: 'CA',
    },
    {
      title: t('countries:MX'),
      key: 'MX',
    },
    {
      title: t('countries:SE'),
      key: 'SE',
    },
    {
      title: t('countries:TR'),
      key: 'TR',
    },
    {
      title: t('countries:RS'),
      key: 'RS',
    },
    {
      title: t('countries:SD'),
      key: 'SD',
    },
  ];

  const handleError = (field: string, error: string) => handleErrors({
    ...errors,
    [field]: error,
  });

  const onEmailBlur = (email: string): void => {
    if (!email) {
      handleError('email', 'length');
      return;
    }

    if (!emailValidation(email)) {
      handleError('email', 'emailFormat');
      return;
    }

    handleError('email', '');
  };

  const onPasswordBlur = (password: string): void => {
    if (!password) {
      handleError('password', 'length');
      return;
    }

    if (password.length < 8) {
      handleError('password', 'tooShort');
      return;
    }

    if (!passwordValidation(password)) {
      handleError('password', 'passwordFormat');
      return;
    }

    handleError('password', '');
  };

  const onLoginBlur = (login: string): void => {
    if (!login) {
      handleError('login', 'length');
      return;
    }

    if (login.length < 3) {
      handleError('login', 'tooShort');
      return;
    }

    if (login.length > 20) {
      handleError('login', 'tooLong');
      return;
    }

    handleError('login', '');
  };

  const isDisabled = (): boolean => !passwordValidation(password) || !emailValidation(email)
    || login.length <= 3 || login.length >= 16 || !password || !email || !login
    || !firstName || !lastName || !acceptTerms || !country;

  return (
    <Container>
      <Form>
        <Wrapper bottomMargin>
          <Select
            options={LIST_ITEMS}
            onSelect={(value: IOption) => handleCountry(value.key)}
            placeholder={`*${t('country')}`}
          />
        </Wrapper>
        <Wrapper flex bottomMargin>
          <Wrapper rightMargin>
            <Input
              value={firstName}
              onChange={(value: string) => handleFirstName(value)}
              placeholder={`*${t('name')}`}
              onBlur={(value: string) => {
                const currentErrors = { ...errors };
                if (!value) {
                  currentErrors.firstName = 'length';
                  handleErrors(currentErrors);
                  return;
                }

                currentErrors.firstName = '';
                handleErrors(currentErrors);
              }}
              error={errors.firstName}
            />
          </Wrapper>
          <Input
            value={lastName}
            onChange={(value: string) => handleLastName(value)}
            placeholder={`*${t('lastName')}`}
            onBlur={(value: string) => {
              const currentErrors = { ...errors };
              if (!value) {
                currentErrors.lastName = 'length';
                handleErrors(currentErrors);
                return;
              }

              currentErrors.lastName = '';
              handleErrors(currentErrors);
            }}
            error={errors.lastName}
          />
        </Wrapper>
        <Wrapper bottomMargin>
          <Input
            value={login}
            onChange={(value: string) => handleLogin(value)}
            placeholder={`*${t('loginPlaceholder')}`}
            onBlur={(value: string) => onLoginBlur(value)}
            error={errors.login}
            tooltipContent={t('tooltips.login')}
          />
        </Wrapper>
        <Wrapper bottomMargin>
          <Input
            value={email}
            onChange={(value: string) => handleEmail(value)}
            placeholder={`*${t('emailPlaceholder')}`}
            onBlur={(value: string) => onEmailBlur(value)}
            error={errors.email ? errors.email : ''}
          />
        </Wrapper>
        <Wrapper bottomMargin>
          <Input
            value={password}
            onChange={(value: string) => handlePassword(value)}
            placeholder={`*${t('password')}`}
            onBlur={(value: string) => onPasswordBlur(value)}
            error={errors.password ? errors.password : ''}
            type="password"
            tooltipContent={t('tooltips.password')}
          />
        </Wrapper>
        <Checkbox
          checked={acceptTerms}
          onChange={(checked: boolean) => handleAcceptTerms(checked)}
          label={t('acceptTerms.title')}
        />
        <Link href="terms">
          <Ref>
            {t('acceptTerms.link')}
          </Ref>
        </Link>
        <StyledButton
          isBoldText
          isUpperCase
          disabled={isDisabled()}
          height={50}
          loading={loading || undefined}
          onClick={() => handleRegister({
            country,
            firstName,
            lastName,
            login,
            email,
            password,
          })}
        >
          {t('continue')}
        </StyledButton>
        <Link href="/terms">
          <Ref alignCenter bottomMargin>
            {t('privacyPolicy')}
          </Ref>
        </Link>
        <Wrapper>
          <Wrapper flex flexCenter>
            <Text>
              {t('haveAccount', { store: STORE_NAME })}
            </Text>
            <Link href="/id/login/epic">
              <Ref leftMargin>
                {t('login')}
              </Ref>
            </Link>
          </Wrapper>
          <Wrapper flex flexCenter>
            <Text>
              {t('backToRegister.title')}
            </Text>
            <Link href="/id/register">
              <Ref leftMargin>
                {t('backToRegister.link')}
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
  ${({ flexCenter }) => flexCenter && (`
    justify-content: center;
    align-items: center;
  `)}

  ${({ rightMargin }) => rightMargin && ('margin-right: 15px;')}
  ${({ bottomMargin }) => bottomMargin && ('margin-bottom: 15px;')}
`;

const Text = styled.span`
  font-size: 14px;
  color: ${greyText};
  line-height: 1.5;
`;

const Ref = styled.a<RefProps>`
  display: block;

  ${({ bottomMargin }) => bottomMargin && ('margin-bottom: 20px;')}
  ${({ leftMargin }) => leftMargin && ('margin-left: 5px;')}

  cursor: pointer;

  font-size: 14px;
  color: ${text01};
  ${({ alignCenter }) => alignCenter && ('text-align: center;')}

  &:hover {
    text-decoration: underline;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
  margin-bottom: 35px;
`;
