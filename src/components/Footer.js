import React from "react";

const Footer = () => {
  return (
    <footer className="d-flex">
    
          <ul className="d-flex icon">
        <li className="mx-4 d-flex align-items-center justify-content-center">
          <i class="fa-brands fa-facebook-f"></i>
        </li>
        <li className="mx-4 d-flex align-items-center justify-content-center">
          <i class="fa-brands fa-instagram-square"></i>
        </li>
        <li className="mx-4 d-flex align-items-center justify-content-center">
          <i class="fa-brands fa-twitter"></i>
        </li>
      </ul>

      <ul className="d-flex">
        <li>
          <div>關於我們</div>
          <ul>
            <li>最新消息</li>
            <li>品牌理念</li>
            <li>熱銷商品</li>
            <li>產品評價</li>
            <li>店鋪資訊</li>
          </ul>
        </li>
        <li>
          <div>活動資訊</div>
          <ul>
            <li>產品訊息</li>
            <li>活動訊息</li>
            <li>最新優惠</li>
          </ul>
        </li>
        <li>
          <div>商品一覽</div>
          <ul>
            <li>甜甜圈</li>
            <li>飲料</li>
            <li>點心</li>
            <li>客製化</li>
          </ul>
        </li>
        <li>
          <div>會員專區</div>
          <ul>
            <li>會員登入</li>
            <li>帳戶管理</li>
            <li>訂單資訊</li>
          </ul>
        </li>
      </ul>


    </footer>
  );
};

export default Footer;
