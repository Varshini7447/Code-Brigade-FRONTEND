import React, { useState, useEffect } from 'react';
import {
    ChakraProvider, Box, Button, Text, Avatar, Stack, Modal, ModalOverlay,
    ModalContent, ModalCloseButton, ModalBody, useDisclosure, CircularProgress, CircularProgressLabel, Heading, Input
} from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { Profile } from './profile';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { api } from '../actions/api';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const [dailyData, setDailyData] = useState([]);
    const [weeklyData, setWeeklyData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([]);
    const [view, setView] = useState('daily'); 
    const userName=JSON.parse(sessionStorage?.auth).firstName
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [steps, setSteps] = useState(0);
    const [caloriesBurned, setCaloriesBurned] = useState(0);

    const CALORIES_PER_STEP = 0.04;

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (view === 'daily') {
                    response = await axios.get(api+`/api/daily-calories`);
                    setDailyData(response.data);
                } else if (view === 'weekly') {
                    response = await axios.get(api+`/api/weekly-calories`);
                    setWeeklyData(response.data);
                } else if (view === 'monthly') {
                    response = await axios.get(api+`/api/monthly-calories`);
                    setMonthlyData(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [view]);

    const calculateCaloriesBurned = () => {
        const burned = steps * CALORIES_PER_STEP;
        setCaloriesBurned(burned);
    };

    const getWeekdayName = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };

    const getMonthName = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'long' });
    };

    const getWeekLabel = (weekIndex) => `Week ${weekIndex + 1}`;

    const getChartData = (data, label) => {
        let labels = [];
        let values = data.map(d => d.totalCalories);

        if (view === 'daily') {
            labels = data.map(d => getWeekdayName(d.date));
        } else if (view === 'weekly') {
            labels = data.map((_, index) => getWeekLabel(index));
        } else if (view === 'monthly') {
            labels = data.map(d => getMonthName(d._id));
        }

        return {
            labels,
            datasets: [
                {
                    label,
                    data: values,
                    borderColor: 'rgba(75,192,192,1)',
                    borderWidth: 2,
                    pointRadius: 5,
                },
            ],
        };
    };
    const SignOut = () => {
        sessionStorage?.removeItem('auth')
        window.location.reload()
    }

    return (
        <ChakraProvider>
            <Box
                p={5}
                color="white"
                minHeight="100vh"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="flex-start"
                position="relative"
            >
                <Box width="60%" display="flex" flexDirection="column" alignItems="center">
                    <Box width="2000px" display="flex" justifyContent="center" alignItems="center" backgroundColor={"skyblue"} mb={4}>
                        <Avatar size="xl" height="150px" width="150px" left="270px"   name="User Name" src="profile.jpg" onClick={onOpen} />
                        <Button left={"850px"} top={"-40px"}  colorScheme='black'  color={"black"} backgroundColor={"white"} onClick={SignOut}>Logout</Button>
                    </Box>
                    <Text textAlign={"center"} fontFamily={"sans-serif"} color={"black"} left={"270px"} position={"relative"}  fontSize={"40px"} mb={4}>
                        Welcome, {userName}!
                    </Text>

                    <Box width="100%" maxW="1200px" mb={10}>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent minW="600px">
                                <ModalCloseButton />
                                <ModalBody display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <Avatar size="xl" height="150px" width="150px"   name="User Name" src="profile.jpg" onClick={onOpen} />
                                    <Profile />
                                </ModalBody>
                            </ModalContent>
                        </Modal>
                        <Stack direction="row" spacing={4} justifyContent="center" mb={4}>
                            <Button colorScheme="teal" onClick={() => setView('daily')}>
                                Daily View
                            </Button>
                            <Button colorScheme="teal" onClick={() => setView('weekly')}>
                                Weekly View
                            </Button>
                            <Button colorScheme="teal" onClick={() => setView('monthly')}>
                                Monthly View
                            </Button>
                        </Stack>
                        <Line
                            data={getChartData(
                                view === 'daily' ? dailyData : view === 'weekly' ? weeklyData : monthlyData,
                                `${view.charAt(0).toUpperCase() + view.slice(1)} Calorie Intake`
                            )}
                            options={{
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: view === 'daily' ? 'Weekday' : view === 'weekly' ? 'Week' : 'Month',
                                        },
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: 'Calories',
                                        },
                                        min: 0,
                                    },
                                },
                                plugins: {
                                    legend: {
                                        display: true,
                                        position: 'top',
                                    },
                                },
                            }}
                        />
                    </Box>
                </Box>

                <Box
                    width="35%"
                    bg="white"
                    color="black"
                    p={5}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="lg"
                    boxShadow="lg"
                    position={"relative"}
                    top={"270px"}
                >
                    <Heading mb={4}>Calorie Burn Tracker</Heading>
                    <Box mb={4} >
                        <Text fontSize="lg" mb={2}>Enter the number of steps:</Text>
                        <Input
                            type="number"
                            placeholder="Enter steps"
                            value={steps}
                            onChange={(e) => setSteps(e.target.value)}
                            width="300px"
                            bg="gray.200"
                            border="none"
                            _placeholder={{ color: 'gray.500' }}
                        />
                    </Box>
                    <Button colorScheme="teal" onClick={calculateCaloriesBurned}>
                        Calculate Calories Burned
                    </Button>
                    <Box mt={8}>
                        <CircularProgress
                            value={(caloriesBurned / 1000000) * 100}
                            color="green.400"
                            size="150px"
                            thickness="12px"
                        >
                            <CircularProgressLabel fontSize="lg">
                                {caloriesBurned.toFixed(2)} kcal
                            </CircularProgressLabel>
                        </CircularProgress>
                    </Box>
                </Box>
            </Box>
        </ChakraProvider>
    );
};

export default Dashboard;


