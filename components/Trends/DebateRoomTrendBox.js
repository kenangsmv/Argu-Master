import React from "react";
import Dots from "../../icons/dots.png";
import Viewed from "@material-ui/icons/RemoveRedEye";
import Like from "@material-ui/icons/ThumbUp";
import Messages from "@material-ui/icons/Forum";
import Participant from "@material-ui/icons/PeopleAlt";
import CircleBarBig from "../CircleBar/circleBarBig";
import { useSelector } from "react-redux";

const trendBox = ({name}) => {
  const room = useSelector((state) => state.room.roomData);

  const totalUser = useSelector((state) => state.room.totalUser);
  const {
    topic1Percent,
    topic2Percent,
    topic1,
    topic2,
    topic1likes,
    topic2likes,
    views,
    messageCount,
  } = room.scores;
  const topicPercent = name === "topic1" ? topic1Percent : topic2Percent;
  const topicLikes = name === "topic1" ? topic1likes : topic2likes;
  const topicName = name === "topic1" ? topic1 : topic2;
  console.log("1",topic1Percent)
  console.log("2",topic2Percent)
  console.log(name)
  return (
    <div className="w100 RightTrendBottom relative space-between column h100">
      <div className="mainSidesTop center">
        <h2 className="w100 center topicHeader">{topicName}</h2>
      </div>
      <div className="w100 center p1">
        <CircleBarBig percent={topicPercent}></CircleBarBig>
      </div>
      <div className="w100 row pt1 pb1 pl05 pr05  center space-between">
        <div className="rightBoxDeneme center column relative">
          <div className="whiteCircleAlt"></div>
          <div
            className="cloumn statsName w100"
            style={{ paddingLeft: "3.4rem" }}
          >
            <span style={{ color: "#11685a" }}>Viewers</span>
          </div>
          <div className="row statsContentAlt center w100">
            <Viewed style={{ marginRight: ".5rem" }}></Viewed>
            <h2 className="center">{views}</h2>
          </div>
        </div>
        <div className="rightBoxDeneme1 center column relative">
          <div className="whiteCircleAlt"></div>
          <div
            className="cloumn statsName w100"
            style={{ paddingLeft: "3.4rem" }}
          >
            <span style={{ color: "rgb(220 45 136)" }}>Likes</span>
          </div>
          <div className="row statsContentAlt1 center w100">
            <Like style={{ marginRight: ".5rem" }}></Like>
            <h2 className="center">{topicLikes}</h2>
          </div>
        </div>
      </div>
      <div className="w100 row pt1 pb1 pl05 pr05 center space-between">
        <div className="rightBoxDeneme2 center column relative">
          <div className="whiteCircleAlt"></div>
          <div
            className="cloumn statsName w100"
            style={{ paddingLeft: "2.4rem" }}
          >
            <span style={{ color: "rgb(169 183 28)" }}>Live Users</span>
          </div>
          <div className="row statsContentAlt2 center w100">
            <Viewed style={{ marginRight: ".5rem" }}></Viewed>
            <h2 className="center">{totalUser}</h2>
          </div>
        </div>
        <div className="rightBoxDeneme3 center column relative">
          <div className="whiteCircleAlt"></div>
          <div
            className="cloumn statsName w100 center"
            style={{ paddingLeft: "1.4rem" }}
          >
            <span style={{ color: "rgb(13 137 175)" }}>Messages</span>
          </div>
          <div className="row statsContentAlt3 center w100">
            <Messages style={{ marginRight: ".5rem" }}></Messages>
            <h2 className="center">{messageCount}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default trendBox;
