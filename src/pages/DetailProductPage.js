import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CarouselComponent from "../components/carousel-card";
import DetailProduct from "../components/detail-product";



function DetailProductPage() {
  const id = useParams()

    return (
        <div>
            <div className="container-xl">
        <Navbar />
        

       
       <DetailProduct />

        <br />
        <br />
        <div></div>

        
        <br />

        <CarouselComponent />
        {/* <div className="grid-rows-3">
          {axios
            .get("https://oleh-oleh-skilvul.000webhostapp.com/api/product")
            .then((res) => {
              return <ProductCard data={res.data.product} />;
            })
            .catch((error) => {
              console.log(error);
            })}
        </div> */}

        {/* {
          productApi.map((res)=>{
            return(
              <ProductCard data={res}/>
            )
          })
        } */}

        <div className="flex justify-center mt-5 mb-5">
          {/* <button
            className="bg-green-500  text-white font-bold py-2 px-4 rounded"
            onClick={HandleAPI}
          >
            Muat Lebih
          </button> */}
        </div>
        <Footer />
      </div>
        </div>
    )
}

export default DetailProductPage;
