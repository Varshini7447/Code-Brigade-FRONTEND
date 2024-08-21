import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Text, Button, Flex, Radio, RadioGroup, Stack, Image, Center } from '@chakra-ui/react';

function SubscriptionCard() {
  const [plan, setPlan] = useState('monthly'); // Default to monthly
  const navigate = useNavigate();

  const handleStartTrial = () => {
    if (plan === 'monthly') {
      navigate('/SubscriptionDetails');
    } else if (plan === 'annual') {
      navigate('/SubscriptionAnnual');
    }
  };

  return (
    <Center h="100vh">
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="gray.50">
        {/* Image Section */}
        <Image src="image.png" alt="Subscription Plan" />

        {/* Content Section */}
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Text
              color="blue.600"
              fontWeight="bold"
              fontSize="lg"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Happy and Energetic Workouts
            </Text>
          </Box>

          <Text mt={2} color="gray.500">
            Watch a great selection of full-body exercises on our website.
          </Text>

          <Box mt={4}>
            <Text fontWeight="bold" color="blue.600">
              ✓ Unlock energetic workout videos
            </Text>
            <Text>✓ HD Quality & No Ads</Text>
            <Text>✓ Watch exclusively on our website</Text>
          </Box>

          {/* Pricing Section */}
          <RadioGroup value={plan} onChange={setPlan} mt={4}>
            <Stack spacing={3}>
              <Radio value="annual">
                <Box>
                  <Text fontWeight="bold" color="gray.700">
                    Annual
                  </Text>
                  <Text color="gray.500">
                    <Text as="span" color="blue.600">
                      Save 16%
                    </Text>
                  </Text>
                  <Text fontWeight="bold" color="gray.700" mt={1}>
                    ₹100.59 per month
                  </Text>
                </Box>
              </Radio>
              <Radio value="monthly">
                <Box>
                  <Text fontWeight="bold" color="gray.700">
                    Monthly
                  </Text>
                  <Text fontWeight="bold" color="gray.700" mt={1}>
                    ₹150.00 per month
                  </Text>
                </Box>
              </Radio>
            </Stack>
          </RadioGroup>

          {/* Button Section */}
          <Button
            mt={6}
            width="full"
            colorScheme="blue"
            borderRadius="md"
            _hover={{ bg: 'blue.600' }}
            onClick={handleStartTrial}
          >
            Start Free Trial
          </Button>

          <Text mt={2} fontSize="xs" color="gray.500" textAlign="center">
            Cancel at any time. After the free trial, you'll be charged for the plan selected.{" "}
            <Text as="span" color="blue.500">
              Terms of Use
            </Text>{" "}
            apply.
          </Text>
        </Box>
      </Box>
    </Center>
  );
}

export default SubscriptionCard;