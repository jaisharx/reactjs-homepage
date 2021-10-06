import type { AppProps } from 'next/app'
import GlobalCSS from 'styles/globals'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalCSS />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
