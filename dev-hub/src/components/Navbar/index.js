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
<<<<<<< HEAD
  //import { Logo } from '../Footer/Logo'
=======
  import { Link } from 'react-router-dom'
  import { Logo } from '../Footer/Logo'

  import Auth from '../../utils/auth'
>>>>>>> develop
  
  export const NavBar = () => {
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    });

    const logout = event => {
      event.preventDefault();
      Auth.logout();
    }

    return (
      <Box
        as="section"
        pb={{
          base: '12',
         
        }}
      >
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
          <Container
            py={{
              base: '4',
              lg: '8',
            }}
          >
<<<<<<< HEAD
            <HStack spacing="10" justify="space-between">
              {/* <Logo /> */}
              {isDesktop ? (
=======
            <HStack spacing="30" justify="space-around">
              <Logo />
              {/* {isDesktop ? ( */}
>>>>>>> develop
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {['Catalog', 'Cart'].map((item) => (
                      <Button key={item}>
                        <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                      </Button>
                    ))}
                  </ButtonGroup>
                  {Auth.loggedIn() ? (
                  <HStack spacing="3">
                    <Button variant="ghost">
                      <Link to={`/dashboard`}>Dashboard</Link>
                    </Button>
                    <Button variant="primary">
                      <Link to={`/`} onClick={logout}>Log out</Link>
                    </Button>
                  </HStack>
                  ) : (
                    <HStack spacing="3">
                    <Button variant="ghost">
                      <Link to={`/login`}>Sign in</Link>
                    </Button>
                    <Button variant="primary">
                      <Link to={`/signup`}>Sign up</Link>
                    </Button>
                  </HStack>
                  )}
                </Flex>
              {/* ) : ( */}
                {/* <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                /> */}
              {/* )} */}
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }