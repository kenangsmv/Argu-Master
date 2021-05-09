import React from "react";

import ProfilePhoto from "../../../images/profilephoto.jpg";
import Like from "../../deabteroomComponents/comments/like";
import LikeVote from "../../../icons/vote.png";
import Angry from "../../../icons/angry.png";
import { useSelector } from "react-redux";

export default function messagenew({
  message,
  like,
  angry,
  whatIsMySide,
  first,
}) {
  const user = useSelector((state) => state.user.currentUser);
  const isLikedOrAngry = () => {
    let isLiked = message.likes.includes(user.username);
    let isAngry = message.angry.includes(user.username);

    return { isLiked, isAngry };
  };

  const { isLiked, isAngry } = user
    ? isLikedOrAngry()
    : { isLiked: null, isAngry: null };
   
  return (
    <div className="newMessage w100 column relative mt3" style={{flexDirection:message.direction?"row":"row-reverse"}}>
   
      <div className="row newMessageContainer " style={{flexDirection:message.direction?"row":"row-reverse"}}>
     
        <div className="h100 center">
        <img src={ProfilePhoto} alt="" />
        </div>
        <div className="newMessageBox center">
          <span>{message.message}</span>
        </div>

        <Like
        id={message.id}
        side={message.side}
        like={like}
        angry={angry}
        isLiked={isLiked}
        isAngry={isAngry}
        direction={message.direction}
      />

      <div className="result resultAbsolute row center box-shadow" style={{left:message.direction&&60,right:!message.direction&&60}}>
        <img className="result-icons" src={LikeVote} alt="" />
        {message.likes.length}
        <img className="result-icons" src={Angry} alt="" />{" "}
        {message.angry.length}
      </div>



      </div>
      
    </div>
  );
}


/**
 * 
 *    <div className=" mesageHolder row space-between center">
        <span className="pr1">{message.message_holder}</span>
        <span> 11:43</span>
      </div>
 */