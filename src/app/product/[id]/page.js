"use client";
import React from "react";
import ProductDetails from "@/components/ProductDetails";
import { Rating, RatingAdvanced, RatingStar } from "flowbite-react";
import Cards from "@/components/Cards";
import { useState } from "react";
import ReviewModal from "@/components/ReviewModal.js";
import FooterComponent from "@/components/Footer";


const Product = () => {
  const showdiv = true;
  const [showForm, setShowForm] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [selected, setSelected] = useState(Array(5).fill(false));
  const [inputValue, setInputValue] = useState("");
  const [review, setReview] = useState({ name: "", rating: "", description: "", reviewtitle: "", description: "", images: "", email: "", });


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

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

  const categories = [
    "large size jar",
    "small size jar"
  ];

  const handleHideForm = () => {
    setShowForm(false);
  };
  return (
    <div>
      <div className="sm:flex sm:justify-between">
        <div className=" flex flex-col m-3 h-full sm:w-[90vw] object-contain sm:h-auto sm:p-4">
          <img
            className="border rounded-xl sm:h-[40vw] sm:w-[70vw] md:h-[60vw] lg:h-[43vw] "
            src="https://5.imimg.com/data5/OU/YC/FX/SELLER-14751588/30754.jpg"
            alt="Product"
          />
          {
            showdiv &&
            <div className="flex object-contain w-20 h-20 sm:w-[8vw] sm:h-[8vw] space-x-3 sm:space-x-5 mt-10">
              <img
                className=""
                src="https://5.imimg.com/data5/OU/YC/FX/SELLER-14751588/30754.jpg"
              />
              <img
                className=""
                src="https://5.imimg.com/data5/OU/YC/FX/SELLER-14751588/30754.jpg"
              />
              <img
                className=""
                src="https://5.imimg.com/data5/OU/YC/FX/SELLER-14751588/30754.jpg"
              />
              <img
                className=""
                src="https://5.imimg.com/data5/OU/YC/FX/SELLER-14751588/30754.jpg"
              />
            </div>}
        </div>

        <div className="flex flex-col h-full w-full p-5 pb-1 sm:p-4 md:pt-4">
          <h1 className="text-2xl md:text-3xl font-serif my-2 xl:text-4xl xl:w-[35vw] xl:pt-3">
            Clear Round Stainless Steel Jar Set - Milton
          </h1>

          <div className="my-2 sm:my-4">
            <p className="text-lg sm:text-xl xl:text-2xl">$16.00</p>
            <p className="text-sm sm:text-xl xl:text-2xl">Excluding Sales Tax | Free Shipping</p>
          </div>

          <label className="text-lg sm:text-xl xl:text-2xl">
            Size
          </label>
          <select className="p-2 md:w-[32vw] xl:w-[19.5vw] sm:m-2 sm:my-3 sm:w-[20vw] mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" onChange={(e) => setProduct({ ...product, category: e.target.value })}>
            <option value="">Choose Size</option>
            {categories.map((cate) => (
              <option key={cate} value={cate}>
                {cate}
              </option>
            ))}
          </select>
          <label className="mt-1 text-lg sm:text-xl xl:text-2xl" >
            Quantity{" "}
          </label>

          <div className="py-2 sm:my-2 sm:m-2">
            <button className="border-none rounded-l-2xl bg-zinc-800 px-4 py-2 cursor-pointer text-white" onClick={decreaseQuantity}>-</button>
            <input className="xl:w-[3.2vw] text-red lg:pl-5 md:pl-4 md:w-[5.3vw] p-1 border-zinc-800 border-y-2 pl-3 text-lg sm:w-[3vw] sm:pl-3 w-[10vw]" readOnly type="number" value={quantity} />
            <button className="border-none rounded-r-2xl bg-zinc-800 px-4 py-2 cursor-pointer text-white" onClick={increaseQuantity}>+</button>
          </div>

          <div className="flex sm:flex-col mt-4 sm:mt-0">
            <button className="md:w-[33.5vw] xl:w-[20vw] p-3 bg-slate-400 mr-6 sm:my-4 rounded-lg text-white hover:bg-black hover:text-white font-bold w-[42vw] sm:w-64 py-3 px-4">
              Add to cart
            </button>
            <button className="md:w-[33.5vw] xl:w-[20vw] p-3 bg-black text-white rounded-lg hover:bg-slate-100 hover:text-black font-bold w-[42vw] sm:w-64 py-3 px-4">
              Buy now
            </button>
          </div>
          <ReviewModal />
        </div>
      </div>
      <div className="flex flex-col  h-full w-full p-5 pt-1 sm:p-1">
        <ProductDetails />
      </div>
      {/* <div> */}
         <h1 className="text-2xl text-center font-bold"> Recommedations</h1>
         <Cards />
      {/* </div> */}
        <FooterComponent />
    </div >
  );
};

