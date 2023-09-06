import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { register } from 'swiper/element/bundle';

import 'swiper/css'
register();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
