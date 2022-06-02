import { ButtonGroup, Container, IconButton, Stack, Text, Center, theme } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
//import { Logo } from './Logo'
import themes from '../../Styles/theme'

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