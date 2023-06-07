import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import Banner from "../../components/banner/banner";
import { CaretDown } from "phosphor-react";

export const Shop = () => {
  return (
    <div className="shop">
      <Banner />
      <div className="list_categories">
        <ul className="list_category">
          <li className="category_item">Headphone Type</li>
          <li className="category_item">Headphone </li>
          <li className="category_item">Headphone </li>
          <li className="category_item">Headphone </li>
          <li className="category_item">Headphone </li>
        </ul>
        <ul className="category_sort">
          <li className="category_item">
            Sort by <CaretDown size={16} />
          </li>
        </ul>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
