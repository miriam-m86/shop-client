
import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const Payment = () => {
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submittedData, setSubmittedData] = useState(null);
  const cartItems = useSelector(state => state.cart.items);

  const onSubmit = async(data) => {
    
    const newOrder = {
        name: data.name, // Unique ID
        addrsess:data.address,
        mail:data.mail,
       product: [...cartItems]
    };
    
    console.log("Order Submitted:", newOrder);

    try {
        const response = await axios.post("http://localhost:3000/api/Client", newOrder);
        console.log("Server Response:", response.data);
        alert("Orders successfully sent to server!");
       
      } catch (error) {
        console.error("Error sending orders:", error);
        alert("Failed to send orders.");
      }

   // reset(); // Reset the form after submission
  };
  return (

    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
    <h2>Client & Order Form</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <label>שם:</label>
      <input {...register("name", { required: "Name is required" })} />
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

      <label>מייל:</label>
      <input type="email" {...register("mail", { required: "Email is required" })} />
      {errors.mail && <p style={{ color: "red" }}>{errors.mail.message}</p>}

      <label>כתובת:</label>
      <input {...register("address", { required: "address is required" })} />
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      <button type="submit">Submit Order</button>
    </form>
    <Cart/>
    {submittedData }
  </div>
  );
};

export default Payment;







