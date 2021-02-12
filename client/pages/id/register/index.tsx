import { FC, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import Cookies from 'js-cookie';

import { SignContainer, SignLoginCard } from '@/UI/atoms/sign';
import { greyText, text01, white } from '@/lib/constants/theme';
import { LOGIN_METHODS } from '@/lib/mock/mock-data';
import { STORE_NAME } from '@/lib/constants/common';
import { useRouter } from 'next/router';
import { WithAccountRedirect } from '@/UI/atoms/HOCs';

const Register: FC = () => {
  const { t } = useTranslation('id');
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get('token')) router.push('/account/personal');
  }, []);

  return (
    <SignContainer>
      <Container>
        <Title>
          {t('chooseRegisterWith')}
        </Title>
        {LOGIN_METHODS.map((item, i) => (
          <SignLoginCard
            logo={item.logo}
            href={item.registerHref}
            content={t('registerWith', { name: i === 0 ? t('email') : item.title })}
          />
        ))}
        <Wrapper>
          <Text>
            {t('haveAccount', { store: STORE_NAME })}
          </Text>
          <Link href="/id/login">
            <Ref>
              {t('login')}
            </Ref>
          </Link>
        </Wrapper>
      </Container>
    </SignContainer>
  );
};

export default WithAccountRedirect(Register);

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
`;

const Title = styled.h4`
  margin: 0;
  margin-bottom: 20px;

  font-size: 12px;
  font-weight: 500;
  color: ${text01};
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 16px;
`;

const Text = styled.span`
  display: block;

  margin-right: 10px;

  font-size: 14px;
  color: ${greyText};
  line-height: 1.5;
`;

const Ref = styled.a`
  cursor: pointer;

  font-size: 14px;
  color: ${white};

  &:hover {
    text-decoration: underline;
  }
`;
