import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    Image,
    Center
  } from '@chakra-ui/react'
  import React, { useState } from 'react'
  import { useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'
  // import { Logo } from '../../assets/images/DevHub_logos_black.png'
  import { PasswordField } from './PasswordField'
  import { LOGIN_USER } from '../../utils/mutations'
  import Auth from '../../utils/auth';

  export const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;

      setFormState({
        ...formState,
        [name]: value,
      });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState }
        });
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    }

    return (
    <Container
      maxW="lg"
      py={{
        base: '12',
        md: '24',
      }}
      px={{
        base: '0',
        sm: '8',
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          {/* Put logo here */}
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
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                <Link to='/signup'>Sign up</Link>
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
              p='5px'
              borderRadius='25px'
              marginBottom='5px'>
              Invalid username or password! Please try again.
            </Center>
          )}
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl onSubmit={handleFormSubmit}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" placeholder='Your email' onChange={handleChange} />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="primary" onClick={handleFormSubmit}>Sign in</Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
    );
  }