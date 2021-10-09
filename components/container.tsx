import { Container as ChakraContainer } from '@chakra-ui/react'
import { ReactChild } from 'react'

type AppProps = {
  children: ReactChild
}

export default function Container({ children }: AppProps) {
  return <ChakraContainer maxW="container.xl">{children}</ChakraContainer>
}
