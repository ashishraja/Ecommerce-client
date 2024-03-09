import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Rating } from 'flowbite-react'
const ProductCard = ({ product }) => {

  return (
    <div>
      <div className='border-2 border-black  slide flex-shrink-0 w-[80vw] h-[calc(70vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[26.5vw] md:h-[calc(25vw*1.5)] overflow-clip relative m-10 snap-center rounded-3xl'>
        <Link className="flex flex-col decoration-none text-gray-700" href={`/product/${product.id}`}>
          <img src={product.url} alt="Image 1" className='block object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]' />
          <div>
            <p className='pl-2 pt-1'>{product.name}</p>
            <div className='flex flex-col sm:flex-row justify-start sm:items-center' >
              <div className="flex flex-col gap-1 pl-1">
                <Rating size="sm">
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                </Rating>
              </div>
              <span className="m-[.5vw] pl-1 text-sm">({product.noOfReview} Reviews)</span>
            </div>
            <span className='pl-2'>Rs {product.price}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProductCard