import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import Logo from "../assets/images/Shopping.png";
import Logo2 from "../assets/images/logo2.png";


function LoginPage() {
  const dataBase = "https://618f2ab250e24d0017ce1649.mockapi.io/api/boleh/user";


  const axios = require('axios').default;

   const [data, setData] = useState({ email: "", password: "",})

  function submit(e){
          e.preventDefault();
          axios.post(dataBase, {email: data.email, password: data.password})

            .then(res => {console.log(res.data)})
          }


  function handle(e){

      const dataBase = {...data}

          dataBase[e.target.id] = e.target.value

        setData(dataBase)

      
      console.log(dataBase)
  }

  
  

  return (
    <div className="min-h-screen flex justify-around px-54 py-24 bg-gradient-to-r from-primary-100 to-gray-50">
      <div>
      <img className="max-w-3xl mx-auto  mt-4 flex spa" src={Logo} alt="Logo"/>
      </div>
    <div className="min-h-screen bg-white-100 flex flex-col">
      <div className="max-w-xl w-full mx-auto">
        
       </div>
          <div className="max-w-xl w-96 mx-auto mt-4 bg-white p-8 border border-gray-300 shadow-xl rounded-xl">
       
          <form onSubmit={(e)=> submit(e)} className="space-y-6">

          <div class="h-14 w-14 mx-auto">
          <img src={Logo2} alt="Logo"/>
          </div>

        <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Login</div>
            
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
              <input onChange={(e)=>handle(e)} value={data.email} id="email"  name="email" type="text"             
              className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Email address" required/>
            </div>
            
            <div>
              <label htmlFor="" className="text-sm font-bold text-gray-600 block">Password</label>
              <input onChange={(e)=>handle(e)} value={data.password} id="password" name="password" type="password"              
              className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Password" required/>
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
                 type="submit"                
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
                 
                  
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./register"
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
