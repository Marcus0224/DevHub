import React from 'react';
import { Button, Box, Flex, Center, Heading, Icon, Spacer } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import Typewriter from 'typewriter-effect';

const Landing = () => {
  return (
    <section>
        <section>
      <Center maxW="100%" bg="linear-gradient(315deg, #114979 0%, #adbc92 100%)" height="xl" margin="auto" boxShadow='dark-lg'>
        <Box w="60%" maxW='50%' maxH='70%' borderRadius="20" bg="rgba(255,255,255,.50)" boxShadow='dark-lg'>
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            flexDirection="column"
            alignContent="center"
            alignItems="center"
          >
            <Heading fontWeight="bold" fontSize="xxx-large">
                <Flex flexWrap="wrap"
            flexDirection="column"
            alignItems="center">
              See what we can do...
              {/* <Typewriter
                options={{
                  strings: ['create for you...', 'inspire...', 'enhance...', 'DO...'],
                  autoStart: true,
                  loop: true
                }}
              /> */}
              </Flex>
            </Heading>
            <Button p="10" colorScheme="teal" variant="solid" marginTop='20px' marginBottom='50px'>
              <Link to="/catalog">See templates
              <Spacer />
              <Icon
                as={FaArrowRight}
                marginTop='10px'
              /></Link>
            </Button>
          </Flex>
        </Box>
      </Center>
    </section>

    {/* <section>
        <Box maxW="100%" height="xl" margin="auto" marginLeft='5%' marginRight='5%' marginTop='5%'>
            <Flex
                wrap='wrap'
                justify='space-between'>
                <Box>
                    <Box>
                        <Heading>What can we do?</Heading>
                        <Heading size='lg' fontWeight='light'>Whatever your heart desires!</Heading>
                        <Test />
                    </Box>
                </Box>
                <Box>
                    <Box border='2px solid #114979' borderRadius='20' width='100%' height='100%'>
                        <Heading fontSize='xl'>
                            Testimonials
                        </Heading>
                    </Box>   
                </Box>
            </Flex>
        </Box>
    </section> */}
    </section>
  );
};

export default Landing;
