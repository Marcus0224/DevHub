import { FormControl, FormLabel, HStack, useRadioGroup } from '@chakra-ui/react'
import * as React from 'react'
import { ColorPickerOption } from './ColorPickerOption'

export const SecondaryColorPicker = (props) => {
  const { options, rootProps, hideLabel, label, ...rest } = props
  const { getRadioProps, getRootProps, value } = useRadioGroup(rest)
  const selectedOption = options.find((option) => option.value === value)
  return (
    <FormControl {...rootProps}>
      {!hideLabel && (
        <FormLabel fontSize="sm" fontWeight="medium">
          {label ?? `Secondary Color: ${selectedOption?.label ?? '-'}`}
        </FormLabel>
      )}
      <HStack {...getRootProps()}>
        {options.map((option) => (
          <ColorPickerOption
            key={option.label}
            color={option.value}
            {...getRadioProps({
              value: option.value,
            })}
          />
        ))}
      </HStack>
    </FormControl>
  )
}
