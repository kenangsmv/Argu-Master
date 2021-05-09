import React from "react";
import Arrow from "../../../icons/arrow.png";
import {useSelector} from "react-redux"
import Slider from "../userSlider"
export default function left() {
  const title = useSelector((state) => state.room.roomData.room_info.title);
 
  return (
    <div className="leftLayout pb2 pt1 pr05 pl05 mobileUnvisible">
      <div className="mainLeft column relative space-between">
        <div className="mainSidesTop center">
          <div className="teamName center">
            <img className="leftsideArrow " src={Arrow} alt="" />
          </div>
        </div>
        <div className="mainSideMiddle center p1">
          <div className="middleUsers">
{title}
          </div>
        </div>
       <Slider></Slider>
      </div>
    </div>
  );
}
