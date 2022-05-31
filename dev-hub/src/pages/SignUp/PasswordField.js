import {
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    useDisclosure,
    useMergeRefs,
  } from '@chakra-ui/react'
  import React from 'react'
  import { HiEye, HiEyeOff } from 'react-icons/hi'
  
  export const PasswordField = React.forwardRef(({ onChange, value }, ref) => {
    const { isOpen, onToggle } = useDisclosure()
    const inputRef = React.useRef(null)
    const mergeRef = useMergeRefs(inputRef, ref)
  
    const onClickReveal = () => {
      onToggle()
  
      if (inputRef.current) {
        inputRef.current.focus({
          preventScroll: true,
        })
      }
    }
  
    return (
      <>
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="link"
              aria-label={isOpen ? 'Mask password' : 'Reveal password'}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            id="password"
            ref={mergeRef}
            name="password"
            value={value}
            onChange={onChange}
            placeholder='*******'
            type={isOpen ? 'text' : 'password'}
            autoComplete="current-password"
            required
          />
        </InputGroup>
      </>
    )
  })
  PasswordField.displayName = 'PasswordField'