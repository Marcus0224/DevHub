import {
    Box,
    Flex,
    Heading,
    HStack,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import React, { useState } from 'react'
  import { CartItem } from '../../components/CartItem'
  import { CartOrderSummary } from './CartOrderSummary'
  import { cartData } from '../../utils/_data'
  import { Link } from 'react-router-dom'
  
function Cart () {
  const [totalPrice, setTotalPrice] = useState(cartData.map(item => item.price*item.quantity).reduce((prev, curr) => prev + curr, 0));

  const updateQuantity = (itemToUpdate, amount) => {
    cartData.map(item => {
      if (item === itemToUpdate) {
        return item.quantity = amount;
      }
    });
    setTotalPrice(cartData.map(item => item.price*item.quantity).reduce((prev, curr) => prev + curr, 0));
  }

  return (
    <Box
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
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
          lg: 'row',
        }}
        align={{
          lg: 'flex-start',
        }}
        spacing={{
          base: '8',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({cartData.length} items)
          </Heading>
  
          <Stack spacing="6">
            {cartData.map((item) => (
              <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
            ))}
          </Stack>
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary totalPrice={totalPrice}/>
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')} to='/catalog'>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}

export default Cart;