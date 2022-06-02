import { Box, Heading, Flex, Link as LinkText, Center } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectSuccess = () => {
    return (
        <Center>
        <Box>
            <Heading>Thank you!</Heading>
            <Flex> 
            Your order will be looked at by our team. Please visit your .<Link to='/dashboard'><LinkText color='blue'>dashboard</LinkText></Link>. for updates.
            </Flex>
        </Box>
        </Center>
    )
}