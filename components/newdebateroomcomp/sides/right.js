import React from "react";
import RightDude from "../../../icons/rightdude.jpg";
import Arrow from "../../../icons/arrow.png";
import DebateRoomSlider from "../../Slider/DebateroomSlider";
export default function right() {


  return (
    <div className="rightLayout pb1 pt1 pr05 pl05 mobileUnvisible">
      <div className="mainRight  column relative">
       
        <div className="rightSideMiddle space-between pt1 pb1 pl05 pr05">
          <DebateRoomSlider></DebateRoomSlider>
        </div>

        <button className="rightBottom">Exit room</button>
      </div>
    </div>
  );
}
