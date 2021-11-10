import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BannerComponent(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const products = [
    {
      image: "https://mdbootstrap.com/img/new/slides/052.jpg",
      price: "Rp 200000",
      productName: "Hat",
    },
    {
      image: "https://mdbootstrap.com/img/new/slides/052.jpg",
      price: "Rp 300000",
      productName: "Shirt",
    },
    {
      image: "https://mdbootstrap.com/img/new/slides/052.jpg",
      price: "Rp 300000",
      productName: "Jeans",
    },
  ];

  return (
    <>
      <Carousel
        responsive={responsive}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item"
        className='w-4/6 mx-auto'
      >
        {products.map((res) => {
          return (
            <div>
              <img
                src={res.image}
                alt=""
                className="rounded-lg h-96 w-full  mx-auto"
              />
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
