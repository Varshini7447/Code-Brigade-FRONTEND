import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button, Portal
} from '@chakra-ui/react'
export const Profile = () => {
    const auth = JSON.parse(sessionStorage?.auth)
    return (
        <Popover>
            <PopoverTrigger>
                <Button>Profile</Button>
            </PopoverTrigger>
            <Portal>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>{auth?.Email}</PopoverHeader>
                    <PopoverHeader>{auth?.Password}</PopoverHeader>
                    <PopoverHeader>{auth?.firstName}</PopoverHeader>
                    <PopoverHeader>{auth?.lastName}</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                    </PopoverBody>
                </PopoverContent>
            </Portal>
        </Popover>
    )
} 