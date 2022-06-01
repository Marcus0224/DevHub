import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  useColorModeValue, Textarea, Checkbox
} from '@chakra-ui/react'
import * as React from 'react'
import { PrimaryColorPicker } from './PrimaryColorPicker'
import { PriceTag } from './PriceTag'
import { Promos } from './Promos'

import { TertiaryColorPicker } from './TertiaryColorPicker'
import { SecondaryColorPicker } from './SecondaryColorPicker'

export const SingleProduct = () => {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        spacing="16"
      >
        <Box maxW="sm">
          <Stack spacing="8">
            <Stack spacing="4">
              <Stack>
                <Heading size="lg" fontWeight="medium">
                  Ecommerce Site
                </Heading>
              </Stack>
              <Stack spacing="1">
                <PriceTag
                  price={50000}
                  currency="USD"
                  rootProps={{
                    fontSize: 'xl',
                  }}
                />
              </Stack>
              <Text color={useColorModeValue('gray.600', 'gray.400')}>
                With a sleek design and a captivating essence, we'll build an ecommerce site that will have your customers coming back for more.
              </Text>
            </Stack>
            <Stack>
            </Stack>
            <Stack>
                <Heading size="md" fontWeight="small">
                  Choose your website's color scheme.
                </Heading>
              </Stack>
            <Stack>
              <PrimaryColorPicker
                defaultValue="Red"
                options={[
                  {
                    label: 'Red',
                    value: '#FF0000',
                  },
                  {
                    label: 'Orange',
                    value: '#FF7F00',
                  },
                  {
                    label: 'Yellow',
                    value: '#FFFF00',
                  },
                  {
                    label: 'Green',
                    value: '#00FF00',
                  },
                  {
                    label: 'Blue',
                    value: '#0000FF',
                  },
                  {
                    label: 'Indigo',
                    value: '#4B0082',
                  },
                  {
                    label: 'Violet',
                    value: '#9400D3',
                  },
                ]}
              />

            </Stack>
            <Stack>
              <SecondaryColorPicker
                defaultValue="Red"
                options={[
                  {
                    label: 'Red',
                    value: '#FF0000',
                  },
                  {
                    label: 'Orange',
                    value: '#FF7F00',
                  },
                  {
                    label: 'Yellow',
                    value: '#FFFF00',
                  },
                  {
                    label: 'Green',
                    value: '#00FF00',
                  },
                  {
                    label: 'Blue',
                    value: '#0000FF',
                  },
                  {
                    label: 'Indigo',
                    value: '#4B0082',
                  },
                  {
                    label: 'Violet',
                    value: '#9400D3',
                  },
                ]}
              />

            </Stack>
            <Stack>
              <TertiaryColorPicker
                defaultValue="Red"
                options={[
                  {
                    label: 'Red',
                    value: '#FF0000',
                  },
                  {
                    label: 'Orange',
                    value: '#FF7F00',
                  },
                  {
                    label: 'Yellow',
                    value: '#FFFF00',
                  },
                  {
                    label: 'Green',
                    value: '#00FF00',
                  },
                  {
                    label: 'Blue',
                    value: '#0000FF',
                  },
                  {
                    label: 'Indigo',
                    value: '#4B0082',
                  },
                  {
                    label: 'Violet',
                    value: '#9400D3',
                  },
                ]}
              />

            </Stack>
            <Stack>
            <Checkbox defaultChecked>Surprise me</Checkbox>
            </Stack>
            <Stack>
                <Heading size="md" fontWeight="small">
                  Please provide any additional details about your website.
                </Heading>
              </Stack>
            <Stack>
            <Textarea placeholder='products, themes, fonts, etc...' />
            </Stack>
            <HStack
              spacing={{
                base: '4',
                md: '8',
              }}
              align="flex-end"
              justify="space-evenly"
            >
            </HStack>
            <Button colorScheme="blue" size="lg">
              Add to cart
            </Button>
            <Promos />
          </Stack>
        </Box>
        <Box flex="1">
          <Stack spacing="8">
            <AspectRatio ratio={4 / 3}>
              <Image
                src="https://i.ibb.co/6ZKHtxD/ecom-Display3.png&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80"
                alt="Ecommerce site example 1"
                fallback={<Skeleton />}
              />
            </AspectRatio>
            <AspectRatio ratio={4 / 3}>
              <Image
                src="https://i.ibb.co/GtJ0wL3/ecom-Display2.png&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80"
                alt="Ecommerce site example 2"
                fallback={<Skeleton />}
              />
            </AspectRatio>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}