import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../context/product_context"
import { useCart } from "react-use-cart"

export default function DetailProduct() {

  const { product } = useContext(ProductContext)
  
    // console.log(props.match.params);
    // Variable berikut akan menampung product movie yang akan kita tampilkan
    const { id } = useParams();
    console.log(id);
    const products = product.find((dataFind) => dataFind.product_id === Number(id));


    const { addItem } = useCart();


    return (
<div className="text-gray-700 body-font overflow-hidden bg-white">

  <div className="container px-5 py-12 mx-auto flex justify-between" key={products.product_id}>

      
    <div className="lg:w-4/5 mx-auto ">
      <img alt="ecommerce" className="lg:w-3/4 w-full object-cover object-center rounded border border-gray-400 " src={products.product_image}/>
      </div>
        
        
      <div className="lg:w-1/2 w-full p-7 mt-6  lg:mt-0 border border-gray-400">
        <h2 className="text-md title-font text-gray-500 tracking-widest font-medium">{products.product_category}</h2>
        <h1 className="text-gray-900 text-4xl title-font font-medium text- mb-1 mt-3">{products.product_name}</h1>
        <div className="flex mb-4">

          <span className="flex items-center">
     

          

          <span className="text-gray-600 ml-0 mt-3 text-lg font-medium">Stok : {products.product_stock} |</span>

          <span className="text-gray-600 ml-3 mt-3 font-medium">Berat : {products.product_weight} gram |</span>

          <span className="text-gray-600 ml-3 mt-3 font-medium">Asal : {products.product_origin_category}</span>

            <span className="text-gray-600 ml-3"></span>
          </span>

          

        </div>


        <p className="leading-relaxed text-lg text-justify text-content-start mt-10 ">{products.product_description}</p>


        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
          
          <div className="flex ml-6 items-center">
            
            <div className="relative">
            

            
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900 mt-5 ">Rp {products.product_price}</span>

          <button className="flex ml-auto text-white w-60 h-10 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-center justify-center mt-5"
          onClick={() => addItem(ProductContext.products)}
           
          >
            {" "}
            Masukkan Keranjang
            </button>
          
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:text-red-600 mt-5">

            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

 </div> 
  
    
 

 );
 
}

