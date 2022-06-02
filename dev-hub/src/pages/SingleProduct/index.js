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
  useColorModeValue,
  Textarea,
  Checkbox,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { PrimaryColorPicker } from './PrimaryColorPicker';
import { PriceTag } from './PriceTag';
import { Promos } from './Promos';

import { TertiaryColorPicker } from './TertiaryColorPicker';
import { SecondaryColorPicker } from './SecondaryColorPicker';

import { addCartData } from '../../utils/_data';
import { useNavigate, useParams } from 'react-router-dom';
import { websiteTypes } from '../../utils/_data';

export const SingleProduct = () => {
  const { websiteType } = useParams();
  const websiteData = websiteTypes.filter(item => item.shortName === websiteType);
  const { 
    name,
    description,
    price,
    currency,
    imageUrl
  } = websiteData[0];
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    primaryColor: '',
    secondaryColor: '',
    tertiaryColor: '',
    surpriseMeBox: false,
    comments: '',
    title: ''
  });

  const handleChange = event => {
    const { name, value, checked } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'surpriseMeBox' ? checked : value,
    });
  };

  const handleColorChange = event => {
    const colorCategorySingleLetter =
      event.target.parentElement.parentElement.parentElement.textContent.substring(0, 1);
    const colorCategory =
      colorCategorySingleLetter === 'P'
        ? 'primaryColor'
        : colorCategorySingleLetter === 'S'
        ? 'secondaryColor'
        : 'tertiaryColor';
    setFormData({
      ...formData,
      [colorCategory]: event.target.value,
    });
  };

  const colorOptions = [
    {
      label: 'Red',
      value: 'Red',
    },
    {
      label: 'Orange',
      value: 'Orange',
    },
    {
      label: 'Yellow',
      value: 'Yellow',
    },
    {
      label: 'Green',
      value: 'LimeGreen',
    },
    {
      label: 'Blue',
      value: 'Blue',
    },
    {
      label: 'Indigo',
      value: 'Indigo',
    },
    {
      label: 'Violet',
      value: 'Violet',
    },
  ];

  const handleFormSubmit = () => {
    const dataToSave = {
      websiteType,
      price,
      userInput: formData,
    };
    if (dataToSave.userInput) {
      addCartData(dataToSave);
      navigate('/cart');
    } else {
      console.log('no data');
    }
  };

  return (
    <>
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
                    {name}
                  </Heading>
                </Stack>
                <Stack spacing="1">
                  <PriceTag
                    price={price}
                    currency={currency}
                    rootProps={{
                      fontSize: 'xl',
                    }}
                  />
                </Stack>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  {description}
                </Text>
              </Stack>
              <Stack></Stack>
              <Stack>
                <Heading size="md" fontWeight="small">
                  Choose your website's color scheme.
                </Heading>
              </Stack>
              <Stack onChange={handleColorChange}>
                <PrimaryColorPicker options={colorOptions} />
              </Stack>
              <Stack onChange={handleColorChange}>
                <SecondaryColorPicker options={colorOptions} />
              </Stack>
              <Stack onChange={handleColorChange}>
                <TertiaryColorPicker options={colorOptions} />
              </Stack>
              <Stack>
                <Checkbox
                  name="surpriseMeBox"
                  value={formData.surpriseMeBox}
                  onChange={handleChange}
                >
                  Surprise me
                </Checkbox>
              </Stack>
              <Stack>
                <Heading size="md" fontWeight="small">
                  Please provide additional information about your website.
                </Heading>
                <Heading size="sm" fontWeight="small">
                  Name
                </Heading>
                <Input
                  placeholder='ex. "Google"'
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
                <Heading size="sm" fontWeight="small">
                  Additional details and what your vision is
                </Heading>
                <Textarea
                  placeholder="products, themes, fonts, etc..."
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                />
              </Stack>
              <HStack
                spacing={{
                  base: '4',
                  md: '8',
                }}
                align="flex-end"
                justify="space-evenly"
              ></HStack>
              <Button colorScheme="blue" size="lg" onClick={handleFormSubmit}>
                Add to cart
              </Button>
              <Promos />
            </Stack>
          </Box>
          <Box flex="1">
            <Stack spacing="8">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={imageUrl}
                  alt="Site example 1"
                  fallback={<Skeleton />}
                />
              </AspectRatio>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={imageUrl}
                  alt="Site example 2"
                  fallback={<Skeleton />}
                />
              </AspectRatio>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