export default Product;
// "use client";
// import React from "react";
// import ProductCard from "@/components/ProductCard";
// import { Rating, RatingAdvanced, RatingStar } from "flowbite-react";
// import Cards from "@/components/Cards";
// import { useState } from "react";


// const Product = () => {
  
//   const [showForm, setShowForm] = useState(false);
 
//   const [rating, setRating] = useState(0);
//   const [selected, setSelected] = useState(Array(5).fill(false));
//   const [inputValue, setInputValue] = useState("");
//   const [review, setReview] = useState({name: "",rating: "",description:"",reviewtitle:"",description:"",images:"",email:"",  });

  
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Set the submitted value when the form is submitted

//     // setReview(
//     //   `Name: ${name}, Email: ${email},images:${images}, Rating: ${rating}, Review Title: ${reviewtitle}, Description: ${description}`
//     // );
//   };
//   const handleStarClick = (index) => {
//     const newSelected = selected.map((value, i) => (i <= index ? true : false));
//     setSelected(newSelected);
//     setRating(index + 1);
//   };
//   const handleShowForm = () => {
//     setShowForm(true);
//   };

//   const handleHideForm = () => {
//     setShowForm(false);
//   };
//   return (
//     <div className=" relative flex flex-col justify-center md:flex-col sm:flex-col items-center m-3 lg:w-full md:w-full sm:w-full ">
//       {/*main div*/}
//       <div className="flex  lg:flex-col justify-center items-center md:flex-col sm:flex-col">
//       <div className=" flex lg:flex-row md:flex-col md:h-auto sm:h-auto justify-center h-[45vw] ">
//         {/*subpart1 div*/}
//         <div className=" flex flex-col  justify-center items-center m-2 md:h-auto sm:w-full sm:h-auto">
//           <div className=" flex flex-col h-[45vw] m-3 md:h-auto object-contain sm:h-auto">
//             <img
//               className="border rounded-xxl h-[45vw] md:w-full md:h[23vw] sm:w-full "
//               src="https://5.imimg.com/data5/OU/YC/FX/SELLER-14751588/30754.jpg"
//               alt="Product"
//             />
//             <div className="flex object-contain w-20 h-20 space-x-1">
//             <img
//               className=""
//               src="https://5.imimg.com/data5/OU/YC/FX/SELLER-14751588/30754.jpg"
//             />
//             <img
//               className=""
//               src="https://5.imimg.com/data5/OU/YC/FX/SELLER-14751588/30754.jpg"
//             />
//             <img
//               className=""
//               src="https://5.imimg.com/data5/OU/YC/FX/SELLER-14751588/30754.jpg"
//             />
//             <img
//               className=""
//               src="https://5.imimg.com/data5/OU/YC/FX/SELLER-14751588/30754.jpg"
//             />
//           </div>
//           </div>
          
//         </div>

//         <div className="flex flex-col w-full md:h-auto sm:h-auto md:w-[65vw] h-[27vw] my-12 md:pl-0 mx-auto ">
//           <h1 className="text-2xl m-3  font-serif">
//             Clear Round Stainless Steel Jar Set - Milton
//           </h1>

//           <p className="text-lg m-3 ">$16.00</p>
//           <p className="text-sm m-1">Excluding Sales Tax | Free Shipping</p>

