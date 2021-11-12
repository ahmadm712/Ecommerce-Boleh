import React, {useState, useContext} from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/images/Shopping.png";
import Logo2 from "../assets/images/logo2.png";

export default function RegisterPage() {

// const [name, setname] = useState('');
// const [email, setemail] = useState('');
// const [password, setpassword] = useState('');
// const [image, setimage] = useState('');
// const [saldo, setsaldo] = useState('');
// const [address, setaddress] = useState('');
// const [phone, setphone] = useState('');

    return ( 
    	<div className="min-h-screen flex justify-around px-54 py-12 bg-gradient-to-r from-primary-100 to-yellow-50">
      
      
      <div className="max-w-7xl h-full flex justify-center">
      <img className="max-w-3xl mx-auto  mt-4 flex spa" src={Logo} alt="Logo"/>
      </div>


    <div className="min-h-screen bg-white-100 flex flex-col">
      <div className="max-w-xl w-full mx-auto">
        
       </div>
          <div className="max-w-xl w-96 h-auto mx-auto mt-4 bg-white p-8 border border-gray-300 shadow-xl rounded-xl">
       
          <form action="" className="space-y-6">

          <div class="h-14 w-14 mx-auto">
          <img src={Logo2} alt="Logo"/>
          </div>

        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Register</div>
            
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Full Name</label>
              <input id="full-name" name="fullname" type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Full name" required/>
            </div>
            
            <div className="">
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
              <input id="email-address" name="email" type="email" type="email" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Email address" required/>
            </div>


            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Password</label>
              <input id="password" name="password" type="email" type="password" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Password" required/>
            </div>

            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Confirm Password</label>
              <input id="confirm-password" name="confirmpassword" type="password" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Confirm Password" required/>
            </div>


            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Image</label>
              <input id="image" name="image" type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Input your image link" required/>
            </div>

            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Phone Number</label>
              <input id="phone-number" name="phone-number" type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Phone number" required/>
            </div>

           

            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Address</label>
              <textarea id="address" name="address" type="text" className="w-full h-28  p-2 border border-gray-300 rounded mt-1 form-textarea" placeholder="Your Address" required/>
            </div>
            

            <div class="mb-6 text-center">
               <button
                 className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                 type="button"
                  >
                  Register
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