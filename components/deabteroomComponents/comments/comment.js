import User from "../../../images/user3.jpg";

import Dots from "../../../icons/dots.png";
import Like from "./like";

import { Button } from "@material-ui/core";
export default function DebateRoom({ message ,like,angry}) {

const calculateScore=()=>{
return message.likes.length-message.angry.length

}



  return (
    <div>
      <div className="w100 row pt1"></div>
      <div className={`user ${message.direction?"row":"row-reverse"} pt1 `}>
        <div className="pr05">
          <img className="image" src={User} alt="" />
        </div>
        <div className="boxColor mw140 pl1 pr1 pt05 pb05 border-radius15px box-shadow text-align-justify relative">
          <div className="row ">
            <h5>{message.message_holder}</h5>
            <h5 className="pl1" style={{color:calculateScore()>0?"green":"red"}}>{calculateScore()}</h5>
          </div>

          <div>
            <span>{message.message}</span>
          </div>

          <div className="voteButtonAbsolute">
            <Like id={message.id} like={like} angry={angry}></Like>
          </div>
         
          <img className="vote-dots" src={Dots} alt="" />
        </div>
      </div>
    </div>
  );
}
