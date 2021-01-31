import styled from 'styled-components';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { SignContainer, SignLoginCard } from '@/UI/atoms/sign';
import { STORE_NAME } from '@/lib/constants/common';
import { greyText, text01 } from '@/lib/constants/theme';
import { LOGIN_METHODS } from '@/lib/constants/mock-data';

type TextProps = {
  topMargin?: boolean;
}

const Login = () => {
  const { t } = useTranslation('id');

  return (
    <Container>
      <SignContainer>
        <Title>
          {t('chooseLoginWith', { store: STORE_NAME })}
        </Title>
        {LOGIN_METHODS.map((item) => (
          <SignLoginCard
            logo={item.logo}
            href={item.loginHref}
            content={t('loginWith', { name: item.title })}
          />
        ))}
        <Text topMargin>
          {t('notAccount', { store: STORE_NAME })}
        </Text>
        <Link href="/id/register">
          <Ref>
            <WhiteText>
              {t('register')}
            </WhiteText>
          </Ref>
        </Link>
      </SignContainer>
    </Container>
  );
};
export default Login;

const Container = styled.div``;

const Text = styled.span<TextProps>`
  display: block;

  ${({ topMargin }) => topMargin && ('margin-top: 20px;')}

  font-size: 14px;
  color: ${greyText};
  text-align: center;
  line-height: 1.5;
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

const WhiteText = styled(Text)`
  color: ${text01};
`;

const Ref = styled.a`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${text01};
  }
`;
