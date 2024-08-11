
import { Box, Button, FormControl, FormLabel, Input, FormHelperText, VStack, Heading,Text,Link } from '@chakra-ui/react';
import axios from 'axios'
import { useState } from 'react';
import { api } from '../actions/api';
export const SignInPage = () => {
  const [Email,setName]=useState("")
  const [password,setPassword]=useState("")
  const Signin=async()=>{
    await axios.post(api+"/signin",{Email,password})
    .then((res)=>{
        if(res){
            console.log(res)
            sessionStorage.auth=JSON.stringify(res?.data?.values)
            window.location.href = "/students"
        } else {
            alert("user not found")
            window.location.href="/signup"
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
          <Heading as="h2" size="lg" textAlign="center">Sign In</Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type='email' onChange={(e)=>setName(e.target.value)} />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type='password' onChange={(e)=>setPassword(e.target.value)} />
            <FormHelperText>We'll never share your password.</FormHelperText>
          </FormControl>
          <FormControl>
          <FormHelperText>
              <Link href="/forgot" color="teal.500">Forgot password?</Link>
            </FormHelperText>
          </FormControl>
          <Button colorScheme="teal" size="lg" width="full" onClick={Signin}>
            Sign In
          </Button>
          <Text textAlign="center" mt={4}>
            Don't have an account?
            <Link href="/signup" color="teal.500">Signup</Link>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default SignInPage;
