import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'; 
import { useDispatch, useSelector } from 'react-redux';
import {addItemToCart, removeItemFromCart, incrementItemQuantity, decrementItemQuantity } from '../reducers';
import Cart from './Cart'
import { useNavigate } from "react-router-dom";

const SelectProduct = () => {
 
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productList, setProductList] = useState([]); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddItemToCart = (product) => {
    dispatch(addItemToCart(product));
  };
  // Fetching data using Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7272/Category');
        setCategories(response.data); // Save the fetched data in state
      } catch (error) {
        setError(error.message); // Handle errors
      } finally {
        setLoading(false); // Done loading
      }
    };

    fetchData();
  }, []);
  const handleCashPayment = () => {
    navigate("/payment"); // Navigate to CashPayment component
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  

  return (
    <div>
       <Autocomplete
      disablePortal
      onChange={(event, newValue) => {
                if (newValue!=null)
                setProductList(newValue.products);
      }}
      options={categories}
      getOptionLabel={(option) => option.description}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="חפש" />}
    />

<Autocomplete
      disablePortal
      onChange={(event, newValue) => {
        if (newValue!=null)
            handleAddItemToCart(newValue);
}}
      options={productList}
      getOptionLabel={(option) => option.description + option.price}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="חפש" />}
    />
<button onClick={handleCashPayment}>Pay with Cash</button>;
<Cart></Cart>
    </div>
  );
};

export default SelectProduct;
