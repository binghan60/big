import React from "react";

const About = () => {
  return (
    <div className="position-relative">
      <img className="w-100" src="./images/index_img.png" alt="" />
      <div className="position-absolute bingslogan">
        <h2 className="bingFirstText mb-5 pb-4">探索最適合你的甜甜圈</h2>
        <p className="fs-3 mt-5 text-center">
          好不容易擠進門市，看到琳瑯滿目的甜甜圈擺在眼前
        </p>
        <p className="fs-3 text-center my-4">
          令人好奇的是，究竟手掌大小的甜甜圈能變化出幾種不同口味？
        </p>
      </div>
    </div>
  );
};

export default About;
