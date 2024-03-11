'use client'
import { useState } from "react";

export default function QuantityComponent(){
   
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
      if (product.Stock <= quantity) return;
      const qty = quantity + 1;
      setQuantity(qty);
    };
  
    const decreaseQuantity = () => {
      if (1 >= quantity) return;
  
      const qty = quantity - 1;
      setQuantity(qty);
    };

    
    return(
        <div className="py-2 sm:my-2 sm:m-2">
        <button className="border-none rounded-l-2xl bg-zinc-800 px-4 py-2 cursor-pointer text-white" onClick={decreaseQuantity}>-</button>
        <input className="xl:w-[3.2vw] text-red lg:pl-5 md:pl-4 md:w-[5.3vw] p-1 border-zinc-800 border-y-2 pl-3 text-lg sm:w-[3vw] sm:pl-3 w-[10vw]" readOnly type="number" value={quantity} />
        <button className="border-none rounded-r-2xl bg-zinc-800 px-4 py-2 cursor-pointer text-white" onClick={increaseQuantity}>+</button>
      </div>
    );
}