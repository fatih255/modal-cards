import React from 'react'
import type { AppProps } from 'next/app'
//tailwind & sass
import 'styles/index.scss'
//redux
import { Provider } from 'react-redux'
import { store } from 'redux/store'
//components
import Header from 'components/Header'
import Footer from 'components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer text='Powered by Popupsmart' />
      </Provider>
    </React.StrictMode>
  )
}

export default MyApp
