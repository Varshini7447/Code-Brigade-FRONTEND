
// import { Box, Button, FormControl, FormLabel, Input, FormHelperText, VStack, Heading, Link, Text } from '@chakra-ui/react';
import { Box, Button, FormControl, FormLabel, Input, FormHelperText, VStack, HStack, Radio, RadioGroup, Stack, Text, Link } from '@chakra-ui/react';
import axios from 'axios'
import { useState } from 'react';
import { api } from '../actions/api';
export const SignupPage = () => {
  const [Email, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [Gender, setGender] = useState("")
  const Signup = async () => {
    if (Email && Password && firstName && lastName && Gender) {
      await axios.post(api + "/signup", { Email, Password, firstName, lastName, Gender })
        .then((res) => {
          if (res) {
            console.log(res)
            alert("register sucessfully")
          } else {
            alert("fill the data")
            // window.location.href="/signin"
          }
        })
        .catch((e) => console.log(e))
    }
    else {
      alert("Enter all details")
    }
  }
  return (
    // <Box 
    //   display="flex" 
    //   justifyContent="center" 
    //   alignItems="center" 
    //   height="100vh" 
    //   bg="gray.50"
    // >
    //   <Box 
    //     p={8} 
    //     width="400px" 
    //     borderWidth={1} 
    //     borderRadius="lg" 
    //     bg="white"
    //     boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1), 0px 6px 20px rgba(0, 0, 0, 0.15)" // Updated box shadow
    //   >
    //     <VStack spacing={4} align="stretch">
    //       <Heading as="h2" size="lg" textAlign="center">Sign Up</Heading>
    //       <FormControl id="first-name" isRequired>
    //         <FormLabel>First Name</FormLabel>
    //         <Input type='text'onChange={(e)=>setFirstName(e.target.value)} />
    //       </FormControl>
    //       <FormControl id="last-name" isRequired>
    //         <FormLabel>Last Name</FormLabel>
    //         <Input type='text' onChange={(e)=>setLastName(e.target.value)}/>
    //       </FormControl>
    //       <FormControl id="email" isRequired>
    //         <FormLabel>Email Address</FormLabel>
    //         <Input type='email'onChange={(e)=>setName(e.target.value)} />
    //         <FormHelperText>We'll never share your email.</FormHelperText>
    //       </FormControl>
    //       <FormControl id="password" isRequired>
    //         <FormLabel>Password</FormLabel>
    //         <Input type='password' onChange={(e)=>setPassword(e.target.value)}/>
    //         <FormHelperText>We'll never share your password.</FormHelperText>
    //       </FormControl>
    //         {/* <FormHelperText>
    //           <Link href="#" color="teal.500">Forgot password?</Link>
    //         </FormHelperText>
    //       </FormControl> */}
    //       <Button colorScheme="teal" size="lg" width="full" onClick={()=>Signup()}>
    //         Sign Up
    //       </Button>
    //       <Text textAlign="center" mt={4}>
    //         Already have an account?
    //         <Link href="/signin" color="teal.500">signin</Link>
    //       </Text>
    //     </VStack>
    //   </Box>
    // </Box>
    <HStack
      height="100vh"
      backgroundImage="url('signup.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      padding={"150px"}
       //boxShadow="rgb(139, 204, 230) 10px,0px,5px,10px"
    >
      <Box
        width="40%"
        padding="8"
        borderRadius="lg"
       boxShadow="lg"
        className='signup'
        color={"white"}
        border={"1px solid white"}
       
      >
        <VStack spacing={4} align="stretch">
          <FormControl id="firstname" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="First Name" type='text' onChange={(e) => setFirstName(e.target.value)} />
          </FormControl>

          <FormControl id="lastname" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Last Name" type='text' onChange={(e) => setLastName(e.target.value)} />
          </FormControl>

          <FormControl as="fieldset">
            <FormLabel as="legend">Gender</FormLabel>
            <RadioGroup>
              {/* onChange={setGender} value={gender} */}
              <Stack direction="row">
                <Radio value="male" onChange={(e) => setGender(e.target.value)}>Male</Radio>
                <Radio value="female" onChange={(e) => setGender(e.target.value)}>Female</Radio>
                <Radio value="other" onChange={(e) => setGender(e.target.value)}>Other</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Email" onChange={(e) => setName(e.target.value)} />
            <FormHelperText color={"white"}>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <FormHelperText color={"white"}>We'll never share your password.</FormHelperText>
          </FormControl>

          <Button onClick={() => Signup()}
            colorScheme="teal"
            width="full"
            backgroundColor="blue.500"
            _hover={{ backgroundColor: "blue.600" }}
          >
            Sign Up
          </Button>
          <Text textAlign="center" mt={4}>
            Already have an account?
            <Link href="/signin" color="skyblue">signin</Link>
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
};

export default SignupPage;
