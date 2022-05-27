import React from 'react';
import { Button, Box, Flex, Text, Center } from '@chakra-ui/react';

const Landing = () => {
    return (
        <section>
            <Center maxW='80%' bg='lightgrey' height='xl' margin='auto'>
                <Box w='60%' height='50%' bg='white' borderRadius='20'>
                    <Flex flexWrap='wrap' justifyContent='center' flexDirection='column' alignContent='center' alignItems='center'>
                    <Text 
                        fontWeight='bold'
                        fontSize='xxx-large'
                        >
                        See what we can create for you
                    </Text>
                    <Button
                        p='10'
                        colorScheme='teal'
                        variant='solid'
                        >
                        See our templates
                    </Button>
                    </Flex>
                </Box>
            </Center>
        </section>
    );
}

export default Landing;