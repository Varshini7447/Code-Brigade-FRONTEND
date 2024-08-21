// import {
//     Popover,
//     PopoverTrigger,
//     PopoverContent,
//     PopoverHeader,
//     PopoverBody,
//     PopoverArrow,
//     PopoverCloseButton,
//     Button, Portal,
//     List,
//     ListItem,
//     ListIcon,
//     OrderedList,
//     UnorderedList,
// } from '@chakra-ui/react'
// export const Profile = () => {
//     const auth = JSON.parse(sessionStorage?.auth)
//     return (
//         <>
//             <List spacing={3}>
//                 <ListItem>
//                     {auth.Email}
//                 </ListItem>
//                 <ListItem>
//                     {auth.Password}
//                 </ListItem>
//                 <ListItem>
//                     {auth.firstName}
//                 </ListItem>
//                 <ListItem>
//                     {auth.lastName}
//                 </ListItem>
//                 <ListItem>
//                     {auth.Gender}
//                 </ListItem>
//             </List>
//         </>

//     )
// } 
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
    UnorderedList,Box
} from '@chakra-ui/react'
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
export const Profile = () => {
    const auth = JSON.parse(sessionStorage?.auth)
    return (
        <>
            <List spacing={3}  >
                <ListItem display={"flex"} flexDirection={"row"} alignItems={"center"}>
                 <MdOutlineEmail/> Email : {auth.Email}
               {/* <MdOutlineEmail /> Email : {auth.Email} */}
                </ListItem>
                <ListItem display={"flex"} flexDirection={"row"} alignItems={"center"} >
                <RiLockPasswordLine />Password : {auth.Password}
                </ListItem>
                <ListItem display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <CiUser />{"\t"}FullName : {auth.firstName} {auth.lastName}
                </ListItem>
                {/* </ListItem>
                <ListItem> */}
                   
                 <ListItem display={"flex"} flexDirection={"row"} alignItems={"center"}>
                 <LuUsers2 /> Gender : {auth.Gender}
                </ListItem>
            </List>
        </>

    )
}
