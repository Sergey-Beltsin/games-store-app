import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import styled from 'styled-components';
import Cookies from 'js-cookie';

import '../src/UI/_settings/index.css';

import { init } from '@/lib/utils/sentry';

import { Navigation } from '@/features/navigation';
import { initAccountStore } from '@/features/account/store';

init();

type MainProps = {
  topPadding: boolean;
};

// @ts-ignore
const MyApp = ({ Component, pageProps, err }: AppProps) => {
  const router = useRouter();
  const isHeader = !/id/g.test(router.pathname);

  useEffect(() => {
    if (Cookies.get('token')) {
      // @ts-ignore
      if (Date.now() > new Date(Cookies.get('expiresDate')) || !Cookies.get('user')) {
        Cookies.remove('token');
        Cookies.remove('expiresDate');
        Cookies.remove('user');
      } else {
        initAccountStore(JSON.parse(Cookies.get('user')));
      }
    }
  }, []);

  return (
    <>
      {isHeader && (
        <Header>
          <Navigation />
        </Header>
      )}
      <Main topPadding={isHeader}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} err={err} />
      </Main>
    </>
  );
};

export default MyApp;

const Header = styled.header``;

const Main = styled.main<MainProps>`
  ${({ topPadding }) => topPadding && ('padding-top: 52px;')}
`;
