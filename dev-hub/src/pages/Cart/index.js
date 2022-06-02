import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { CartItem } from './CartItem';
import { CartOrderSummary } from './CartOrderSummary';
import { cartData, getTotal } from '../../utils/_data';
import { Link } from 'react-router-dom';

function Cart() {
  const [totalPrice, setTotalPrice] = useState(getTotal());

  const deleteItem = event => {
    setTotalPrice(getTotal());
  };

  return (
    <Box
      maxW={{
        base: '6xl',
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
      bg = 'RGBA(0, 0, 0, 0.04)'
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
            Shopping Cart {cartData() ? `${cartData().length}` : '0'} item
            {cartData().length === 1 ? '' : 's'}
          </Heading>

          <Stack spacing="6">
            {cartData() ? (
              cartData().map((item, index) => (
                <CartItem
                  key={item.id}
                  item={item}
                  index={index}
                  deleteItem={deleteItem}
                />
              ))
            ) : (
              <></>
            )}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary totalPrice={totalPrice} />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')} to="/catalog">
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
}

export default Cart;
