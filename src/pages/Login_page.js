import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import Logo from "../assets/images/logo2.png";



function LoginPage() {
    const [name, setName] = useState('Login');


  return (
    <div className="flex justify-between px-56 py-24 bg-primary-100">
      <div>
      <img className="max-w-md w-3/4 mx-auto mt-4" src={Logo} alt="Logo"/>
      </div>
    <div className="min-h-screen bg-white-100 flex flex-col">
      <div className="max-w-xl w-full mx-auto">
        
       </div>
          <div className="max-w-lg w-full mx-auto mt-4 bg-white p-8 border border-gray-300 shadow-xl">
       
          <form action="" className="space-y-6">

          <div class="h-14 w-14 mx-auto">
          <img src={Logo} alt="Logo"/>
          </div>

        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Login</div>
            
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>
            
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Password</label>
              <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1"/>
            </div>
            

            <div class="mb-4">
              <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                <label className="text-sm" for="checkbox_id">
                  Remember Me
                </label>
            </div>

            

            <div class="mb-6 text-center">
               <button
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
            
            <div className="text-center gap-2">
                <p
                  className="inline-block text-sm text-black-500 align-baseline"
                  >
                  No have an account? 
                  </p>
                  
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./register.html"
                  >
                   Register
                  </a>
              </div>
            


         </form>

         
      </div>
     </div>
     </div>
     

     
  
  );
}




export default LoginPage;
