import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button, Portal,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
export const Profile = () => {
    const auth = JSON.parse(sessionStorage?.auth)
    return (
        <>
            <List spacing={3}>
                <ListItem>
                    {auth.Email}
                </ListItem>
                <ListItem>
                    {auth.Password}
                </ListItem>
                <ListItem>
                    {auth.firstName}
                </ListItem>
                <ListItem>
                    {auth.lastName}
                </ListItem>
                <ListItem>
                    {auth.Gender}
                </ListItem>
            </List>
        </>

    )
} 