import { Flex, Spacer, Button, 
ButtonGroup, Heading, Box } from '@chakra-ui/react'



const NavBar = () => (
    <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>DevHub</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'>Sign Up</Button>
    <Button colorScheme='teal'>Log in</Button>
  </ButtonGroup>
</Flex>
)

export default NavBar