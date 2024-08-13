import { useEffect } from "react"
import axios from 'axios'
import { api } from '../actions/api';
import { useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button
} from '@chakra-ui/react'


export const UsersData = () => {
    const [data, setData] = useState([])
    const fetchData = async () => {
        await axios.post(api + "/students")
            .then((res) => {
                setData(res?.data)
            })
            .catch((e) => console.log(e))
    }
    useEffect(() => {
        fetchData()
    }, [])

    const SignOut = () => {
        sessionStorage?.removeItem('auth')
        window.location.reload()
    }
    // const Delete=(Email)=>{
    //    axios.delete(api+Email)
    //    .then((res)=>{
    //     window.location.reload();
    //    })
    //    .catch(e=>console.log(e));
    // }
    return (
        <>
        
          
            <TableContainer>
                {/* <TableCaption>Students data</TableCaption> */}
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Email</Th>
                            <Th>Password</Th>
                            <Th>FirstName</Th>
                            <Th >LastName</Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.map((val,index) => (
                            <Tr key={index}>
                                <Td>{val.Email}</Td>
                                <Td>{val.Password}</Td>
                                <Td>{val.firstName}</Td>
                                <Td>{val.lastName}</Td>
                                {/* <Td><Button onClick={()=>Delete(val.Email)}>delete</Button></Td> */}
                            </Tr>
                        ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            <Button colorScheme='blue' onClick={SignOut}>Logout</Button>
        </>
    )
}
export default UsersData;

