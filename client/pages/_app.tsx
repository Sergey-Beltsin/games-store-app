import { AppProps } from 'next/app';
import styled from 'styled-components';

import '../src/UI/_settings/index.css';

import { Navigation } from '@/features/navigation';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header>
      <Navigation />
    </Header>
    <Main>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Main>
  </>
);

export default MyApp;

const Header = styled.header``;

const Main = styled.main`
  padding-top: 52px;
`;
