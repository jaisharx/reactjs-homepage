import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react'
import Container from 'components/container'
import NextImage from 'next/image'

import { ReactChild } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoLanguageOutline } from 'react-icons/io5'
import { BiLinkExternal } from 'react-icons/bi'
import ReactImageSrc from 'public/static/react-image.svg'

type NavProps = {
  children: ReactChild
  isSmall?: boolean
}

const NavLink = ({ children, isSmall }: NavProps) => {
  return (
    <Link
      px="4"
      color="white"
      fontWeight="light"
      fontSize={isSmall ? 'md' : 'xl'}
      _hover={{ color: 'brand.400' }}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  return (
    <Box bg="brand.500" minH="16">
      <Container>
        <Flex justify="space-between">
          {/* react logo */}
          <HStack minH="16" align="center">
            <NextImage src={ReactImageSrc} />
            <Text color="brand.400" fontSize="xl" fontWeight="bold">
              React
            </Text>
          </HStack>

          {/* links */}
          <HStack minH="16" align="center">
            <NavLink>Docs</NavLink>
            <NavLink>Tutorial</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Community</NavLink>
          </HStack>

          {/* more links */}
          <HStack minH="16" align="center">
            <InputGroup>
              <InputLeftElement
                mt="2px"
                pointerEvents="none"
                children={<AiOutlineSearch color="white" fontSize="18px" />}
              />
              <Input
                w="16rem"
                border="none"
                placeholder="Search"
                _focus={{ bg: 'shades.400' }}
              />
            </InputGroup>
            <NavLink isSmall>v17.0.2</NavLink>
            <NavLink isSmall>
              <HStack>
                <IoLanguageOutline /> <Text>Languages</Text>
              </HStack>
            </NavLink>
            <HStack spacing="0">
              <NavLink isSmall>Github</NavLink>
              <BiLinkExternal color="white" fontSize="18px" />
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
