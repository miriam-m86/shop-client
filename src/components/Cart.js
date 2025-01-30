import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const products = cartItems.reduce((groupProductList, item) => {
    if (!groupProductList[item.categoryId]) groupProductList[item.categoryId] = [];
    groupProductList[item.categoryId].push(item);
    return groupProductList;
  }, {});
  console.log(products)
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <h3>{item.description}</h3>
                <p>${item.price} x {item.quantity}</p>
              </li>
            ))}
          </ul>
          <div>
            <p>Total Items: {totalQuantity}</p>
            <p>Total Price: ש"ח{totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
