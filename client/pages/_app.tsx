import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import styled from 'styled-components';

import '../src/UI/_settings/index.css';

import { init } from '@/lib/utils/sentry';

import { Navigation } from '@/features/navigation';

init();

type MainProps = {
  topPadding: boolean;
};

// @ts-ignore
const MyApp = ({ Component, pageProps, err }: AppProps) => {
  const router = useRouter();
  const isHeader = !/id/g.test(router.pathname);

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
