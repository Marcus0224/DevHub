import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaArrowRight } from 'react-icons/fa'
  
  export const SocialCatalogItem = () => (
    <Box maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
      <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
        <Box
          width={{ lg: 'sm' }}
          transform={{ base: 'translateY(-50%)', lg: 'none' }}
          bg={{ base: useColorModeValue('red.50', 'gray.700'), lg: 'transparent' }}
          mx={{ base: '6', md: '8', lg: '0' }}
          px={{ base: '6', md: '8', lg: '0' }}
          py={{ base: '6', md: '8', lg: '12' }}
        >
          <Stack spacing={{ base: '8', lg: '10' }}>
            <Stack spacing={{ base: '2', lg: '4' }}>
              <Heading size="xl" color={useColorModeValue('blue.600', 'blue.900')}>
                Social Media Site
              </Heading>
              <Heading size="xl" fontWeight="normal">
               Become the social butterfly you know you are inside!
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Link color={useColorModeValue('blue.700', 'blue.900')} fontWeight="bold" fontSize="lg">
                Discover now
              </Link>
              <Icon color={useColorModeValue('blue.700', 'blue.900')} as={FaArrowRight} />
            </HStack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src="https://i.ibb.co/gWRKVjL/social-Display1.png&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            alt="Lovely social media site"
            fallback={<Skeleton />}
            maxH="450px"
            minW="300px"
            objectFit="cover"
            flex="1"
          />
          <Image
            display={{ base: 'none', sm: 'initial' }}
            src="https://i.ibb.co/bQncWJT/social-Display2.png&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            alt="Lovely Image of a social media site"
            fallback={<Skeleton />}
            maxH="450px"
            objectFit="cover"
          />
        </Flex>
      </Stack>
    </Box>
  )