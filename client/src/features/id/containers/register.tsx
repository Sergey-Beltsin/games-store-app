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

  const onEmailBlur = (email: string): void => {
    const currentErrors: IRegisterErrors = { ...errors };
    if (!email) {
      currentErrors.email = 'length';
      handleErrors(currentErrors);
      return;
    }

    if (!emailValidation(email)) {
      currentErrors.email = 'emailValidation';
      handleErrors(currentErrors);
      return;
    }

    currentErrors.email = '';
    handleErrors(currentErrors);
  };

  const onPasswordBlur = (password: string): void => {
    const currentErrors: IRegisterErrors = { ...errors };
    if (!password) {
      currentErrors.password = 'length';
      handleErrors(currentErrors);
      return;
    }

    if (password.length <= 8) {
      currentErrors.password = 'tooShort';
      handleErrors(currentErrors);
      return;
    }

    if (!passwordValidation(password)) {
      currentErrors.password = 'format';
      handleErrors(currentErrors);
      return;
    }

    currentErrors.password = '';
    handleErrors(currentErrors);
  };

  const onLoginBlur = (login: string): void => {
    const currentErrors: IRegisterErrors = { ...errors };
    if (!login) {
      currentErrors.login = 'length';
      handleErrors(currentErrors);
      return;
    }

    if (login.length <= 3) {
      currentErrors.login = 'tooShort';
      handleErrors(currentErrors);
      return;
    }

    if (login.length >= 16) {
      currentErrors.login = 'tooLong';
      handleErrors(currentErrors);
      return;
    }

    currentErrors.login = '';
    handleErrors(currentErrors);
  };

  const isDisabled = (): boolean => !passwordValidation(password) || !emailValidation(email)
    || login.length <= 3 || login.length >= 16 || !password || !email || !login
    || !firstName || !lastName || !acceptTerms || !country;

  return (
    <Container>
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
        onClick={() => handleRegister({
          country, firstName, lastName, login, email, password,
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
    </Container>
  );
};

const Container = styled.div``;

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
