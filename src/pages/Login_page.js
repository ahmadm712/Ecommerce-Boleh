import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import { useHistory } from 'react-router-dom'
import Logo from "../assets/images/Sale.png";
import Logo2 from "../assets/images/logo2.png";


function LoginPage() {
  const dataBase = "https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/user";

    useEffect(() => {
      if (localStorage.getItem('user-info')) {
          history.push("/add")
      }
    }, [])

    async function login() {

      console.log(email,password) 
      let item={email, password};
      let result= await fetch("https://oleh-oleh-skilvul.000webhostapp.com/api/user",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body:JSON.stringify(item)

      });


      

      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result))
      history.push("/")




    }

  return (
    <div className="min-h-screen flex justify-around px-54 py-24 bg-gradient-to-r from-primary-100 to-gray-50">
      <div>
      <img className="max-w-2xl max-w-7xl mx-auto  mt-4 flex spa" src={Logo} alt="Logo"/>
      </div>
    <div className="min-h-screen bg-white-100 flex flex-col">
      <div className="max-w-xl w-full mx-auto">
        
       </div>
          <div className="max-w-xl w-96 mx-auto mt-4 bg-white p-8 border border-gray-300 shadow-xl rounded-xl">
       
          <form action="" className="space-y-6">

          <div class="h-14 w-14 mx-auto">
          <img src={Logo2} alt="Logo"/>
          </div>

        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Login</div>
            
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
              <input id="email-address" name="email" type="text" 
              onChange={(e)=>setEmail(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Email address" required/>
            </div>
            
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Password</label>
              <input id="password" name="password" type="password" 
              onChange={(e)=>setPassword(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Password" required/>
            </div>
            

            <div class="mb-4">
              <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                <label className="text-sm" for="checkbox_id">
                  Remember Me
                </label>
            </div>

            

            <div class="mb-6 text-center">
               <button onClick={login}
                 className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                 type="button"
                  >
                  Login
                </button>
            </div>

            <div className="text-center">
                <a
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              href="./forgot-password.html"
                  >
              Forgot your Password?
                </a>
            </div>
            
            <div className="text-center flex justify-evenly">
                <p
                  className="inline-block text-sm text-black-500 align-baseline"
                  >
                  No have an account? 
                  </p>
                 
                  
                <Link
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to="/register"
                  >
                   Register
                  </Link>
              </div>
            


         </form>

         
      </div>
     </div>
     </div>
     

     
  
  );
}




export default LoginPage;
