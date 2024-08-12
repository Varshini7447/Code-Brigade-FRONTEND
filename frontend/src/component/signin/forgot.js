// import React from 'react';
// import { Box, Button, FormControl, FormLabel, Input, FormHelperText, VStack, Heading } from '@chakra-ui/react';
// import axios from 'axios'
// import { useState } from 'react';
// import { api } from '../actions/api';
// const ForgotPasswordPage = () => {
//   const [Email,setName]=useState("")
//   const [NewPassword,setNewPassword]=useState("")
//   const [ConfirmPassword,setConfirmPassword]=useState("")
//   const Forgot=async()=>{
//     await axios.post(api+"/forgot",{Email,NewPassword,ConfirmPassword})
//     .then((res)=>{
//         if(res){
//             console.log(res)
//             alert("updated sucessfully")
//         } else {
//             alert("user not found")
//             // window.location.href="/signup"
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
//           <Heading as="h2" size="lg" textAlign="center">Reset Password</Heading>
//           <FormControl id="email" isRequired>
//             <FormLabel>Email Address</FormLabel>
//             <Input type='email' onChange={(e)=>setName(e.target.value)}  />
//             <FormHelperText>We'll never share your email.</FormHelperText>
//           </FormControl>
//           <FormControl id="new-password" isRequired>
//             <FormLabel>New Password</FormLabel>
//             <Input type='password'  onChange={(e)=>setNewPassword(e.target.value)} />
//           </FormControl>
//           <FormControl id="confirm-password" isRequired>
//             <FormLabel>Confirm Password</FormLabel>
//             <Input type='password' onChange={(e)=>setConfirmPassword(e.target.value)}  />
//           </FormControl>
//           <Button colorScheme="teal" size="lg" width="full" onClick={()=>Forgot()}>
//             Update
//           </Button>
//         </VStack>
//       </Box>
//     </Box>
//   );
// };

// export default ForgotPasswordPage;
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { api } from "../actions/api";

export const ForgotPasswordPage = () => {
  const [Email, setEmail] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const Forgotpassword = async () => {
    if (Email && NewPassword && ConfirmPassword) {
      if (NewPassword !== ConfirmPassword) {
        alert("Passwords do not match");
        return;
      }
      await axios
        .post(api + "/forgot", { Email, NewPassword })
        .then((res) => {
          if (res.data.message) {
            console.log(res);
            alert("Password reset successful");
            //window.location.href = "/signin";
          } else {
            alert("Error resetting password");
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
        color={"white"}
        border={"1px solid white"}
      >
        <VStack spacing={4} align="stretch">
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText color={"white"}>
              We'll never share your email.
            </FormHelperText>
          </FormControl>

          <FormControl id="new-password" isRequired>
            <FormLabel>New Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter new password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </FormControl>

          <FormControl id="confirm-password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Confirm new password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>

          <Button
            onClick={Forgotpassword}
            colorScheme="teal"
            width="full"
            backgroundColor="blue.500"
            _hover={{ backgroundColor: "blue.600" }}
          >
            Reset Password
          </Button>

        </VStack>
      </Box>
    </HStack>
  );
};

export default ForgotPasswordPage;
