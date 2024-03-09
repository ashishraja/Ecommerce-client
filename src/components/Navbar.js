
"use client"
import {
 
  Dropdown,
 
  Navbar,
  
} from 'flowbite-react';
import { ChefHat } from 'lucide-react';
import { ShoppingCart ,User} from 'lucide-react';
import Link from 'next/link';
export default function NavbarC() {
  return (
    <Navbar fluid rounded className='bg-gray-100'>
      
      <Navbar.Brand href="/">
      <ChefHat className="mr-3 h-6 sm:h-9" alt= "logo"/>
        {/* <a href='/'><ChefHat className="mr-3 h-6 sm:h-9" alt= "logo"/></a> */}
      
        <span className="self-center whitespace-nowrap text-xl font-semibold ">Indian Kitchen Mart</span>
       
      </Navbar.Brand>
      
     
      
      <div className="flex  md:order-2">
     <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1">
       <svg class="w-5 h-5" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
       </svg>
       <span class="sr-only">Search</span>
     </button>
     <div class="relative hidden md:block">
       <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         <svg class="w-4 h-4 text-gray-500" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
         </svg>
         <span class="sr-only">Search icon</span>
       </div>
       <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm md:w-40  text-gray-900 border border-gray-100 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-slate-500" placeholder="Search..."/>
   </div>
        <Link href='/addtocart'><span className='flex flex-row m-2'><ShoppingCart/></span></Link>
       
        <Dropdown
          arrowIcon={false}
          inline
          label={
            // <Avatar alt="User settings" img="https://img.pikbest.com/png-images/qiantu/cute-panda-avatar-simple-yellow-black-and-white-icon-element_2689638.png!sw800" rounded />
            <User/>
          }
        >
          
          <Dropdown.Header>
            <span className="block text-sm">user name</span>
            <span className="block truncate text-sm font-medium">email123@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>SignOut</Dropdown.Item>
        </Dropdown>
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className=' font-semibold text-lg hover:text-gray-300'>
        <Navbar.Link href="/" className=' bg-gray-100 text-black hover:text-gray-400  text-lg'>
          Home
        </Navbar.Link>
        <Navbar.Link className='  bg-gray-100 hover:bg-gray-300 text-lg' href="/about">About</Navbar.Link>
        <Navbar.Link className=' bg-gray-100 hover:bg-gray-300 text-lg' href="/category">Category</Navbar.Link>
        <Navbar.Link className=' bg-gray-100 hover:bg-gray-300 text-lg' href="/contact">Contact</Navbar.Link>
        
      </Navbar.Collapse>
    </Navbar>
  );
}

// /// Import necessary packages and icons
// import { User } from 'lucide-react';
// import { ShoppingCart } from 'lucide-react';
// import {
//   Avatar,
//   Dropdown,
//   DropdownDivider,
//   DropdownHeader,
//   DropdownItem,
//   Navbar,
//   NavbarBrand,
//   NavbarCollapse,
//   NavbarLink,
//   NavbarToggle,
// } from 'flowbite-react';
// import { ChefHat } from 'lucide-react';
// import Link from 'next/link'
// // ...




// const NavbarC = () => {
//     return ( 
//         <div className=" flex flex-row w-full h-40">
    
//     <Navbar fluid rounded>
//       <NavbarBrand href="/">
//       <ChefHat className="mr-3 h-6 sm:h-9" alt= "logo"/>
//         <span className="self-center whitespace-nowrap text-xl font-semibold ">Indian Kitchen Mart</span>
//       </NavbarBrand>
//       <div className="flex md:order-2">
//         <Dropdown
//           arrowIcon={false}
//           inline
//           label={
//             <Avatar alt="User settings" img="https://img.pikbest.com/png-images/qiantu/cute-panda-avatar-simple-yellow-black-and-white-icon-element_2689638.png!sw800" rounded />
//           }
//         >
//           <DropdownHeader>
//             <span className="block text-sm">Panda</span>
//             <span className="block truncate text-sm font-medium">name@flowbite.com</span>
//           </DropdownHeader>
//           <DropdownItem>login</DropdownItem>
//           <DropdownItem>add to cart</DropdownItem>
//           <DropdownItem>Earnings</DropdownItem>
//           <DropdownDivider />
//           <DropdownItem>Sign out</DropdownItem>
//         </Dropdown>
//         <NavbarToggle />
//       </div>
//       <NavbarCollapse>
//         <NavbarLink href="/" active>
//           Home
//         </NavbarLink>
//         <NavbarLink href="/about">About</NavbarLink>
//         <NavbarLink href="/category">Category</NavbarLink>
//         <NavbarLink href="/contact">Contact</NavbarLink>
//         <NavbarLink href="#">Contact</NavbarLink>
//       </NavbarCollapse>
//     </Navbar>
            
// {/* 
// <nav class="bg-[#EEEDEB] border-gray-200 ">
//   <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4">
//   <a href="/" class="flex items-center  space-x-3 rtl:space-x-reverse">
//       <ChefHat className="h-8" alt= "logo"/>

//       <span class="self-center text-xl  md:text-sm font-semibold whitespace-nowrap">Indian Kitchen Mart </span>
//   </a>
//   <div class="flex md:order-2">
//     <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1">
//       <svg class="w-5 h-5" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
//         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//       </svg>
//       <span class="sr-only">Search</span>
//     </button>
//     <div class="relative hidden md:block">
//       <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//         <svg class="w-4 h-4 text-gray-500" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
//           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//         </svg>
//         <span class="sr-only">Search icon</span>
//       </div>
//       <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-100 rounded-lg bg-gray-50 focus:ring-amber-500 focus:border-amber-500" placeholder="Search..."/>
//     </div>
//     <div className="space-x-2 px-2">
//      <Link href={'/login'}>
//     <button type="button" class=" hover:bg-slate-200 focus:ring-1 focus:outline-none focus:ring-slate-300  rounded-lg text-sm px-2 py-2 "><User/></button>
//     </Link>
//     <Link href={'/cart'}>
//     <button type="button" class=" hover:bg-slate-200 focus:ring-1 focus:outline-none focus:ring-slate-300 rounded-lg text-sm px-2 py-2 "><ShoppingCart/></button>
//     </Link>   
//     </div>
//     <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-search" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//   </div>
//     <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
//       <div class="relative mt-3 md:hidden">
//         <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//           <svg class="w-4 h-4 text-gray-500" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//           </svg>
//         </div>
//         <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..."/>
//       </div>
//       <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-">
//         <li>
//           <a href="/" class="block py-2 px-3 text-black text-xl  bg-black-700 md:text-black-700 md:p-0  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700   " aria-current="page">Home</a>
//         </li>
        
//         <li>
//           <a href="/category" class="block py-2 px-3 text-gray-900 text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Category </a>
//         </li>
//         <li>
//           <a href="/contact" class="block py-2 px-3 text-gray-900 text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact us</a>
//         </li>
//         <li>
//           <a href="/about" class="block py-2 px-3 text-gray-900 text-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">About</a>
//         </li>
        
//       </ul>
//     </div>
//   </div>
// </nav>
//  */}
        
       
   
//     </div>);
// }
 
// export default Navbar;