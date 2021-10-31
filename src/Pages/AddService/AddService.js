import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
 const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
   console.log(data);

   axios.post('http://localhost:5000/services', data)
   .then(res => {
    if(res.data.insertedId){
     alert('added successfully');
     reset();
    }
   })
  
  }

 return (
  <div id="add-service" className="add-service">
   <h2>Add a service</h2>
   <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 50 })} placeholder="Name" />
      <textarea {...register("time" )} placeholder="day and night"/>
      <input type="number" {...register("price")} placeholder="price"/>
      <input {...register("img" )} placeholder="Image Url"/>
      <input type="submit" />
    </form>
  </div>
 );
};

export default AddService;