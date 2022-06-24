import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { NumberProvider } from '../context/NumberContex'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <NumberProvider>
        <Component {...pageProps} />
      </NumberProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
