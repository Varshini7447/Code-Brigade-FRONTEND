import React from 'react';
import { 
  ChakraProvider, 
  Box, 
  Button, 
  Flex, 
  Text 
} from '@chakra-ui/react';

const Dance = () => {
  
  const videos = [
    { 
      id: 'video1', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/YrvxC4X-BTY?si=uYj0drVhxV9U5WDT" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '30 Min Full Body Dance Workout - Fitness Dance' 
    },
    { 
      id: 'video2', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          color='white'
          src="https://www.youtube.com/embed/6l1jyRu1TpM?si=nkCjhpSh5o91NvvU" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '15 Min Dance Workout - Burn Calories At Home' 
    },
    { 
      id: 'video3', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/DNMhMVhlWlA?si=ZqESdza0PQoNchW9" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'Happy Dance Workout - Exercise At Home' 
    },
    { 
      id: 'video4', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/gR05r2cJus0?si=yypUWn_DNLdshiTT" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '30-Min Full Body Dance Workout: Cardio + Legs + Arms Workout' 
    },
    { 
      id: 'video5', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/1lqRZ9bMjV0?si=j3nila0Y21CCs1Kp" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '15 Min Energy Boost Workout - Morning Dance Workout' 
    },
    { 
      id: 'video6', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/rMsTdazekmE?si=lvbi5U4C2k5bLbPZ" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '11 Minute Easy Weight Loss Dance Workout – NO JUMPING' 
    },
    { 
      id: 'video7', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/q-9cUwvvt9w?si=etmUU6yv2VpzH5sx" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'Easy to Follow Dance Workout – Cardio at Home' 
    },
    { 
      id: 'video8', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/TvZTp9BiClI?si=LVIK5L3fZ-lhSjN-" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'Lose Fat by Dancing at Home 🔥 Lean Legs & Flat Stomach' 
    },
    { 
      id: 'video8', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/Pyepplh9bDU?si=OHHebzuoKe4SAdNK" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'Dance & Be Happy: Discover why Exercise can Lift your Mood' 
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
          src='dance.png' 
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
  Dance Videos
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

export {Dance };