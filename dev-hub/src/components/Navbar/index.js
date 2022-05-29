import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FiMenu } from 'react-icons/fi'
  import { Link } from 'react-router-dom'
  import { Logo } from '../Footer/Logo'
  
  export const NavBar = () => {
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    });

    return (
      <Box
        as="section"
        pb={{
          base: '12',
          md: '24',
        }}
      >
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
          <Container
            py={{
              base: '4',
              lg: '5',
            }}
          >
            <HStack spacing="10" justify="space-between">
              <Logo />
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {['Catalog', 'Cart'].map((item) => (
                      <Button key={item}>
                        <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                      </Button>
                    ))}
                  </ButtonGroup>
                  <HStack spacing="3">
                    <Button variant="ghost">
                      <Link to={`/login`}>Sign in</Link>
                    </Button>
                    <Button variant="primary">
                      <Link to={`/signup`}>Sign up</Link>
                    </Button>
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }