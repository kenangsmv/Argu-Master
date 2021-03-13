import React from "react";
import { Button } from "@material-ui/core";
import HappyFace from "../../../icons/happy.png";
import AngryFace from "../../../icons/angry.png";
import HandShake from "../../../icons/handshake.png";
import Vote from "../../../icons/vote.png";

export default function like({ id, like, angry, isLiked, isAngry }) {
  return (
    <div className="">
      <div className="voteButtonAbsolute">
        <ul className="nobullet row">
          {!isLiked && !isAngry ? (
            <div>
              <div className="wrapped column-flex-start">
              <div className="mr05 underline vote">Vote</div>
              <div className="content popover-body row pl05 pr05">
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
            <div  onClick={() => {
                isLiked ? like(id) : angry(id);
              }} className="mr05 underline vote">unvote</div>
           
          )}
        </ul>
      </div>
    </div>
  );
}
