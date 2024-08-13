import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Button, Avatar, Box,Text
} from '@chakra-ui/react'
import { Profile } from './profile';

function Dashboard() {
    const userName = JSON.parse(sessionStorage?.auth).firstName
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center"  >
                <Avatar onClick={onOpen} size="xl" height="150px" width="150px" name="User Name" src="profile.jpg" />
                <Text mt={4}>Welcome, {userName}!</Text>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <Profile />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default Dashboard;