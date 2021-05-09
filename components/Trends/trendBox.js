import React from "react";
import Dots from "../../icons/dots.png";
import CircleBarBig from "../CircleBar/circleBarBig";

const trendBox = () => {
  return (
    <div className="w100 RightTrendBottom relative">
<div className="w100 center p1">
   <CircleBarBig percent={75}></CircleBarBig>
 </div>
 <div className="w100 row p1 center space-between">
   <div className="rightBox center">
     <h2 className="rightBoxBorder">345</h2>
   </div>
   <div className="rightBox center">
     <h2 className="rightBoxBorder2">213</h2>
   </div>
 </div>
 <div className="w100 row p1 center space-between">
   <div className="rightBox center">
     <h2 className="rightBoxBorder">345</h2>
   </div>
   <div className="rightBox center">
     <h2 className="rightBoxBorder2">213</h2>
   </div>
 </div>

 <div className="w100 center mt1">
   <h5 className="neeHover center followButton ">Create</h5>
 </div>
</div>
  );
};
export default trendBox;
