/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Heart } from "phosphor-react";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <div className="product_img">
        <img src={productImage} />
        <div className="heart">
          <Heart size={15} />
        </div>
      </div>
      <div className="description">
        <p>{productName}</p>
      </div>
      <div className="btn">
        <p> ${price}</p>
        <button className="add_cart" onClick={() => addToCart(id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
