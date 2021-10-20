import React from 'react'
import {useState} from "react"

function Form() {
    const [formData ,setformData]=useState({name:"" ,email:"" ,age:""});
     

      const handleForm=(e)=>{
          setformData({...formData,[e.target.name]:e.target.value });

      };

      
    
    return (
      <form action="">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleForm}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleForm}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleForm}
        />
      </form>
    );
}

export default Form
