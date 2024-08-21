import React from 'react';
import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box
      position="relative"
      bgImage="url('https://t4.ftcdn.net/jpg/03/98/21/13/360_F_398211353_krEgbHs5lHZJ8OtPjZENUt92loqQXsJ7.jpg')" 
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
      minH="100vh"
      p="10px 10%"
    >
      <Image
        src="profile.jpg" 
        alt="Logo"
        position="absolute"
        top="20px"
        left="20px"
        w="150px"
        height={"150px"}
      />

      <Flex
        mt="18%"
        maxW="600px"
        flexDir="column"
        align="center"
        justify="center"
        textAlign="center"
      >
        <Heading as="h1" fontSize="70px" color="#222" mb={8} className="anim">
          WELCOME BUDDIES...
        </Heading>
        <Text fontSize="20px" color="#333" mb={6} className="anim">
          Welcome to our platform!   
          Transform your goals into reality with our user-friendly fitness tracker. Track every step every rep because progress starts with your action.
          Let's start your journey with us.
        </Text>
        <Button onClick={()=>{window.location.href='/signup'}}
          variant="solid"
          colorScheme="pink"
          w="25%"
          p="14px 0" 
          borderRadius="30px"
          _hover={{ borderTopRightRadius: "30px" }}
        >
          Sign Up
        </Button>
      </Flex>
      <Image
        className="feature-img anim"
        position="absolute"
        bottom="0"
        right="10%"
        w="530px"
      />
    </Box>
  );
};

export { HomePage };