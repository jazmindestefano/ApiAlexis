import {FormControl, Input, FormLabel, Button, Text} from '@chakra-ui/react'
import React, {useState} from 'react'

const Form = () => {
    const [input, setInput] = useState('')
    const isError = input === ''
    return (
        <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' value={input} onChange={(e) => setInput(e.target.value) }/>
            <Button type={'submit'} isDisabled={!input}>Enviar</Button>

            {!isError ? (
        <Text fontSize={'12px'}>
          Enter the email you'd like to receive the newsletter on.
        </Text>
      ) : (
        <Text color={'red'} fontSize={'12px'}>Email is required.</Text>
      )}
            
        </FormControl>
    )
  }

export default Form