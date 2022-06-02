import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { formatPrice } from './PriceTag';
import { deleteCartData } from '../../utils/_data';
import auth from '../../utils/auth';
import { Link, Navigate } from 'react-router-dom';

const OrderSummaryItem = props => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = ({ totalPrice }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = () => {
    // send localstorage to database
    // clear localstorage
    // go to success page
    <Navigate to='/success' />;
  }

  return (
    <>
      <Stack
        spacing="8"
        borderWidth="1px"
        rounded="lg"
        padding="8"
        width="full"
      >
        <Heading size="md">Order Summary</Heading>

        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={formatPrice(totalPrice)} />
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {formatPrice(totalPrice)}
            </Text>
          </Flex>
        </Stack>
        {(totalPrice > 0) && auth.loggedIn() ? (
          <>
        <Button
          colorScheme="blue"
          size="lg"
          fontSize="md"
          rightIcon={<FaArrowRight />}
          onClick={onOpen}
        >
          Send info
        </Button>
        <Text>
          This will send all the information entered in your cart to our
          development team.
        </Text>
        <Text>
          After we review, you will be contacted to go over designs and a more
          accurate price. Once we 'wow' you, payment will be collected and work
          will begin.
        </Text>
        <Text>We look forward to designing to your wants!</Text>
        </>
        ) : (
          <Tooltip label={`${!auth.loggedIn() ? 'Please sign in to continue' : 'Add items to your cart to continue'}`} shouldWrapChildren mt='1'>
          <Button
          disabled
          colorScheme="blue"
          size="lg"
          fontSize="md"
          rightIcon={<FaArrowRight />}
        >
          Send info
        </Button>
        </Tooltip>
        )}
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Confirm</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              Submitting this will send your cart information and email to our
              development team. Keep in mind requests can take 3-5 weeks to be
              fullfilled.
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                <Link to='/success'>Yes, send the info</Link>
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};
