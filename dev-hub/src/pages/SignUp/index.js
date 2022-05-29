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
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { Logo } from './Logo'
  import { PasswordField } from './PasswordField'
  
  export const SignUp = () => (
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
      <Stack spacing="1">
        <Stack spacing="6">
          <Logo />
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
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
            </HStack>
            <Stack spacing="6">
              <Button variant="primary">Sign up</Button>
              <HStack>
                <Divider />
                <Divider />
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )