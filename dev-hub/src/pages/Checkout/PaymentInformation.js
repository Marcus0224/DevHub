import {
    Box,
    Center,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Select,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import {  MasterCardLogo,  VisaLogo } from './PaymentIcons'
  
  export const PaymentInformation = () => (
    <Stack
      spacing={{
        base: '6',
        md: '10',
      }}
    >
      <Heading size="md">Payment Information</Heading>
      
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          spacing="6"
        >
          
            <Stack spacing="1.5">
              <Box>
                <Text color={useColorModeValue('black', 'white')} fontWeight="medium">
                  Credit Card
                </Text>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  Pay with credit card via Stripe
                </Text>
              </Box>
              <HStack>
                <Center
                  borderWidth="1px"
                  width="8"
                  height="5"
                  bg={useColorModeValue('transparent', 'gray.50')}
                  borderColor={useColorModeValue('gray.300', 'gray.50')}
                  borderRadius="base"
                >
                  <VisaLogo />
                </Center>
                <Center
                  borderWidth="1px"
                  width="8"
                  height="5"
                  bg={useColorModeValue('transparent', 'gray.50')}
                  borderColor={useColorModeValue('gray.300', 'gray.50')}
                  borderRadius="base"
                >
                  <MasterCardLogo />
                </Center>
              </HStack>
            </Stack>

        </Stack>

      <Stack spacing="8">
        <Stack direction="row" spacing="6">
          <FormControl id="card-number">
            <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>
              Credit card number
            </FormLabel>
            <Input
              name="card-number"
              placeholder="Card number"
              focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
            />
          </FormControl>
          <FormControl id="card-name">
            <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Name on card</FormLabel>
            <Input
              name="card-name"
              placeholder="Card name"
              focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
            />
          </FormControl>
        </Stack>
        <HStack spacing="6">
          <FormControl id="card-expiry" width="full">
            <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>Expiry date</FormLabel>
            <HStack spacing="3">
              <Select
                aria-label="Select Month"
                focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
              >
                <option>01</option>
              </Select>
              <Select
                aria-label="Select Year"
                focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
              >
                <option>2022</option>
              </Select>
            </HStack>
          </FormControl>
          <FormControl id="card-cvc">
            <FormLabel color={useColorModeValue('gray.700', 'gray.200')}>CVV/CVC</FormLabel>
            <Input
              name="card-cvc"
              placeholder="CVC"
              focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
            />
          </FormControl>
        </HStack>
      </Stack>
    </Stack>
  )