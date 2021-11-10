import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link} from "react-router-dom";


export default function CarouselComponent() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (

    

    <div className='px-24'>
      <h1 className="text-2xl">Produk A</h1>
      <Carousel responsive={responsive}>
        <div className='mr-4 ' >
        <Link to='/detail_produk'>
        <div>
            <img src="https://mdbootstrap.com/img/new/slides/052.jpg" alt="" />
            <h2>Jawa Barat</h2>

            <h2>Seblak</h2>
            <h2>Rp 15.000</h2>
          </div>
        </Link>
          
        </div>
        <div className='mr-4'>
        <Link to='/detail_produk'>
        <div>
            <img src="https://mdbootstrap.com/img/new/slides/052.jpg" alt="" />
            <h2>Jawa Barat</h2>

            <h2>Seblak</h2>
            <h2>Rp 15.000</h2>
          </div>
        </Link>
        </div>
        <div className='mr-4'>
        <Link to='/detail_produk'>
        <div>
            <img src="https://mdbootstrap.com/img/new/slides/052.jpg" alt="" />
            <h2>Jawa Barat</h2>

            <h2>Seblak</h2>
            <h2>Rp 15.000</h2>
          </div>
        </Link>
        </div>
        <div className='mr-4'>
        <Link to='/detail_produk'>
        <div>
            <img src="https://mdbootstrap.com/img/new/slides/052.jpg" alt="" />
            <h2>Jawa Barat</h2>

            <h2>Seblak</h2>
            <h2>Rp 15.000</h2>
          </div>
        </Link>
        </div>
      </Carousel>
    </div>
  );
}
