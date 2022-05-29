import { CloseButton, Flex, Link, Select, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'

const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}

export const CartItem = (props) => {
  const {
    name,
    description,
    quantity,
    imageUrl,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
  } = props.item;

  const [cartQuantity, setQuantity] = useState(quantity);
  const updateQuantity = (event) => {
    const amount = event.target.value;
    setQuantity(amount);
    props.updateQuantity(props.item, amount);
  }
  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        description={description}
        image={imageUrl}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <QuantitySelect
          value={cartQuantity}
          onChange={(e) => {
            updateQuantity(e)
          }}
        />
        <PriceTag price={price} currency={currency} />
        <CloseButton aria-label={`Delete ${name} from cart`} onClick={onClickDelete} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  )
}