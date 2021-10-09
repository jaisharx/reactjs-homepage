import type { AppProps } from 'next/app'
import GlobalCSS from 'styles/globals'
import theme from 'styles/theme'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalCSS />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
