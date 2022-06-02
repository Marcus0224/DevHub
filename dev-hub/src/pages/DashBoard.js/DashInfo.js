import { Box, Heading, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Info = (props) => {
  const { label, value, ...boxProps } = props
  return (
    <Box
      px={{
        base: '4',
        md: '1',
      }}
      py={{
        base: '5',
        md: '6',
      }}
      bg="bg-surface"
      borderRadius="lg"
      boxShadow={useColorModeValue('md', 'sm-dark')}
      {...boxProps}
    >
      <Stack>
        <Text fontSize="sm" color="muted">
          {label}
        </Text>
        <Heading
          size={useBreakpointValue({
            base: 'sm',
            md: 'md',
          })}
        >
          {value}
        </Heading>
      </Stack>
    </Box>
  )
}