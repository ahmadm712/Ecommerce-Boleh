import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/images/Sale.png";
import Logo2 from "../assets/images/logo2.png";

export default function RegisterPage() {
	const url = "https://oleh-oleh-skilvul.000webhostapp.com/api/user"
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

	function submit(e){
		e.preventDefault();
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
    return (
        <div>
            <form onSubmit={(e)=> submit(e)}>
            	<input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="Input name" type="text"></input>
            	
            	<input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="Input email" type="email"></input>
            	
            	<input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder="Input password" type="text"></input>
            	
            	<input onChange={(e)=>handle(e)} id="image" value={data.image} placeholder="Input image" type="text"></input>
            	
            	<input onChange={(e)=>handle(e)} id="saldo" value={data.saldo} placeholder="Input saldo" type="text"></input>
            	
            	<input onChange={(e)=>handle(e)} id="address" value={data.address} placeholder="Input address" type="text"></input>
            	
            	<input onChange={(e)=>handle(e)} id="phone" value={data.phone} placeholder="Input phone" type="text"></input>
            	<button>Submit</button>
            </form>
        </div>
    )
}