import { AppProps } from 'next/app';

import { Header } from '~/components/Header';

import { Container } from '~/styles';

import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <Header />

      <Container role="main">
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
