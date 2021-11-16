import React, { useState } from 'react'
import EGambar from "../assets/images/Ecommerce.png";
import AppD from "../assets/images/AppD.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CarouselComponent from "../components/carousel-card";
import BannerComponent from "../components/banner";
import { useHistory } from "react-router-dom";
import axios from "axios";

function ProfilePage() {
	let user_login = JSON.parse(localStorage.getItem('user-info'));
	console.log(user_login.name);

	const url = `https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/user/${user_login.user_id}`;
	
	const axios = require('axios').default;
	const [data, setData] = useState({
		  name: user_login.name,
	      email: user_login.email,
	      password: user_login.password,
	      image: user_login.image,
	      address: user_login.address,
	      phone: user_login.phone
	})


	const history = useHistory();

	
	const handleNext = () => {
	    history.push("/search");
	  };

	function submit(e){
		e.preventDefault();

		 axios.put(url, {
			      name: data.name,
			      email: data.email,
			      password: data.password,
			      image: data.image,
			      address: data.address,
			      phone: data.phone
			})
			.then(res => {
				console.log(res.data)
				localStorage.setItem("user-info", JSON.stringify(res.data))
				history.push("/profile")
			})

	
		
	}

	function handle(e){
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
		console.log(newData)
	}


    return (
    <>
      <div className="container-xl">
        <Navbar />
        <br />
        <form onSubmit={(e)=> submit(e)} className="space-y-6">
        
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Full Name</label>
              <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="Input name" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
              <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="Input name" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Password</label>
              <input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder="Input name" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>
            <div>
            	<img src={data.image} alt="img" width="200" />
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Image</label>
              <input onChange={(e)=>handle(e)} id="image" value={data.image} placeholder="Input name" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Address</label>
              <input onChange={(e)=>handle(e)} id="address" value={data.address} placeholder="Input name" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Phone</label>
              <input onChange={(e)=>handle(e)} id="phone" value={data.phone} placeholder="Input name" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>
            <button
                 className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                 type="submit"
                  >
                  Ubah Profile
                </button>
        </form>


        <br />
        <div></div>

        <Footer />
      </div>
    </>
  );
}

export default ProfilePage