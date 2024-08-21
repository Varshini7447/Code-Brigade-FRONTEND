import React from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  Flex,
  Text
} from '@chakra-ui/react';

const VideoDropdowns = () => {

  const videos = [
    {
      id: 'video1',
      iframe: (
        <iframe
          width="100%"
          height="200px"
          src="https://www.youtube.com/embed/t69IPkfC4vw?si=8lC7mscy0L8A6e9K"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ),
      description: 'Warm Up Exercises Before Workout [Stretching Pre Workout]'
    },
    {
      id: 'video2',
      iframe: (
        <iframe
          width="100%"
          height="200px"
          color='white'
          src="https://www.youtube.com/embed/TtnpyBcxHSQ?si=mGR99N1kiVJKlPrO"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ),
      description: 'Burn Fat - Best 30 Min Home Workout Routine'
    },
    {
      id: 'video3',
      iframe: (
        <iframe
          width="100%"
          height="200px"
          src="https://www.youtube.com/embed/lS6qBCIVFws?si=l0s7XwmKPBNhoNIh"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ),
      description: 'Beginner Weight Loss Workout - Easy Exercises At Home'
    },
    {
      id: 'video4',
      iframe: (
        <iframe
          width="100%"
          height="200px"
          src="https://www.youtube.com/embed/DqAsrY3dalw?si=J84tzDA9KoObULJu"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ),
      description: '1000 CALORIE HOME WORKOUT [BODYWEIGHT EDITION]'
    },
    {
      id: 'video5',
      iframe: (
        <iframe
          width="100%"
          height="200px"
          src="https://www.youtube.com/embed/ddnvghXHlIA?si=2-umMA5mM_WfZeOP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ),
      description: '15 Min No Jumping Workout To Lose Weight At Home'
    },
    {
      id: 'video6',
      iframe: (
        <iframe
          width="100%"
          height="200px"
          src="https://www.youtube.com/embed/JYYSOBFOt4E?si=hriMcnP3cSJtG4js"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ),
      description: 'Aerobic Exercise At Home To Lose Weight'
    },
    {
      id: 'video7',
      iframe: (
        <iframe
          width="100%"
          height="200px"
          src="https://www.youtube.com/embed/LhL5SNZfnQs?si=F3ANqjdsmL31gdZm"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ),
      description: '14 Days Weight Loss Challenge - Home Workout Routine'
    },
    {
      id: 'video8',
      iframe: (
        <iframe
          width="100%"
          height="200px"
          src="https://www.youtube.com/embed/-eGBCDa4_Tg?si=szSASQ-f5pYD7NY7"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ),
      description: 'Do This Workout Every Morning - 11 Minute Total Body'
    },
    {
      id: 'video9',
      iframe: (
        <iframe
          width="100%"
          height="200px"
          src="https://www.youtube.com/embed/jDj0h5JfEiE?si=F8VlHe3kViX7wSiT"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: '2px solid black', borderRadius: '8px' }}
        ></iframe>
      ),
      description: '30 MIN TOTAL BODY NO JUMPING, NO REPEATS - HOME WORKOUT '
    },

  ];

  return (
    <ChakraProvider>
      <Flex direction="column" align="center" mt={0} minH="100vh" >

        <Flex as="nav" bg=" black" position="fixed" top="0" w="100%" overflowX="scroll" p={4} sx={{
          '&::-webkit-scrollbar': { display: 'none' }, textDecoration: "none"
        }} justify="space-between">
          <Button as="a" href="/circularlinks" bg=" black " color="white" mx={2} sx={{
            transition: 'background-color 0.3s ease',
            '&:hover': { bg: '	#080808' }
          }}>
            Back
          </Button>
          <Flex justify="center" flex="1">
            <Button as="a" href="/BasicUsage" bg="black " color="white" mx={2} sx={{
              transition: 'background-color 0.3s ease',
              '&:hover': { bg: '#080808' }
            }}>
              Full Body
            </Button>
            <Button as="a" href="/BasicUsage" bg=" black " color="white" mx={2} sx={{
              transition: 'background-color 0.3s ease',
              '&:hover': { bg: '	#080808' }
            }}>
              Upper Body
            </Button>
            <Button as="a" href="/BasicUsage" bg=" black " color="white" mx={2} sx={{
              transition: 'background-color 0.3s ease',
              '&:hover': { bg: '	#080808' }
            }}>
              Lower Body
            </Button>
            <Button as="a" href="/BasicUsage" bg=" black " color="white" mx={2} sx={{
              transition: 'background-color 0.3s ease',
              '&:hover': { bg: '	#080808' }
            }}>
              Dance
            </Button>
          </Flex>
        </Flex>
        <img
          src='pic2.jpg'
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
          Popular Videos
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

             
              <Text mt={3} color="black" textAlign="center" fontSize={20} >
                {video.description}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>

    </ChakraProvider>
  );
};

export { VideoDropdowns };