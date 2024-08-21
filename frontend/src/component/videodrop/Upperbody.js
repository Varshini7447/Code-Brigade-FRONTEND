import React from 'react';
import { 
  ChakraProvider, 
  Box, 
  Button, 
  Flex, 
  Text 
} from '@chakra-ui/react';

const Upperbody = () => {
  
  const videos = [
    { 
      id: 'video1', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/Nu5K3a8nFUI?si=OH75wmNiCzQTOMC2" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'Lose Arm and Chest Fat - 20 Min At Home Upper Body Workout' 
    },
    { 
      id: 'video2', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          color='white'
          src="https://www.youtube.com/embed/CzyFv-0buVE?si=pnyC-HyjAvhPuFoF" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'TOTAL UPPER BODY WORKOUT: ARMS + CHEST + SHOULDERS + BACK' 
    },
    { 
      id: 'video3', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/6coSK5__cTE?si=r8rMuckdqHBO9d8p" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '20 Min Cardio Workout To Reduce Belly Fat And Get A Flat Stomach' 
    },
    { 
      id: 'video4', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src=" https://www.youtube.com/embed/qyZ_7nLTu2k?si=oz1oNJBTUYjGSLCA"
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '10 DAYS UPPER BODY CARDIO WORKOUT PLAN' 
    },
    { 
      id: 'video5', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/mDJtvDrik2Y?si=TdHdVR3gOYfFBoyR" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '20-MIN POWERFUL UPPER BODY WORKOUT: LOSE BRA FAT + ARM FAT' 
    },
    { 
      id: 'video6', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/ieWbrrl6tG8?si=W4TDmbYZqilHsJw9" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '15-DAY Chest + Belly + Arms Challenge - Lose Upper Body Fat At Home' 
    },
    { 
      id: 'video7', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/nOV9lP2O6kw?si=ShWApOJNlgymSXbf "
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: 'DAY 5: UPPER BODY CARDIO WORKOUT PLAN' 
    },
    { 
      id: 'video8', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/pk9XtAJmO80?si=oq_l077McZHj65RL" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '8 Simple Exercises To Get Rid Of Double Chin - Reduce Face Fat At Home' 
    },
    { 
      id: 'video9', 
      iframe: (
        <iframe 
          width="100%" 
          height="200px" 
          src="https://www.youtube.com/embed/GYVp-5Gu3aI?si=yBUJqcgWCjiJpg8e" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ), 
      description: '21 Day Challenge To Slim Down Your Face And Lose Chubby Cheeks' 
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
          src='upperbody.jpg' 
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
  Upperbody Exercise
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

export { Upperbody};