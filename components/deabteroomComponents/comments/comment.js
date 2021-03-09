import User from "../../../images/user3.jpg";

import Dots from "../../../icons/dots.png";
import Like from "./like";

import { Button } from "@material-ui/core";
export default function DebateRoom({ message }) {
  return (
    <div>
      <div className="w100 row pt1"></div>
      <div className={`user ${message.direction?"row":"row-reverse"} pt1`}>
        <div className="pr05">
          <img className="image" src={User} alt="" />
        </div>
        <div className="boxColor pl1 pr1 pt05 pb05 border-radius15px box-shadow text-align-justify relative">
          <div>
            <h5>{message.message_holder}</h5>
          </div>

          <div>
            <span>{message.message}</span>
          </div>

          <div className="voteButtonAbsolute">
            <Like></Like>
          </div>

          <img className="vote-dots" src={Dots} alt="" />
        </div>
      </div>
    </div>
  );
}
