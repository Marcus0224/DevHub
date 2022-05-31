import {
    Button,
    Divider,
    Heading,
    HStack,
    Icon,
    Input,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { HiOutlineChat, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
  import { products } from './_data'
  import { ProductItem } from './ProductItem'
  
  export const OrderSummary = () => (
    <Stack
      spacing={{
        base: '6',
        md: '10',
      }}
    >
      <Heading size="md">Order Summary</Heading>
      <Stack spacing="8">
        <Stack spacing="6">
          {products.slice(0, 2).map((product) => (
            <>
              <ProductItem product={product} />
              <Divider />
            </>
          ))}
        </Stack>
  
        
        <Stack spacing="6">
          <Stack spacing="3">
            <Stack direction="row" justify="space-between">
              <Text color={useColorModeValue('gray.600', 'gray.300')}>Subtotal</Text>
              <Text color={useColorModeValue('black', 'white')}>$100000.00</Text>
            </Stack>
          </Stack>
          <Divider />
          <Stack direction="row" justify="space-between">
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color={useColorModeValue('gray.700', 'gray.200')}
            >
              Order Total
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color={useColorModeValue('black', 'white')}>
              $100000.00
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing="8">
        <Button colorScheme="blue" size="lg" py="7">
          <Link to='/checkout'>Place Order</Link>
        </Button>
        <Stack spacing="3">
          <Text fontSize="sm" color={useColorModeValue('gray.700', 'gray.200')}>
            Have questions? or Need help to complete your order?
          </Text>
          <HStack
            spacing="8"
            color={useColorModeValue('blue.500', 'blue.200')}
            fontWeight="semibold"
          >
            <HStack>
              <Icon as={HiOutlineMail} boxSize="5" />
              <Text>Email</Text>
            </HStack>
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  )