import React from 'react';
import { 
  ChakraProvider, 
  Box, 
  Button, 
  Flex, 
  Text 
} from '@chakra-ui/react';

const Lowerbody = () => {
  
  const videos = [
    { 
      id: 'video1', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/Eg0dW1R27v4?si=IOM3z-OGaAOJKhqU" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'The Best Leg Stretching Exercises' 
    },
    { 
      id: 'video2', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          color='white'
          src="https://www.youtube.com/embed/G3FFnnXibRk?si=sRQMLyS7JGdWVGY-"
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '10 Foam Roller Exercises For Sore Muscles to Recover From Workout' 
    },
    { 
      id: 'video3', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/SWwJiqa3VoE?si=19GWscFbOFZ0ziP7"
          title="YouTube videoa player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'The Best Bodyweight Exercises You Can Do at Home' 
    },
    { 
      id: 'video4', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/ZEOABk9F-o4?si=YA2_y6R1_GGz040P" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '12 Stretches to Do Every Day' 
    },
    { 
      id: 'video5', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/kQM7GTclPXA?si=5EaEP1bi-ue9RnA8" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'Lower Belly Fat Workout No Equipment' 
    },
    { 
      id: 'video6', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/FaiS-qZazi4?si=R4CzfLTKr7M_tM47"
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'Dumbbell Leg Workout for Strong Legs' 
    },
    { 
      id: 'video7', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/dGYL8Zl8l8s?si=LBkbdfMAQ4QGRQSG"
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'The Perfect Effective Workout for Slim and Lean Legs!' 
    },
    { 
      id: 'video8', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/i1TVIYC7XPU?si=wPMWQzUmm8XUNVML" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'The Best Leg Day Warm Up Exercises' 
    },
  ];

  return (
    <ChakraProvider>
      <Flex direction="column" align="center" mt={0} minH="100vh" >

        {/* Scrolling Nav Bar */}
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

        {/* Display the Image */}
        <img 
          src='lowerbody2.jpg' 
          alt="Main example"
          width="100%" 
          style={{ boxShadow: '0 0 0 rgba(0, 0, 0, 0.1)', marginBottom: '30px', height: '450px' }}
        />
        <Text 
  as="h2" 
  fontSize="2xl" 
  fontWeight="bold" 
  mt="80px"  // Add top margin to offset the fixed navbar height
  mb={4}
>
  Lowerbody Exercise
</Text>

        <Flex wrap="wrap" justify="center" gap={6} width="100%" maxW="1200px">
          {videos.map(video => (
            <Box key={video.id} flex="1 1 30%" maxW="30%" sx={{
              borderRadius: '8px',
              mb: 6,
              p: 3,
              backgroundColor: 'white',
            }}>
              {/* Embedded YouTube Video */}
              {video.iframe}

              {/* Text below the video */}
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

export { Lowerbody };