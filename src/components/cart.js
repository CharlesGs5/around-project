import React, {useContext} from "react";
import {CartContext} from "./cartContext";

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    const totalPrice = cart.reduce((acc, val) => acc + val, 0);

    return(
      <div>
          <h2>Cart</h2>
          <h3>Items in Cart: {cart.length}</h3>
          <h3>Total Price: {totalPrice}</h3>
      </div>
    );
}

export default Cart;