import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
