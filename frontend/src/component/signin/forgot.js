import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, FormHelperText, VStack, Heading } from '@chakra-ui/react';
import axios from 'axios'
import { useState } from 'react';
import { api } from '../actions/api';
const ForgotPasswordPage = () => {
  const [Email,setName]=useState("")
  const [NewPassword,setNewPassword]=useState("")
  const [ConfirmPassword,setConfirmPassword]=useState("")
  const Forgot=async()=>{
    await axios.post(api+"/forgot",{Email,NewPassword,ConfirmPassword})
    .then((res)=>{
        if(res){
            console.log(res)
            alert("updated sucessfully")
        } else {
            alert("user not found")
            // window.location.href="/signup"
        }
    })
    .catch((e)=>console.log(e))
  }
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      bg="gray.50"
    >
      <Box 
        p={8} 
        maxWidth="400px" 
        borderWidth={1} 
        borderRadius="lg" 
        boxShadow="lg" 
        bg="white"
      >
        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="lg" textAlign="center">Reset Password</Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type='email' onChange={(e)=>setName(e.target.value)}  />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl id="new-password" isRequired>
            <FormLabel>New Password</FormLabel>
            <Input type='password'  onChange={(e)=>setNewPassword(e.target.value)} />
          </FormControl>
          <FormControl id="confirm-password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input type='password' onChange={(e)=>setConfirmPassword(e.target.value)}  />
          </FormControl>
          <Button colorScheme="teal" size="lg" width="full" onClick={()=>Forgot()}>
            Update
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default ForgotPasswordPage;
