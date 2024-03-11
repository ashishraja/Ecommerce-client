import React from 'react'
import Link from "next/link"
import { Rating } from 'flowbite-react'
const ProductCard = ({ product }) => {

  return (
    <div className='flex flex-col border-2 border-black flex-shrink-0 w-[80vw] h-[calc(70vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[18.5vw] md:h-[calc(18vw*1.5)] overflow-clip relative m-10 snap-center rounded-3xl display-flex flex-direction-column'>
      <div className='w-full h-full relative'>
        <Link className="decoration-none text-gray-700" href={`/product/${product.id}`}>
          <img src={product.url} alt="Image 1" className='block object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]' />
        </Link>
      </div>
      <div className='flex flex-col justify-between items-center mb-6'>
        <p className='text-lg'>{product.name}</p>
        <div className='flex flex-col justify-start items-center' >
          <div className="flex flex-col gap-1 ">
            <Rating size="md">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
            </Rating>
          </div>
          <span className="text-lg">({product.noOfReview} Reviews)</span>
        </div>
        <span className='text-lg'>Rs {product.price}</span>
        {/* <div className="flex items-center"> */}
          <button className="bg-slate-100 rounded-lg text-black hover:bg-black hover:text-white font-bold py-3 px-5 mt-2">
            Add to cart
          </button>
        {/* </div> */}
      </div>
    </div>
  )
}

export default ProductCard