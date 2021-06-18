import React, {useContext} from "react";
import {CartContext} from "./cartContext";
import styles from './../modules/cart.module.css'

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    const totalPrice = cart.reduce((acc, val) => acc + val, 0);

    return(
      <div className={styles.cart}>
          <div>Items in Cart: {cart.length}</div>
          <div>Total Price: {totalPrice}</div>
      </div>
    );
}

export default Cart;