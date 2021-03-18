import React from "react";
import { Button } from "@material-ui/core";
import HappyFace from "../../../icons/happy.png";
import AngryFace from "../../../icons/angry.png";
import HandShake from "../../../icons/handshake.png";
import Vote from "../../../icons/vote.png";

export default function like({ id, like, angry, isLiked, isAngry ,message}) {
  return (
  
      <div className="voteButtonAbsolute">
        <ul className="nobullet row">
          {!isLiked && !isAngry ? (
            <div>
              <div className="center ">
              <div className="mr05 underline wrapped">Vote</div>
              <div className="content  row pl05 pr05">
                  <img
                    className="vote-icons needHover"
                    onClick={() => like(id)}
                    src={Vote}
                    alt=""
                  />
                  

                  <img
                    className="vote-icons needHover"
                    onClick={() => angry(id)}
                    src={AngryFace}
                    alt=""
                  />
                </div>
              
               
              </div>
            </div>
          ) : (
            <img
              className="vote-icons needHover"
              onClick={() => {
                isLiked ? like(id) : angry(id);
              }}
              src={isLiked ? Vote : AngryFace}
              alt=""
            />
            
          )}
          <div className="result  row center box-shadow">
            <img className="result-icons" src={HappyFace} alt=""/>  {message.likes.length}
            <img className="result-icons" src={AngryFace} alt=""/> {message.angry.length}
           </div>
        </ul>
        
      </div>
    
  );
}




