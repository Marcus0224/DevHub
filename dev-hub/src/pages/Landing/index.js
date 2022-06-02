import React from 'react';
import { Button, Box, Flex, Text, Center, Circle } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Landing = () => {
  return (
    <section>
        <Circle bg='black' zIndex='9999' width='100px' height='100px' display='none'>
            
            </Circle>
      <Center maxW="100%" bg="lightgrey" height="xl" margin="auto">
        <Box w="60%" height="50%" maxH='25vh' bg="white" borderRadius="20">
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            flexDirection="column"
            alignContent="center"
            alignItems="center"
          >
            <Text fontWeight="bold" fontSize="xxx-large">
                <Flex flexWrap="wrap"
            flexDirection="column"
            alignItems="center">
              See what we can
              <Typewriter
                options={{
                  strings: ['create for you...', 'inspire...', 'enhance...', 'DO...'],
                  autoStart: true,
                  loop: true
                }}
              />
              </Flex>
            </Text>
            <Button p="10" colorScheme="teal" variant="solid" marginTop='10px'>
              <Link to="/catalog">See our templates</Link>
            </Button>
          </Flex>
        </Box>
      </Center>
    </section>
  );
};

export default Landing;
