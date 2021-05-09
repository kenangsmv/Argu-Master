import React from "react";
import LeftDude from "../../../icons/leftdude.jpg";
import ProfilePhoto from "../../../images/profilephoto.jpg";
import {useSelector} from "react-redux"
export default function users({side}) {
  const debate_info = useSelector((state) => state.room.roomData.room_info);

 
  const filterUser = (topic) => {
    let filtered = debate_info?.users?.filter((user) => user.side === topic);
  console.log("filtered",debate_info)
    filtered?.map((user) => {
      let score = 0;
      debate_info?.messages?.map((m) => {
        if (m.message_holder === user.username) {
          score = score + m.likes.length - m.angry.length;
        }
      });
      user.score = score;
    });

    return filtered;
  };

 console.log(side)

  return (
    <div className="leftBottom column w100">
      <div className="members row mt05 ">
      
       {filterUser(debate_info[side]).map(user=>   <div className="members row mt05">
        <div className="userphoto center">
          <img src={ProfilePhoto} alt="" />
        </div>
        <div className="bilgi column w100 flex-start relative">
          <h4>{user.username}</h4>
          <p>acemi</p>
          <span className="timePosition">{user.score}</span>
        </div>
      </div>)}
      </div>
     
    </div>
  );
}
