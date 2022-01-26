import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal';
import { ModalProvider } from '../contexts/Modal';
import { TransactionsProvider } from '../contexts/Transactions';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransactionsProvider>
      <ModalProvider>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
        <Modal />
      </ModalProvider>
    </TransactionsProvider>
  );
}

export default MyApp;
