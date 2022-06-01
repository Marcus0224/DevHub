import { CloseButton, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'

export const CartItem = (props) => {
  const {
    name,
    description,
    imageUrl,
    currency,
    price
  } = props.item;
  const { deleteItem } = {...props};

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
        <PriceTag price={price} currency={currency} />
        <CloseButton aria-label={`Delete ${name} from cart`} onClick={deleteItem} />
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
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  )
}