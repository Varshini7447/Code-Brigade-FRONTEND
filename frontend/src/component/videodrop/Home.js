import React from 'react';
import { ChakraProvider, Flex, Box, Button, Image, Text, Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex 
      as="nav" 
      bg="black" 
      w="100%" 
      p={4} 
      justify="space-between"
      position="fixed"
      top="0"
    >
      <Button as="a" href="/" bg=" black " color="white" mx={2} sx={{
            transition: 'background-color 0.3s ease',
            '&:hover': { bg: '	#080808' }
          }}>
            Back
          </Button>
      <Button as="a" href="/circularLinks" bg="black" color="white" width="50%" _hover={{ bg: "gray.700" }} >
        Home
      </Button>
      <Button as="a" href="/students" bg="black" color="white" width="50%" _hover={{ bg: "gray.700" }}>
        Dashboard
      </Button>
      <Button as="a" href="/VideoDropdowns" bg="black" color="white" width="50%" _hover={{ bg: "gray.700" }}>
        Exercise
      </Button>

    </Flex>
  );
};

const CircleLinks = () => {
  const circles = [
    { 
      id: 1, 
      imageSrc: 'sleep.png', 
      text: 'Sleep Reminder',
      link: '/sleep' 
    },
    { 
      id: 2, 
      imageSrc: 'water.png', 
      text: 'Water Reminder',
      link: '/water' 
    },
    { 
      id: 3, 
      imageSrc: 'calories.png', 
      text: 'Calorie Count',
      link: '/calorie' 
    },
  ];

  return (
    <ChakraProvider>
      <Navbar /> 
      <Flex 
        justify="center" 
        align="center" 
        gap={10} 
        mt={20} 
        wrap="wrap" 
        minH="100vh" 
        flexDirection="column" 
        bg="#FFF1D0" 
      >
        <Flex justify="center" align="center" gap={10} wrap="wrap">
          {circles.map(circle => (
            <Link key={circle.id} href={circle.link} textAlign="center" _hover={{ textDecoration: 'none' }}>
              <Box 
                width="300px" 
                height="300px" 
                bg="gray.200" 
                borderRadius="50%" 
                overflow="hidden" 
                mb={3}
                boxShadow="lg"
                _hover={{ boxShadow: 'xl' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image 
                  src={circle.imageSrc} 
                  alt={circle.text} 
                  width="100%" 
                  height="100%" 
                  objectFit="cover" 
                />
              </Box>
              <Text fontSize="xl" fontWeight="bold" color="black">
                {circle.text}
              </Text>
            </Link>
          ))}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export { CircleLinks };