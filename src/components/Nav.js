import React from "react";

const Nav = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center">
      <div>LOGO</div>
      <ul className="d-flex">
        <li className="mx-4">關於我們</li>
        <li className="mx-4">最新消息</li>
        <li className="mx-4">商品一覽</li>
        <li className="mx-4">
          <i class="fa-solid fa-user"></i>s{" "}
        </li>
        <li className="mx-4">
          <i class="fa-solid fa-cart-shopping"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
