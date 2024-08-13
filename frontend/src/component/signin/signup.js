
// import { Box, Button, FormControl, FormLabel, Input, FormHelperText, VStack, Heading,Text,Link } from '@chakra-ui/react';
// import axios from 'axios'
// import { useState } from 'react';
// import { api } from '../actions/api';
// export const SignInPage = () => {
//   const [Email,setName]=useState("")
//   const [password,setPassword]=useState("")
//   const Signin=async()=>{
//     await axios.post(api+"/signin",{Email,password})
//     .then((res)=>{
//         if(res){
//             console.log(res)
//             sessionStorage.auth=JSON.stringify(res?.data?.values)
//             window.location.href = "/students"
//         } else {
//             alert("user not found")
//             window.location.href="/signup"
//         }
//     })
//     .catch((e)=>console.log(e))
//   }
//   return (
//     <Box 
//       display="flex" 
//       justifyContent="center" 
//       alignItems="center" 
//       height="100vh" 
//       bg="gray.50"
//     >
//       <Box 
//         p={8} 
//         maxWidth="400px" 
//         borderWidth={1} 
//         borderRadius="lg" 
//         boxShadow="lg" 
//         bg="white"
//       >
//         <VStack spacing={4} align="stretch">
//           <Heading as="h2" size="lg" textAlign="center">Sign In</Heading>
//           <FormControl id="email" isRequired>
//             <FormLabel>Email Address</FormLabel>
//             <Input type='email' onChange={(e)=>setName(e.target.value)} />
//             <FormHelperText>We'll never share your email.</FormHelperText>
//           </FormControl>
//           <FormControl id="password" isRequired>
//             <FormLabel>Password</FormLabel>
//             <Input type='password' onChange={(e)=>setPassword(e.target.value)} />
//             <FormHelperText>We'll never share your password.</FormHelperText>
//           </FormControl>
//           <FormControl>
//           <FormHelperText>
//               <Link href="/forgot" color="teal.500">Forgot password?</Link>
//             </FormHelperText>
//           </FormControl>
//           <Button colorScheme="teal" size="lg" width="full" onClick={Signin}>
//             Sign In
//           </Button>
//           <Text textAlign="center" mt={4}>
//             Don't have an account?
//             <Link href="/signup" color="teal.500">Signup</Link>
//           </Text>
//         </VStack>
//       </Box>
//     </Box>
//   );
// };

// export default SignInPage;
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  VStack,
  HStack,
  Image, Link, Text
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { api } from "../actions/api";

export const SignInPage = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const Signin = async () => {
    if (Email && Password) {
      await axios
        .post(api + "/signin", { Email, Password })
        .then((res) => {
          if (res.data.message) {
            console.log(res);
            sessionStorage.auth=JSON.stringify(res?.data?.values)
            alert("Signin successful");
            window.location.href = "/students"
          } else {
            alert("Invalid credentials");
          }
        })
        .catch((e) => console.log(e));
    } else {
      alert("Enter all details");
    }
  };

  return (
    <HStack
      height="100vh"
      backgroundImage="url('signup.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      padding={"200px"}
    >
      <Box
        width="40%"
        padding="8"
        borderRadius="lg"
        boxShadow="lg"
        className="signin"
        color={"white"}
        border={"1px solid white"}
      >
        <VStack spacing={4} align="stretch">
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText color={"white"}>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText color={"white"}>We'll never share your password.</FormHelperText>
            <FormHelperText>
              <Link href="/forgot" style={{ color: "white" }}>
                Forgot password?
              </Link>
            </FormHelperText>
          </FormControl>

          <Button
            onClick={() => Signin()}
            colorScheme="teal"
            width="full"
            backgroundColor="blue.500"
            _hover={{ backgroundColor: "blue.600" }}
          >
            Sign In
          </Button>
          <Text textAlign="center" mt={4}>
            Don't have an account?
            <Link href="/signup" color="skyblue">Signup</Link>
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
};

export default SignInPage;
