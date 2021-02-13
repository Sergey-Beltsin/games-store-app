import { FC } from 'react';
import styled from 'styled-components';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import { background, text01 } from '@/lib/constants/theme';
import { Button } from '@/UI/atoms/button';

const NotFound: FC = () => {
  const { t } = useTranslation('404');

  return (
    <Container>
      <Wrapper>
        <Title>404</Title>
        <Subtitle>
          {t('pageNotFound')}
        </Subtitle>
      </Wrapper>
      <Link href="/store">
        <Ref>
          <Button width="200px" isUpperCase>
            {t('mainPage')}
          </Button>
        </Ref>
      </Link>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  min-height: calc(100vh - 52px);

  background-color: ${background};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 30px;
`;

const Title = styled.div`
  margin: 0;

  position: relative;

  font-size: 100px;
  font-weight: bold;
  color: ${text01};

  &::before {
    content: '';

    width: 2px;

    position: absolute;
    right: -10px;
    top: 0;
    bottom: 0;

    background-color: ${text01};
  }
`;

const Subtitle = styled.h2`
  max-width: 175px;
  margin: 0;
  margin-left: 20px;

  font-size: 27px;
  font-weight: bold;
  color: ${text01};
`;

const Ref = styled.a``;
