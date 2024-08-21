import React, { useState } from 'react';
import { Box, Text, Radio, RadioGroup, Stack, Button, Flex, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaGooglePay } from "react-icons/fa"

function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState('GooglePay');
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePayment = () => {
    alert(`Payment initiated using ${selectedMethod}`);
  };

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <Box maxW="sm" mx="auto" mt={10} p={5} borderRadius="lg" boxShadow="md" bg="white">
      <Text fontSize="xl" fontWeight="bold" mb={4} textAlign="center">
        Payments
      </Text>

      <Text fontSize="md" color="gray.500" mb={4} textAlign="center">
        Preferred Mode
      </Text>

      <RadioGroup onChange={setSelectedMethod} value={selectedMethod}>
        <Stack direction="column" spacing={4}>
          {[
            { value: 'GooglePay', label: 'Google Pay', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR4ArUxtci1ip0bL0K9hs9QtwcJGy_gu9iYA&s', buttonText: 'Pay using Google Pay' },
            { value: 'Paytm', label: 'Paytm', imgSrc: 'https://i.pinimg.com/originals/db/42/53/db4253052cfc0f80ac281486c19f9d57.png', buttonText: 'Pay using Paytm' },
            { value: 'CreditCard', label: '**** 9999', imgSrc: 'https://t4.ftcdn.net/jpg/04/06/75/39/360_F_406753914_SFSBhjhp6kbHblNiUFZ1MXHcuEKe7e7P.jpg', buttonText: 'Pay using Credit Card' },
            { value: 'PhonePe', label: 'PhonePe UPI', imgSrc: 'upi.png', buttonText: 'Pay using PhonePe UPI' },
            { value: 'MobiKwik', label: 'MobiKwik', imgSrc: 'data:image/png;base64,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', buttonText: 'Pay using MobiKwik' },
            { value: 'CREDPay', label: 'CRED Pay', imgSrc: 'https://play-lh.googleusercontent.com/r2ZbsIr5sQ7Wtl1T6eevyWj4KS7QbezF7JYB9gxQnLWbf0K4kU7qaLNcJLLUh0WG-3pK=w240-h480-rw', buttonText: 'Pay using CRED Pay' },
          ].map((method) => (
            <label key={method.value} style={{ cursor: 'pointer', display: 'block' }}>
              <Box
                border="1px"
                borderColor="gray.200"
                borderRadius="md"
                p={3}
                width="100%"
                textAlign="left"
                onClick={() => setSelectedMethod(method.value)}
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <Radio value={method.value}>
                    <Flex alignItems="center">
                      <Image
                        boxSize="24px"
                        src={method.imgSrc}
                        alt={method.label}
                        mr={3}
                      />
                      <Box flex="1">
                        <Text>{method.label}</Text>
                      </Box>
                    </Flex>
                  </Radio>
                  <Button
                    colorScheme="purple"
                    size="sm"
                    width="auto"
                    ml={3}
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePayment();
                    }}
                  >
                    {method.buttonText}
                  </Button>
                </Flex>
              </Box>
            </label>
          ))}
        </Stack>
      </RadioGroup>

      <Button as="a" href="/PaymentProcessingBox"
        mt={6}
        width="full"
        colorScheme="purple"
        borderRadius="md"
        onClick={handlePayment}
      >
        Proceed to Pay
      </Button>

      {/* Back Button */}
      <Button as="a" href="/BasicUsage"
        mt={3}
        width="full"
        colorScheme="gray"
        borderRadius="md"
        
      >
        Back
      </Button>
    </Box>
  );
}

export default PaymentPage;