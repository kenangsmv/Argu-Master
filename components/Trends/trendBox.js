import React from "react";
import Dots from "../../icons/dots.png";

const trendBox = () => {
  return (
    <div className="w100 RightTrendBottom relative">
<div className="w100 center p1">
   <div className="percentContainer ">
     <div class="percent2 center">
       <svg className="center">
         <circle cx="50" cy="50" r="50">
           <div className="innerCircle"></div>
         </circle>
         <circle cx="50" cy="50" r="50"></circle>
       </svg>
       <div class="innerCircle2">
         <h2>
           75<span>%</span>
         </h2>
       </div>
     </div>
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
 <div className="w100 row p1 center space-between">
   <div className="rightBox center">
     <h2 className="rightBoxBorder">345</h2>
   </div>
   <div className="rightBox center">
     <h2 className="rightBoxBorder2">213</h2>
   </div>
 </div>

 
</div>
  );
};
export default trendBox;
