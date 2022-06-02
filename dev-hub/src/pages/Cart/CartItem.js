import {
  Center,
  CloseButton,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';
import { PriceTag } from './PriceTag';
import { CartProductMeta } from './CartProductMeta';

import { websiteTypes } from '../../utils/_data';
import { ColorPickerOption } from '../SingleProduct/ColorPickerOption';

import { deleteCartData } from '../../utils/_data';

export const CartItem = props => {
  const { websiteType } = props.item;
  const websiteData = websiteTypes.filter(
    item => item.shortName === websiteType
  );
  const { name, description, price, currency, imageUrl } = websiteData[0];

  const {
    comments,
    primaryColor,
    secondaryColor,
    tertiaryColor,
    surpriseMeBox,
    title,
  } = props.item.userInput;

  const deleteItem = () => {
    deleteCartData(props.index);
    props.deleteItem();
  };

  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta name={name} description={description} image={imageUrl} />
      <Center
        width="75%"
        height="100%"
        margin="30px"
        padding="15px"
        bg="lightgrey"
        borderRadius="25px"
      >
        <List spacing={3}>
          <ListItem>
            <Heading size={'xs'}>Website title:</Heading>
            {title}
          </ListItem>
          <ListItem>
            <Heading size={'xs'}>Color scheme chosen:</Heading>
            {surpriseMeBox ? (
              'We will choose the color scheme for you'
            ) : (
              <Flex>
                <ColorPickerOption
                  key={`${title}primary${primaryColor}`}
                  color={primaryColor}
                />
                <ColorPickerOption
                  key={`${title}secondary${primaryColor}`}
                  color={secondaryColor}
                />
                <ColorPickerOption
                  key={`${title}tertiary${primaryColor}`}
                  color={tertiaryColor}
                />
              </Flex>
            )}
          </ListItem>
          <ListItem>
            <Heading size={'xs'}>Comments made for the team:</Heading>
            {comments.length !== 0 ? <p>{comments}</p> : 'No comments made.'}
          </ListItem>
        </List>
      </Center>

      {/* Desktop */}
      <Flex
        justify="end"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <PriceTag price={price} currency={currency} />
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={deleteItem}
        />
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
  );
};
