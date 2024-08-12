import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Radio,
  RadioGroup,
  Stack,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

function SignupForm() {
  const [gender, setGender] = useState("");

  return (
    <HStack
      height="100vh"
      backgroundImage="url('/path/to/fitness-tracker-background.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      justifyContent="center"
    >
      <Box
        width="50%"
        padding="8"
        borderRadius="lg"
        backgroundColor="rgba(255, 255, 255, 0.9)"
        boxShadow="lg"
      >
        <VStack spacing={4} align="stretch">
          <FormControl id="firstname" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="First Name" />
          </FormControl>

          <FormControl id="lastname" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Last Name" />
          </FormControl>

          <FormControl as="fieldset">
            <FormLabel as="legend">Gender</FormLabel>
            <RadioGroup onChange={setGender} value={gender}>
              <Stack direction="row">
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Other</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="Email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password" />
          </FormControl>

          <Button
            colorScheme="teal"
            width="full"
            backgroundColor="blue.500"
            _hover={{ backgroundColor: "blue.600" }}
          >
            Sign Up
          </Button>
        </VStack>
      </Box>

      <Box width="50%">
        <Image
          src="/path/to/side-image.jpg"
          alt="Fitness illustration"
          objectFit="cover"
          height="100%"
          borderRadius="lg"
        />
      </Box>
    </HStack>
  );
}

export default SignupForm;
