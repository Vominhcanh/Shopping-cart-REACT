/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <>
      <tr>
        <td>
          <img src={productImage} width={100} alt="placehold" />
        </td>
        <td>{productName}</td>
        <td>${price}</td>
        <td>
          <div className="countHandler">
            <p onClick={() => removeFromCart(id)}>-</p>
            <input
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <p onClick={() => addToCart(id)}> + </p>
          </div>
        </td>
      </tr>
    </>
  );
};
