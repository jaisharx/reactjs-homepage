import { Box } from '@chakra-ui/layout'
import Head from 'next/head'

import type { NextPage } from 'next'
import Navbar from 'components/navbar'

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>React – A JavaScript library for building user interfaces</title>
        <meta
          name="description"
          content="A JavaScript library for building user interfaces"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      
    </Box>
  )
}

export default Home
