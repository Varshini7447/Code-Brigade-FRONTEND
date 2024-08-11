
// import { Box, Button, FormControl, FormLabel, Input, FormHelperText, VStack, Heading, Link, Text } from '@chakra-ui/react';
import { Box, Button, FormControl, FormLabel, Input, FormHelperText, VStack, Heading, Link, Text } from '@chakra-ui/react';
import axios from 'axios'
import { useState } from 'react';
import { api } from '../actions/api';
export const SignupPage = () => {
  const [Email,setName]=useState("")
  const [Password,setPassword]=useState("")
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const Signup=async()=>{
    await axios.post(api+"/signup",{Email,Password,firstName,lastName})
    .then((res)=>{
        if(res){
            console.log(res)
            alert("register sucessfully")
        } else {
            alert("fill the data")
            // window.location.href="/signin"
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
        width="400px" 
        borderWidth={1} 
        borderRadius="lg" 
        bg="white"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1), 0px 6px 20px rgba(0, 0, 0, 0.15)" // Updated box shadow
      >
        <VStack spacing={4} align="stretch">
          <Heading as="h2" size="lg" textAlign="center">Sign Up</Heading>
          <FormControl id="first-name" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input type='text'onChange={(e)=>setFirstName(e.target.value)} />
          </FormControl>
          <FormControl id="last-name" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input type='text' onChange={(e)=>setLastName(e.target.value)}/>
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type='email'onChange={(e)=>setName(e.target.value)} />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type='password' onChange={(e)=>setPassword(e.target.value)}/>
            <FormHelperText>We'll never share your password.</FormHelperText>
          </FormControl>
            {/* <FormHelperText>
              <Link href="#" color="teal.500">Forgot password?</Link>
            </FormHelperText>
          </FormControl> */}
          <Button colorScheme="teal" size="lg" width="full" onClick={()=>Signup()}>
            Sign Up
          </Button>
          <Text textAlign="center" mt={4}>
            Already have an account?
            <Link href="/signin" color="teal.500">signin</Link>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default SignupPage;
