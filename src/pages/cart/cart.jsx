import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import cart_empty from "../../assets/cart_empty.png";
import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <>
      <div className="cart_nav">
        {/* <p onClick={() => navigate("/")}> Continue Shopping </p>
        <p
          onClick={() => {
            checkout();
            navigate("/checkout");
          }}
        >
          Checkout
        </p> */}
      </div>
      <div className="cart">
        <h4>Your Shopping Cart List</h4>
        <table>
          <thead>
            <tr>
              <th style={{ borderTopLeftRadius: "10px" }}>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th style={{ borderTopRightRadius: "10px" }}>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {totalAmount == 0 ? (
              <tr>
                <td colSpan={100}>
                  <img src={cart_empty} width={200} alt="..." />
                  <p>Your Cart is Empty !</p>
                </td>
              </tr>
            ) : null}
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
          </tbody>
          <div className="total">
            <p>Total amount in cart: ${totalAmount}</p>
          </div>
        </table>
      </div>
    </>
  );
};
