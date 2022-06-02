import { ButtonGroup, Container, Stack, Text, Center, } from '@chakra-ui/react'
import * as React from 'react'

export const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{
      base: '12',
      md: '16',
    }}
    mt= {8}
    // maxW='container.lg'
  >
      <Center>

    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
      
    >
    
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} DevHub, Inc. All rights reserved.
      </Text>
    </Stack>
      </Center>
  </Container>
)