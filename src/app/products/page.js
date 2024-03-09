import React from "react";
import { Table, TableContainer, Td, TableCaption, Thead, Tr, Th, Tbody, HStack, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { toast } from "react-toastify";
import { RowComponent } from "@/components/productHandler";
import axios from "axios";


export async function getProducts() {
  try {
    const response = await axios.get('http://localhost:3000/api/admin/products/getproducts');
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}


export const metadata = {
    title: "All Products",
    robots: {
      index: false,
      follow: true,
  }
}

export default async function Products() {

  const response = await getProducts();
  const products = response.data.products;

  return (
    <div className="flex flex-col">
      <div className="flex mx-[7vw] mt-8 justify-between">
        <h1 className="md:text-2xl uppercase font-bold lg:text-4xl">List Of Products</h1>
        <div>
          <Link href="/createproduct">
            <Button className="border rounded-lg bg-amber-500 p-2 border-white text-white">+ Add New Product</Button>
          </Link>
        </div>
      </div>
      <TableContainer className=" mx-[7vw] my-[2vw] rounded-lg border-2 flex items-center justify-center bg-white" >
        <Table className="w-full min-w-max table-auto text-left" >
          <TableCaption className="py-4">All available products in the database</TableCaption>
          <Thead>
            <Tr>
              <Td className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4" >
                <div className="flex justify-start">
                  {/* <Filter /> */}
                </div>
              </Td>

              <Td colSpan={6} className="p-4 lg:pr-11" >
                <div className="flex justify-end">
                  <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                      <IoSearch color="#C0C2C9" />
                    </span>
                    {/* <input autoComplete="off" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" /> */}
                  </label>
                </div>
              </Td>

            </Tr>

            <Tr>
              <Th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Id</Th>
              <Th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Name</Th>
              <Th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Description</Th>
              <Th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Price</Th>
              <Th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Quantity</Th>
              <Th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
              <RowComponent products={products} />
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
