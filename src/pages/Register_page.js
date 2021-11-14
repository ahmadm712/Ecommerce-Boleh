import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/images/Shopping.png";
import Logo2 from "../assets/images/logo2.png";

export default function RegisterPage() {
	const url = "https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/user"
	const axios = require('axios').default;
	const [data, setData] = useState({
		name: "",
	    email: "",
	    password: "",
	    image: "",
	    saldo: "",
	    address: "",
	    phone: ""
	})

  const [dataErrors, setDataErrors] = useState({})
   const [isSubmit, setIsSubmit] = useState(false);

	function submit(e){
		e.preventDefault();
    setDataErrors(validate(data));
    setIsSubmit(true);


		axios.post(url, {
			name: data.name,
		    email: data.email,
		    password: data.password,
		    image: data.image,
		    saldo: data.saldo,
		    address: data.address,
		    phone: data.phone
		})
		.then(res => {
			console.log(res.data)
		})
	}

	function handle(e){
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
		console.log(newData)
	}


  useEffect(() => {
    console.log(dataErrors);
    if(Object.keys(dataErrors).length === 0 && isSubmit) {
      console.log(data);
    }
  },[dataErrors])
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
     

     
  
    
    if(!values.email) {
        errors.email = "Email harus diisi!";
      } else if (!regex.test(values.email)) {
        errors.email = "Masukkan email yang valid!";
      }
  
      if(!values.password) {
        errors.password = "Password harus diisi!";    
      }else if ((values.password.length < 8)) {
        errors.password = "Password harus berisi minimal 8 karakter!"
      }

      if(!values.image) {
        errors.image = "Gambar harus diisi!";
      }

      if(!values.saldo) {
        errors.saldo = "Masukkan saldo!";
      }
      
      if(!values.address) {
        errors.address = "Alamat harus diisi!";
      }

      if(!values.phone) {
        errors.phone = "Nomor harus diisi!";
      }

      return errors; 
  };
  


    return (
        <div className="min-h-screen flex justify-around px-54 py-12 bg-gradient-to-r from-primary-100 to-gray-50">
      
      
      <div className="max-w-7xl h-full flex justify-center">
      <img className="max-w-3xl mx-auto  mt-4 flex spa" src={Logo} alt="Logo"/>
      </div>


    <div className="min-h-screen bg-white-100 flex flex-col">
      <div className="max-w-xl w-full mx-auto">
        
       </div>
          <div className="max-w-xl w-96 h-auto mx-auto mt-4 bg-white p-8 border border-gray-300 shadow-xl rounded-xl">

         

            <form onSubmit={(e)=> submit(e)} className="space-y-6">
            <div class="h-14 w-14 mx-auto">
          <img src={Logo2} alt="Logo"/>
          </div>

        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Register</div>
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Full Name</label>
              <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="Input name" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>
            
           


            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
              <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="Input email" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>

            <div className="text-red-600">
            <p>{dataErrors.email}</p>
            </div>

            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Password</label>
              <input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder="Input password" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>

            <div className="text-red-600">
            <p>{dataErrors.password}</p>
            </div>

            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Image</label>
              <input onChange={(e)=>handle(e)} id="image" value={data.image} placeholder="Input image" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>

            <div className="text-red-600">
            <p>{dataErrors.image}</p>
            </div>

            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Saldo</label>
              <input onChange={(e)=>handle(e)} id="saldo" value={data.saldo} placeholder="Input saldo" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>

            <div className="text-red-600">
            <p>{dataErrors.saldo}</p>
            </div>

            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Address</label>
              <input onChange={(e)=>handle(e)} id="address" value={data.address} placeholder="Input address" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>
            <div className="text-red-600">
            <p>{dataErrors.address}</p>
            </div>

            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Phone</label>
              <input onChange={(e)=>handle(e)} id="phone" value={data.phone} placeholder="Input phone" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>
            <div className="text-red-600">
            <p>{dataErrors.phone}</p>
            </div>
            	
            	<div class="mb-6 text-center">
               <button
                 className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                 type="submit"
                  >
                  Submit
                </button>
            </div>
            <div className="text-center flex justify-evenly">
                <p
                  className="inline-block text-sm text-black-500 align-baseline"
                  >
                 Have an account? 
                  </p>
                 
                  
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./login"
                  >
                   Login
                  </a>
              </div>
            </form>
        </div>
     </div>
     </div>
    )
}