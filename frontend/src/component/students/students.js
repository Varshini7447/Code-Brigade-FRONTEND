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
    Button,Box
} from '@chakra-ui/react'


export const UsersData = () => {
    const [data, setData] = useState([])
    const fetchData = async () => {
        await axios.post(api + "/data")
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
         {/* <Navbar />
      <Box backgroundColor="gray.200" minHeight="100vh" padding="20px" paddingTop="60px"> */}
        
          
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

                            </Tr>
                        ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}
export default UsersData;





