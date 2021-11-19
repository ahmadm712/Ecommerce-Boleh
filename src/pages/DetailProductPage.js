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


        <div className="flex justify-center mt-5 mb-5">
          
        </div>
        <Footer />
      </div>
        </div>
    )
}

export default DetailProductPage;
