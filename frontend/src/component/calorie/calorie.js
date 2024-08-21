

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {
//   ChakraProvider,
//   Box,
//   Button,
//   Text,
//   Heading,
//   CircularProgress,
//   CircularProgressLabel,
//   HStack,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
// } from '@chakra-ui/react';

// const CalorieTracker = () => {
//   const [foodItems, setFoodItems] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [totalCalories, setTotalCalories] = useState(0);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const fetchFoodItems = async () => {
//       try {
//         const response = await fetch('http://localhost:9000/api/food-items');
//         const data = await response.json();
//         console.log(data)
//         setFoodItems(data);
//         console.log(foodItems)
//       } catch (error) {
//         console.error('Error fetching food items:', error);
//       }
//     };

//     fetchFoodItems();
//   }, []);

//   const addItem = (item) => {
//     setSelectedItems((prev) => [...prev, item]);
//     setTotalCalories((prev) => prev + item.Calories);
//   };

//   const storeCalories = async () => {
//     try {
//       const response = await axios.post('http://localhost:9000/api/store-calories', { totalCalories });
//       setMessage(response.data.message);
//     } catch (error) {
//       console.error('Error storing calories:', error);
//       setMessage('An error occurred while storing calories.');
//     }
//   };

//   const handleSend = async () => {
//     try {
//       // Send calorie count to backend
//       await storeCalories();

//       // Clear the selected items and total calories after successful send
//       setSelectedItems([]);
//       setTotalCalories(0);
//       setMessage(''); // Clear the message
//     } catch (error) {
//       console.error('Error sending data:', error);
//       setMessage('An error occurred while sending the data.');
//     }
//   };

//   return (
//     <ChakraProvider>
//       <Box
//         p={5}
//         bg="black"
//         color="white"
//         minHeight="100vh"
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         position="relative"
//       >
//         <Heading mb={4}>Calorie Tracker</Heading>
//         <HStack spacing={8} width="100%" maxW="1200px">
//           {/* Fixed Menu */}
//           <Box
//             position="fixed"
//             top="20px"
//             left="20px"
//             zIndex="1"
//             bg="black"
//             color="white"
//             p={2}
//             borderRadius="md"
//             boxShadow="lg"
//             width="300px"
//             height="auto"
//           >
//             <Menu>
//               <MenuButton as={Button} colorScheme="teal" variant="outline" width="100%">
//                 Select Food Item
//               </MenuButton>
//               <MenuList
//                 bg="gray.800"
//                 color="white"
//                 maxHeight="400px"
//                 overflowY="auto"
//                 border="none"
//               >
//                 {foodItems.map((item, index) => (
//                   <MenuItem
//                     key={index}
//                     closeOnSelect={false}
//                     bg="gray.700"
//                     _hover={{ bg: "gray.600" }}
//                     _focus={{ bg: "gray.700" }}
//                   >
//                     <HStack justifyContent="space-between" width="100%">
//                       <Text>{item.FoodItem}</Text>
//                       <Button size="sm" colorScheme="teal" variant="outline" onClick={() => addItem(item)}>
//                         Add
//                       </Button>
//                     </HStack>
//                   </MenuItem>
//                 ))}
//               </MenuList>
//             </Menu>
//           </Box>

//           {/* Selected Food Items */}
//           <Box
//             flex="1"
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             bg="gray.800"
//             borderRadius="md"
//             p={4}
//             boxShadow="lg"
//             maxWidth="600px"
//             width="100%"
//             ml="340px" // Adjust margin to prevent overlap with the fixed menu
//             maxHeight="calc(100vh - 60px)"
//             overflowY="auto"
//           >
//             <Text fontSize="lg" mb={4}>Selected Food Items:</Text>
//             <Box width="100%">
//               {selectedItems.map((item, index) => (
//                 <Text key={index} mb={2} color="gray.300">{`${item.FoodItem} - ${item.Calories} kcal`}</Text>
//               ))}
//             </Box>
//           </Box>

//           {/* Fixed Circular Progress */}
//           <Box
//             position="fixed"
//             right="20px"
//             top="50%"
//             transform="translateY(-50%)"
//             p={4}
//             zIndex="1"
//             bg="black"
//             color="white"
//             borderRadius="md"
//             boxShadow="lg"
//           >
//             <CircularProgress
//               value={(totalCalories / 3000) * 100}
//               color="green.400"
//               size="200px"
//               thickness="12px"
//             >
//               <CircularProgressLabel fontSize="lg">
//                 {`${totalCalories} kcal`}
//               </CircularProgressLabel>
//             </CircularProgress>
//           </Box>
//         </HStack>

//         {/* Final Message with Send Button */}
//         {selectedItems.length > 0 && (
//           <Box
//             position="fixed"
//             bottom="20px"
//             left="50%"
//             transform="translateX(-50%)"
//             bg="gray.800"
//             color="white"
//             p={4}
//             borderRadius="md"
//             boxShadow="lg"
//             display="flex"
//             alignItems="center"
//             justifyContent="space-between"
//             width="300px"
//           >
//             <Text fontSize="lg">{message || 'Today\'s calorie count: ' + totalCalories}</Text>
//             <Button colorScheme="teal" onClick={handleSend}>
//               Send
//             </Button>
//           </Box>
//         )}
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default CalorieTracker;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ChakraProvider,
  Box,
  Button,
  Text,
  Heading,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Link,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { api } from '../actions/api';

const CalorieTracker = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch(api+`/api/food-items`);
        const data = await response.json();
        setFoodItems(data);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };

    fetchFoodItems();
  }, []);

  const addItem = (item) => {
    setSelectedItems((prev) => [...prev, item]);
    setTotalCalories((prev) => prev + item.Calories);
  };

  const storeCalories = async () => {
    try {
      const response = await axios.post(api+`/api/store-calories`, { totalCalories });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error storing calories:', error);
      setMessage('An error occurred while storing calories.');
    }
  };

  const handleSend = async () => {
    try {
      // Send calorie count to backend
      await storeCalories();

      // Clear the selected items and total calories after successful send
      setSelectedItems([]);
      setTotalCalories(0);
      setMessage(''); // Clear the message
    } catch (error) {
      console.error('Error sending data:', error);
      setMessage('An error occurred while sending the data.');
    }
  };

  return (
    <ChakraProvider>
      <Box
        p={5}
        bg="black"
        color="white"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
      >
        {/* Navigation Bar */}
        <Flex 
          as="nav" 
          bg="teal" 
          color="white" 
          padding="1rem" 
          justifyContent="space-around" 
          alignItems="center"
          width="100%"
          position="fixed"
          top="0"
          zIndex="1000"
        >
          <Link as={NavLink} to="/" _hover={{ textDecoration: 'none' }} fontWeight="bold" onClick={()=>{window.location.href='/circularLinks'}} >Home</Link>
          <Link as={NavLink} to="/dashboard" _hover={{ textDecoration: 'none' }} fontWeight="bold"  onClick={()=>{window.location.href='/students'}} >Dashboard</Link>
          <Link as={NavLink} to="/exercise" _hover={{ textDecoration: 'none' }} fontWeight="bold" onClick={()=>{window.location.href='/VideoDropdowns'}}>Exercise</Link>
        </Flex>

        <Box
          pt="60px" // Adjust padding top to account for the fixed navbar
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
        >
          <Heading mb={4}>Calorie Tracker</Heading>
          <HStack spacing={8} width="100%" maxW="1200px">
            {/* Fixed Menu */}
            <Box
              position="fixed"
              top="20px"
              left="20px"
              zIndex="1"
              bg="black"
              color="white"
              p={2}
              borderRadius="md"
              boxShadow="lg"
              width="300px"
              height="auto"
            >
              <Menu>
                <MenuButton as={Button} colorScheme="teal" variant="outline" width="100%" position={"relative"} top={"50px"}  >
                  Select Food Item
                </MenuButton>
                <MenuList
                  bg="gray.800"
                  color="white"
                  maxHeight="400px"
                  overflowY="auto"
                  border="none"
                >
                  {foodItems.map((item, index) => (
                    <MenuItem
                      key={index}
                      closeOnSelect={false}
                      bg="gray.700"
                      _hover={{ bg: "gray.600" }}
                      _focus={{ bg: "gray.700" }}
                    >
                      <HStack justifyContent="space-between" width="100%">
                        <Text>{item.FoodItem}</Text>
                        <Button size="sm" colorScheme="teal" variant="outline" onClick={() => addItem(item)}>
                          Add
                        </Button>
                      </HStack>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>

            {/* Selected Food Items */}
            <Box
              flex="1"
              display="flex"
              flexDirection="column"
              alignItems="center"
              bg="gray.800"
              borderRadius="md"
              p={4}
              boxShadow="lg"
              maxWidth="600px"
              width="100%"
              ml="340px" // Adjust margin to prevent overlap with the fixed menu
              maxHeight="calc(100vh - 60px)"
              overflowY="auto"
            >
              <Text fontSize="lg" mb={4}>Selected Food Items:</Text>
              <Box width="100%">
                {selectedItems.map((item, index) => (
                  <Text key={index} mb={2} color="gray.300">{`${item.FoodItem} - ${item.Calories} kcal`}</Text>
                ))}
              </Box>
            </Box>

            {/* Fixed Circular Progress */}
            <Box
              position="fixed"
              right="20px"
              top="50%"
              transform="translateY(-50%)"
              p={4}
              zIndex="1"
              bg="black"
              color="white"
              borderRadius="md"
              boxShadow="lg"
            >
              <CircularProgress
                value={(totalCalories / 3000) * 100}
                color="green.400"
                size="200px"
                thickness="12px"
              >
                <CircularProgressLabel fontSize="lg">
                  {`${totalCalories} kcal`}
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
          </HStack>

          {/* Final Message with Send Button */}
          {selectedItems.length > 0 && (
            <Box
              position="fixed"
              bottom="20px"
              left="50%"
              transform="translateX(-50%)"
              bg="gray.800"
              color="white"
              p={4}
              borderRadius="md"
              boxShadow="lg"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="300px"
            >
              <Text fontSize="lg">{message || 'Today\'s calorie count: ' + totalCalories}</Text>
              <Button colorScheme="teal" onClick={handleSend}>
                Send
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default CalorieTracker;