//           <label className="mt-2 text-lg" for="size">
//             Size
//           </label>
//           <select
//             className="w-60 h-10 m-1 border rounded-lg text-black-primary focus:outline-none text-sm"
//             id="size"
//           >
//             <option value="steel"> large size jar</option>
//             <option value="steel">small size jar </option>
//           </select>
//           <label className="mt-2 text-lg" for="quantity">
//             Quantity{" "}
//           </label>
//           <input
//             className="w-20 m-2 border rounded-lg text-black-primary focus:outline-none p-1 pl-2"
//             type="number"
//             id="quantity"
//             name="quantity"
//             min="1"
//           />
//           <div className="flex flex-col mt-8">
//             <button className="bg-slate-400 text-white hover:bg-black hover:text-white font-bold h-10 w-64 p-1 m-1 py-2 px-4 rounded-full ">
//               Add to cart
//             </button>
//             <button className="bg-black text-white hover:bg-slate-100 hover:text-black font-bold h-10 w-64 p-1 m-1 py-2 px-4 rounded-full ">
//               Buy now
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="flex md:h-auto sm:h-auto">
//         <ProductCard/>
//       </div>
//       <div className="flex justify-center w-[60vw] md:h-auto sm:h-auto">
//         {/*subpart3 div*/}
//         <div className="flex flex-row justify-center items-center">
//           <div className="flex flex-col  m-2 justify-center items-center w-[40vw] rounded-lg mt-4 ">
//             <h1 className=" flex text-2xl items-center font-semibold ">
//               Reviews
//             </h1>
//             <div className="flex">
//               {Array.from({ length: 5 }, (_, i) => (
//                 <button
//                   key={i}
//                   type="button"
//                   className={`focus:outline-none ${
//                     selected[i] ? "text-black-500" : "text-gray-300"
//                   }`}
//                   onClick={() => handleStarClick(i)}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     className="h-8 w-8"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.814l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 </button>
//               ))}
//             </div>
//             <div className="text-lg">
//               <p>based on n rating</p>
//             </div>
//             <div>
//               <button
//                 onClick={handleShowForm}
//                 className=" flex justify-center m-3 p-2 lg:h-[3vw] lg:w-[10vw] md:w-[17vw] md:h-[7vw] md:m-2 bg-slate-500 text-white rounded-md hover:bg-slate-600 transition duration-300"
//               >
//                 Leave a Review
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-row">
//           <div className="flex flex-col w-[45vw] h-23">
//             <Rating className="mb-2 text-black">
//               <RatingStar />
//               <RatingStar />
//               <RatingStar  />
//               <RatingStar />
//               <RatingStar  filled={false}  />
//               <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
//                 4.95 out of 5
//               </p>
//             </Rating>
//             <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
//               1,745 global ratings
//             </p>
//             <RatingAdvanced percentFilled={70} className="mb-2">
//               5 star
//             </RatingAdvanced>
//             <RatingAdvanced percentFilled={17} className="mb-2">
//               4 star
//             </RatingAdvanced>
//             <RatingAdvanced percentFilled={8} className="mb-2 text-black">
//               3 star
//             </RatingAdvanced>
//             <RatingAdvanced percentFilled={4} className="mb-2 text-black">
//               2 star
//             </RatingAdvanced>
//             <RatingAdvanced percentFilled={1} className="text-black">1 star</RatingAdvanced>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center items-center w-[56vw]">
//         {showForm && (
//           <form
//             onSubmit={handleSubmit}
//             onChange={handleInputChange}
//             className="w-[56vw] mx-auto border m-4 p-3 rounded-xl"
//           >
//             <div className="mb-4 ">
//               <label
//                 htmlFor="name"
//                 className="flex text-gray-700 font-bold mb-2"
//               >
//                 Name*
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={review.name}
//                 onChange={(e) => setReview({...review, name:e.target.value})}
//                 required
//                 className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
            
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="flex text-gray-700 font-bold mb-2"
//               >
//                 Email*
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={review.email}
//                 onChange={(e) => setReview({...review, email:e.target.value})}
//                 required
//                 className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="rating"
//                 className="flex text-gray-700 font-bold mb-2"
//               >
//                 Rating*
//               </label>
//               <div className="flex  flex-col   rounded-lg mt-4 ">
//                 <div className="flex m-3">
//                   {Array.from({ length: 5 }, (_, i) => (
//                     <button
//                       key={i}
//                       type="button"
//                       className={`focus:outline-none ${
//                         selected[i] ? "text-black-500" : "text-gray-300"
//                       }`}
//                       id="rating"
//                       value={review.rating}
//                       onChange={(e) => setReview({...review, rating:e.target.value})}
//                       required
//                       onClick={() => handleStarClick(i)}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                         className="h-8 w-8"
//                       >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.814l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="review"
//                 className="flex text-gray-700 font-bold mb-2"
//               >
//                 Review title
//               </label>
//               <input
//                 type="text"
//                 id="review"
//                 value={review.reviewtitle}
//                 onChange={(e) => setReview({...review, reviewtitle:e.target.value})}
//                 required
//                 className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="description"
//                 className="flex text-gray-700 font-bold mb-2"
//               >
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 value={review.description}
//                 onChange={(e) => setReview({...review, description:e.target.value})}
//                 required
//                 className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="images"
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Add images & videos
//               </label>
//               <input
//                 type="file"
//                 id="images"
//                 multiple
//                 accept="image/*, video/*"
//                 onChange={(e) => setReview({...review,images:e.target.files})}
//                 className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="m-3 space-x-7">
//               <button
//                 type="submit"
//                 onClick={handleSubmit}
//                 className="bg-slate-200 hover:bg-slate-700 hover:text-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Publish
//               </button>
//               <button
//                 type=""
//                 onClick={handleHideForm}
//                 className="bg-black hover:bg-slate-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         )}
//       </div>

//       <div className="flex ">
//         {/* <Card> */}
//           {review && (
//             <div className=" flex flex-col mt-4">
//               <h1 className="flex flex-col">{review.name}</h1>
//               {/* <h2>{new Date (review.createdAt).toLocaleDateString()}</h2>  */}
//               {/* <h3 className="flex flex-col">{review.rating}</h3> */}
//               <p className="text-gray-800">{review.description}</p> 
//               <p>{review.images}</p>
//               <p>{review.rating}</p>
//             </div>
//           )} 
//         {/* </Card>  */}
//        </div> 
//       <div>
//         <h1 className="text-xl font-bold"> Recommedation</h1>
//         <div className="flex justify-start">
//           <Cards />
//           <Cards />
//           <Cards />
//           <Cards />
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Product;