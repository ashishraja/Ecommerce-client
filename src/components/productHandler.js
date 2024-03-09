'use client'
import { toastDisplayData } from '@/app/createproduct/page';
import { Table, TableContainer, Td, TableCaption, Thead, Tr, Th, Tbody, HStack, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Link from "next/link";
import { toast } from "react-toastify"
import { RiDeleteBin7Fill } from 'react-icons/ri';
import axios from 'axios';
import { useState } from 'react';

export function RowComponent({products}) {
    const [allProducts , setAllProducts] = useState(products);
    
    
    async function deleteHandler(id) {
        try {
            const response = await axios.delete(`http://localhost:3000/api/admin/product/delete/${id}`);
            toast.success(response.data.message, toastDisplayData);
            const result = await axios.get(`http://localhost:3000/api/admin/products/getproducts`);
            setAllProducts(result.data.products);
        } catch (error) {                                                       
            console.error('Error Deleting Product', error);
        }
    }

    return (
        <>
            {
                allProducts && allProducts.map((item) => (
                    <Row key={item._id} item={item} deleteHandler={deleteHandler} />
                ))}
        </>
    );
}

function Row({ item, deleteHandler }) {
    return (
        <Tr key={item._id}>
            <Td className="p-4 border-b border-blue-gray-50">{item._id}</Td>
            <Td className="p-4 border-b border-blue-gray-50">{item.name}</Td>
            <Td className="p-4 border-b border-blue-gray-50">{item.description}</Td>
            <Td className="p-4 border-b border-blue-gray-50">{item.price}</Td>
            <Td className="p-4 border-b border-blue-gray-50">{item.stock}</Td>
            <Td className="p-4 border-b border-blue-gray-50">
                <HStack justifyContent={"flex-start"}>
                    <Link href={`/product/${item.name}`}>
                        <Button className="border rounded-lg bg-green-700 p-2 border-white text-white">View details</Button>
                    </Link>
                    <Link href={`/updateproduct/${item._id}`}>
                        <Button className="border rounded-lg bg-blue-600 p-2 border-white text-white">Update details</Button>
                    </Link>
                    <Button onClick={() => deleteHandler(item._id)} className="border rounded-lg p-3 bg-rose-700 border-white text-white">
                        <RiDeleteBin7Fill />
                    </Button>
                </HStack>
            </Td>
        </Tr>
    )
}