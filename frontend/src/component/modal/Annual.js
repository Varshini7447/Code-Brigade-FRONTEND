import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Button,
  Flex,
  VStack,
  HStack,
  Divider,
  Center,
  Icon,
} from '@chakra-ui/react';
import { BiRadioCircle } from 'react-icons/bi';

function SubscriptionAnnual() {
  const [today, setToday] = useState('');
  const [trialEndDate, setTrialEndDate] = useState('');
  const [billingStartDate, setBillingStartDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const sevenDaysLater = new Date(currentDate);
    sevenDaysLater.setDate(currentDate.getDate() + 7);

    const currentDateString = currentDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    const trialEndString = sevenDaysLater.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    setToday(currentDateString);
    setTrialEndDate(trialEndString);
    setBillingStartDate(trialEndString);
  }, []);

  return (
    <Center h="100vh" bg="gray.50">
      <VStack
        spacing={6}
        maxW="sm"
        w="full"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={6}
        bg="white"
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold" color="blue.600">
            Fullbody Exercises - Annual ₹1200.00
          </Text>
        </Box>

        <VStack spacing={4} align="stretch">
          <HStack justify="space-between">
            <HStack>
              <Icon as={BiRadioCircle} color="blue.500" />
              <Text fontWeight="bold" color="gray.700">
                Starting today
              </Text>
            </HStack>
            <Text color="gray.500">7-day free trial</Text>
          </HStack>
          <HStack justify="space-between">
            <HStack>
              <Icon as={BiRadioCircle} color="gray.500" />
              <Text fontWeight="bold" color="gray.700">
                Starting {billingStartDate}
              </Text>
            </HStack>
            <Text color="gray.700">₹100.00/month</Text>
          </HStack>
        </VStack>

        <VStack spacing={2} align="stretch" fontSize="sm" color="gray.500">
          <Text>• Enjoy your 7-day free trial</Text>
          <Text>• You won't be charged if you cancel before {trialEndDate}</Text>
          <Text>• Let's begin today</Text>
        </VStack>

        <Divider />

        <HStack justify="space-between" w="full">
          <Button
            as="a"
            href="/BasicUsage"
            colorScheme="blue"
            borderRadius="md"
            _hover={{ bg: 'blue.600' }}
          >
            Change
          </Button>
        </HStack>

        <Button
          as="a"
          href="/PaymentPage"
          mt={4}
          width="full"
          colorScheme="blue"
          borderRadius="md"
          _hover={{ bg: 'blue.600' }}
        >
          Continue
        </Button>
      </VStack>
    </Center>
  );
}

export default SubscriptionAnnual;