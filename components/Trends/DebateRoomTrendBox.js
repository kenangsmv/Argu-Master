import React from "react";
import Dots from "../../icons/dots.png";
import Viewed from '@material-ui/icons/RemoveRedEye'
import Like from '@material-ui/icons/ThumbUp'
import Messages from '@material-ui/icons/Forum';
import Participant from '@material-ui/icons/PeopleAlt';

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
 <div className="w100 row pt1 pb1 pl05 pr05  center space-between">
 <div className="rightBoxDeneme center column relative">
        <div className="whiteCircleAlt">

        </div>
        <div className="cloumn statsName w100" style={{paddingLeft:"3.4rem"}} >
             <span style={{color: "#11685a",
 }}>Viewers</span>
             
        </div>
        <div className="row statsContentAlt center w100">
        <Viewed style={{marginRight:".5rem"}}></Viewed> 
        <h2 className="center">345</h2>
        </div>
       
   </div>
   <div className="rightBoxDeneme1 center column relative">
        <div className="whiteCircleAlt">

        </div>
        <div className="cloumn statsName w100" style={{paddingLeft:"3.4rem"}} >
             <span style={{color: "rgb(220 45 136)",
 }}>Likes</span>
             
        </div>
        <div className="row statsContentAlt1 center w100">
        <Like style={{marginRight:".5rem"}}></Like> 
        <h2 className="center">345</h2>
        </div>
       
   </div>
 </div>
 <div className="w100 row pt1 pb1 pl05 pr05 center space-between">
 <div className="rightBoxDeneme2 center column relative">
        <div className="whiteCircleAlt">

        </div>
        <div className="cloumn statsName w100" style={{paddingLeft:"3.4rem"}} >
             <span style={{color: "rgb(169 183 28)",
 }}>Viewers</span>
             
        </div>
        <div className="row statsContentAlt2 center w100">
        <Viewed style={{marginRight:".5rem"}}></Viewed> 
        <h2 className="center">345</h2>
        </div>
       
   </div>
   <div className="rightBoxDeneme3 center column relative">
        <div className="whiteCircleAlt">

        </div>
        <div className="cloumn statsName w100" style={{paddingLeft:"3.4rem"}} >
             <span style={{color: "rgb(13 137 175)",
 }}>Messages</span>
             
        </div>
        <div className="row statsContentAlt3 center w100">
        <Messages style={{marginRight:".5rem"}}></Messages> 
        <h2 className="center">1.52</h2>
        </div>
       
   </div>

 </div>
</div>
  );
};
export default trendBox;
