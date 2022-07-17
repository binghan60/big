import React from "react";
import PinkButton from "../components/PinkButton";

const Story = () => {
  return (
    <>
      <div className="story_1 position-relative w-50 mx-auto">
        <p className="bingTittle my-5">デザインコンセプトは「猫」</p>
        <div className="d-flex">
          <div className="mx-2">
            <p className="bingText mb-4">
              我們是隱身在台北巷弄內的甜點店，在玄關處脫下鞋子，步上木階，希望帶給貴賓舒適自在的感受。
              嚴選無二的新鮮食材是我們負責任的態度，在這裡美食成為簡單易懂的共同語言，讓身心盈滿幸福能量。
            </p>
            <PinkButton />
          </div>
          <div className="mx-2 position-relative">
            <img className="" src="./images/story_img-2.png" alt="" />
            <img
              className="position-absolute story_img-3"
              src="./images/story_img-3.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <img
        className="story_img-1 position-relative"
        src="./images/story_img-1.png"
        alt=""
      />

      <div className="story_2"></div>
    </>
  );
};

export default Story;
