import { AppProps } from 'next/app';
import { AnimateSharedLayout } from 'framer-motion';
import GlobalStyle from '../styles/GlobalStyle';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
      <GlobalStyle />
    </AnimateSharedLayout>
  );
};

export default MyApp;
