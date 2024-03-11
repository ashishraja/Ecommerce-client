import React from "react";
import ProductDetails from "@/components/ProductDetails";
import Cards from "@/components/Cards";
import ReviewModal from "@/components/ReviewModal.js";
import FooterComponent from "@/components/Footer";
import QuantityComponent from "@/components/QuantityComponent";

export const metadata = {
  title: "Clear Round Stainless Steel Jar Set - Milton",
  robots: {
    index: false,
    follow: true,
}
}

const Product = () => {
  const showdiv = true;

  const categories = [
    "large size jar",
    "small size jar"
  ];

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
          <select className="p-2 md:w-[32vw] xl:w-[19.5vw] sm:m-2 sm:my-3 sm:w-[20vw] mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black">
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

         <QuantityComponent />

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
         <h1 className="text-2xl text-center font-bold"> Recommedations</h1>
         <Cards />
        <FooterComponent />
    </div >
  );
};

export default Product;
