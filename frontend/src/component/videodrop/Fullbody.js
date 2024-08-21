import React from 'react';
import { 
  ChakraProvider, 
  Box, 
  Button, 
  Flex, 
  Text 
} from '@chakra-ui/react';

const Fullbody = () => {
  
  const videos = [
    { 
      id: 'video1', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/3g4zO58B9Jw?si=95ygZNEQEk1YnjIn" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '15 Min Best Full Body Workout Program' 
    },
    { 
      id: 'video2', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          color='white'
          src="https://www.youtube.com/embed/dzsTgmGxlO8?si=rFcJczvp5vBO0sDu" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description:'30 MIN FULL BODY HOME WORKOUT (No Equipment)'
    },
    { 
      id: 'video3', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/0l4aGiJ9Eks?si=3GjsSVGYRaX5AaW6" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '14 Min Full Body Workout (No Equipment)' 
    },
    { 
      id: 'video4', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/XJMAyu19ZXo?si=UQ72HiUDbv9RQzrx" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '15 Min Full Body Workout - Rapid Results - Summer Ready' 
    },
    { 
      id: 'video5', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/C5P_9uzj1Cs?si=sLGmrbspnKfHtuWL" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'BEST 15 Min Beginner Workout For Fat Burning (No Jumping HIIT)' 
    },
    { 
      id: 'video6', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/agvdkRc_img?si=QMsXWk4zEMpwhaKJ" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'Do This Workout Every Evening - 10 Minute Full Body To Get In Shape' 
    },
    { 
      id: 'video7', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/Yo2y3tilVts?si=WJJGHe-amlbmo3io" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'Full Body Weight Loss Workout Routine [Burn Fat At Home]' 
    },
    { 
      id: 'video8', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/1ZOMl4prYzI?si=lWDMrg6WgpBnkCGL" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '10-Day Lose Body Fat Challenge: Home Workout' 
    },
    { 
      id: 'video9', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/prxBFaHr9so?si=cK1FihTeQ-StTp45" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '30-MIN HIGH INTENSITY CARDIO with Warm Up - FULL BODY WORKOUT' 
    },
  ];

  return (
    <ChakraProvider>
      <Flex direction="column" align="center" mt={0} minH="100vh" >

        <Flex as="nav" bg=" black" position="fixed"   top="0"  w="100%" overflowX="scroll" p={4} sx={{
          '&::-webkit-scrollbar': { display: 'none' }
        }} justify="space-between">
          <Button as="a" href="/VideoDropdowns" bg=" black " color="white" mx={2} sx={{
            transition: 'background-color 0.3s ease',
            '&:hover': { bg: '	#080808' }
          }}>
            Back
          </Button>
          <Flex justify="center" flex="1">
            <Button as="a" href="/Fullbody" bg="black " color="white" mx={2} sx={{
              transition: 'background-color 0.3s ease',
              '&:hover': { bg: '#080808' }
            }}>
              Full Body
            </Button>
            <Button as="a" href="/Upperbody" bg=" black " color="white" mx={2} sx={{
              transition: 'background-color 0.3s ease',
              '&:hover': { bg: '	#080808' }
            }}>
              Upper Body
            </Button>
            <Button as="a" href="/Lowerbody" bg=" black " color="white" mx={2} sx={{
              transition: 'background-color 0.3s ease',
              '&:hover': { bg: '	#080808' }
            }}>
              Lower Body
            </Button>
            <Button as="a" href="/Dance" bg=" black " color="white" mx={2} sx={{
              transition: 'background-color 0.3s ease',
              '&:hover': { bg: '	#080808' }
            }}>
              Dance
            </Button>
          </Flex>
        </Flex>

        
        <img 
          src='fullbody.jpg' 
          alt="Main example"
          width="100%" 
          style={{ boxShadow: '0 0 0 rgba(0, 0, 0, 0.1)', marginBottom: '30px', height: '450px' }}
        />
        <Text 
  as="h2" 
  fontSize="2xl" 
  fontWeight="bold" 
  mt="80px"  
  mb={4}
>
  Fullbody Exercise
</Text>

        <Flex wrap="wrap" justify="center" gap={6} width="100%" maxW="1200px">
          {videos.map(video => (
            <Box key={video.id} flex="1 1 30%" maxW="30%" sx={{
              borderRadius: '8px',
              mb: 6,
              p: 3,
              backgroundColor: 'white',
            }}>
              
              {video.iframe}
              <Text mt={3} color="black" textAlign="center">
                {video.description}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>
      
</ChakraProvider>
);
};

export { Fullbody };