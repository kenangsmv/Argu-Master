import React from "react";
import { Button } from "@material-ui/core";
import HappyFace from "../../../icons/happy.png";
import LikeVote from "../../../icons/vote.png";
import Angry from "../../../icons/angry.png";
import AngryFace from "../../../icons/angry.png";
import HandShake from "../../../icons/handshake.png";
import Vote from "../../../icons/vote.png";

export default function like({ id, like, angry, isLiked, isAngry, message }) {
  return (
    <div className="">
      <div className="voteButtonAbsolute">
        <ul className="nobullet row">
          {!isLiked && !isAngry ? (
            <div>
              <div className=" column-flex-start">
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
                <div className="mr05 underline wrapped">Vote</div>
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
        </ul>
      </div>
      <div className="result resultAbsolute row center box-shadow">
        {message.likes.length !== 0 ? (
          <div className="row center">
            <img className="result-icons" src={LikeVote} alt="" />{message.likes.length}
          </div>
        ) : null}
        {message.angry.length !== 0 && (
          <div className="row center">
          <img className="result-icons" src={Angry} alt="" />{message.angry.length}
        </div>
        )}
      </div>
    </div>
  );
}
