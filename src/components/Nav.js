import React from "react";

const Nav = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center">
      <a href="/">
        <img src="../images/nav_logo.png" alt=""/>
      </a>
      <ul className="d-flex">
        <li className="mx-4">關於我們</li>
        <li className="mx-4">最新消息</li>
        <li className="mx-4">商品一覽</li>
        <li className="mx-4">
          <i className="fa-solid fa-user"></i>
        </li>
        <li className="mx-4">
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
