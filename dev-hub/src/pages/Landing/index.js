import React from 'react';
import { Button, Flex, Text, Container, Box } from '@chakra-ui/react';

const Landing = () => {
    return (
        <section>
            <Container maxW='80%' bg='lightgrey' height='xl' margin='auto'>
                <Flex w='60%' height='50%' bg='white' flexWrap='wrap' margin='auto' justify='center' borderRadius='20'>
                    <Text 
                        fontWeight='bold'
                        fontSize='xxx-large'
                        margin='auto'
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
            </Container>
        </section>
    );
}

export default Landing;