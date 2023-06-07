import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CaretDown, ShoppingCart, User } from "phosphor-react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { ShopContext } from "../../context/shop-context";

export const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const quantitiesGreaterThanOne = Object.values(cartItems).filter(
    (quantity) => quantity > 0
  );
  const length = quantitiesGreaterThanOne.length;
  const header = document.querySelector(".navbar");
  const toggleClass = "is-sticky";
  if (header !== null) {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 150) {
        header.classList.add(toggleClass);
      } else {
        header.classList.remove(toggleClass);
      }
    });
  }
  return (
    <header className="navbar">
      <div className="nav_logo">
        <Link to="/" className="link_home">
          <img className="nav_img" src={logo} width={40} alt="" />
          <p> Shop Tech</p>
        </Link>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="#"> Categories </Link>
        <Link to="#"> Deals </Link>
        <Link to="#"> What's New </Link>
        <Link to="/contact"> Delivery </Link>
      </div>
      <div className="nav_links">
        <div className="box_cart">
          <div className="cart_item">
            <Link to="/cart">
              <ShoppingCart size={21} color={"#000"} />
            </Link>
          </div>
          <p>{length}</p>
        </div>
        <div className="box_user">
          <Link>
            <User size={21} color={"#000"} />
          </Link>
        </div>
      </div>
    </header>
  );
};
