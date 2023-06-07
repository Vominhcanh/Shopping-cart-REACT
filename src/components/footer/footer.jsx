/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu_footer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nobis
        fugiat voluptas? Iste reprehenderit exercitationem, aliquid voluptatem
        odio sint aliquam hic magni temporibus perspiciatis doloribus quia,
        nesciunt culpa dolores a.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eius nobis fugiat voluptas? Iste reprehenderit
        exercitationem, aliquid voluptatem odio sint aliquam hic magni
        temporibus perspiciatis doloribus quia, nesciunt culpa dolores a.
      </ul>
      <p>&copy;2023 Nadine Coelho | All Rights Reserved | Vo Minh Canh</p>
    </footer>
  );
};

export default Footer;
