import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Skeleton,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  import * as React from 'react';
  import { FaArrowRight } from 'react-icons/fa';
  import { Link } from 'react-router-dom';
  
  export const SingleTemplate = ({ website }) => {
      const {
        shortName,
        name,
        description,
        imageUrl
      } = website;
  
  return (
    <Box maxW="7xl" mx="auto" px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }}>
      <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
        <Box
          width={{ lg: 'sm' }}
          transform={{ base: 'translateY(-50%)', lg: 'none' }}
          bg={{
            base: useColorModeValue('red.50', 'gray.700'),
            lg: 'transparent',
          }}
          mx={{ base: '6', md: '8', lg: '0' }}
          px={{ base: '6', md: '8', lg: '0' }}
          py={{ base: '6', md: '8', lg: '12' }}
        >
          <Stack spacing={{ base: '8', lg: '10' }}>
            <Stack spacing={{ base: '2', lg: '4' }}>
              <Heading
                size="xl"
                color={useColorModeValue('blue.600', 'blue.900')}
              >
                {name}
              </Heading>
              <Heading size="xl" fontWeight="normal">
                {description}
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Link
                to={`/single/${shortName}`}
                color={useColorModeValue('blue.700', 'blue.900')}
                fontWeight="bold"
                fontSize="lg"
                name={shortName}
                description={description}
              >
                Discover now
              </Link>
              <Icon
                color={useColorModeValue('blue.700', 'blue.900')}
                as={FaArrowRight}
              />
            </HStack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src={imageUrl}
            alt="Lovely ecommerce site"
            fallback={<Skeleton />}
            maxH="450px"
            minW="300px"
            objectFit="cover"
            flex="1"
          />
        </Flex>
      </Stack>
    </Box>
  );
}