import React, {useState, useContext} from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {

// const [name, setname] = useState('');
// const [email, setemail] = useState('');
// const [password, setpassword] = useState('');
// const [image, setimage] = useState('');
// const [saldo, setsaldo] = useState('');
// const [address, setaddress] = useState('');
// const [phone, setphone] = useState('');

    return ( 
    	<div>
        <h1> ini Halaman Register </h1> 
        <form>
        <div className="flex justify-center mt-5 mb-5">
        <div class="row">
        <div className="form-group" class="hidden md:flex items-center space-x-1 row">
              <input
                type="text"
                name="name"
                id="name"
                class="form-input px-2 py-2 rounded-md bg-yellow-50 w-96 "
                placeholder="Input your name ...."
              />
            </div>
            <div className="form-group" class="hidden md:flex items-center space-x-1">
              <input
                type="text"
                name="email"
                id="email"
                class="form-input px-2 py-2 rounded-md bg-yellow-50 w-96 "
                placeholder="Input your email ...."
              />
            </div>
            <div className="form-group" class="hidden md:flex items-center space-x-1">
              <input
                type="text"
                name="password"
                id="password"
                class="form-input px-2 py-2 rounded-md bg-yellow-50 w-96 "
                placeholder="Input your password ...."
              />
            </div>
            <div className="form-group" class="hidden md:flex items-center space-x-1">
              <input
                type="text"
                name="image"
                id="image"
                class="form-input px-2 py-2 rounded-md bg-yellow-50 w-96 "
                placeholder="Input your image ...."
              />
            </div>
            <div className="form-group" class="hidden md:flex items-center space-x-1">
              <input
                type="text"
                name="saldo"
                id="saldo"
                class="form-input px-2 py-2 rounded-md bg-yellow-50 w-96 "
                placeholder="Input your saldo ...."
              />
            </div>
            <div className="form-group" class="hidden md:flex items-center space-x-1">
              <input
                type="text"
                name="address"
                id="address"
                class="form-input px-2 py-2 rounded-md bg-yellow-50 w-96 "
                placeholder="Input your address ...."
              />
            </div>
            <div className="form-group" class="hidden md:flex items-center space-x-1">
              <input
                type="text"
                name="phone"
                id="phone"
                class="form-input px-2 py-2 rounded-md bg-yellow-50 w-96 "
                placeholder="Input your phone ...."
              />
            </div>
            
        </div>
          
        </div>
        <input type="submit" className="btn btn-primary" value="Sign Up"/>
        </form>
        
        </div>
    )
}