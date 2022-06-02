import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    useBreakpointValue,
    useColorModeValue,
    Text,
    Center,
  } from '@chakra-ui/react'
  import React, { useState } from 'react'
  import { Logo } from './Logo'
  import { Link } from 'react-router-dom'
  import { PasswordField } from './PasswordField'
  import { useMutation } from '@apollo/client'
  import { ADD_USER } from '../../utils/mutations'
  import Auth from '../../utils/auth'
  
export const SignUp = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // use try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
      
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleErrorMessage = (error) => {
    let missingSlots = [];
    let alreadyInUse = []
    if (error.message.includes("`email` is required")) {
      missingSlots.push('Email is required');
    }
    if (error.message.includes("`username` is required")) {
      missingSlots.push('Username is required');
    }
    if (error.message.includes("`password` is required")) {
      missingSlots.push('Password is required');
    }
    if (error.message.includes("duplicate", "username")) {
      alreadyInUse.push('Username is already in use');
    }
    if (error.message.includes("duplicate", "email")) {
      alreadyInUse.push('Email is already in use');
    }
    return missingSlots.join(', ') + ' ' + alreadyInUse.join(', ');

  }

  return (
    <Container
      maxW="lg"
      py={{
        base: '12',
        md: '12',
      }}
      px={{
        base: '0',
        sm: '8',
      }}
    >
      <Stack spacing="1">
        <Stack spacing="6">
        
          <Stack
            spacing={{
              base: '2',
              md: '3',
            }}
            textAlign="center"
          >
            <Heading
              size={useBreakpointValue({
                base: 'xs',
                md: 'sm',
              })}
            >
              Sign up to access our catalog
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Already have an account?</Text>
              <Button variant="link" colorScheme="blue">
                <Link to='/login'>Log in</Link>
              </Button>
            </HStack>
           
          </Stack>
        </Stack>
        <Box
          py={{
            base: '0',
            sm: '8',
          }}
          px={{
            base: '4',
            sm: '10',
          }}
          bg={useBreakpointValue({
            base: 'transparent',
            sm: 'bg-surface',
          })}
          boxShadow={{
            base: 'none',
            sm: useColorModeValue('md', 'md-dark'),
          }}
          borderRadius={{
            base: 'none',
            sm: 'xl',
          }}
        >
          {error && (
            <Center
              bg='red.100'
              p='10px'
              borderRadius='25px'
              marginBottom='5px'>
              Sign up failed: {handleErrorMessage(error)}
            </Center>
          )}
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor='username'>Username</FormLabel>
                <Input 
                  id='username'
                  name='username'
                  type='username' 
                  placeholder='Your username'
                  value={formState.username}
                  onChange={handleChange}
                />
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input 
                  id="email"
                  name='email'
                  type="email"
                  placeholder='Your email'
                  value={formState.email}
                  onChange={handleChange}
                />
                <PasswordField 
                  onChange={handleChange}
                  value={formState.password}
                  />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
            </HStack>
            <Stack spacing="6">
              <Button variant="primary" onClick={handleFormSubmit}>Sign up</Button>
              <HStack>
                <Divider />
                <Divider />
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}