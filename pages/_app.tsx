import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../store/store';
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({
  Component, pageProps,
}: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

