import { Button } from "@material-ui/core";
import React from "react";
import User from "./user";
import { useSelector } from "react-redux";
export default function topicSelection({ joinDebate }) {
  const debate_info = useSelector((state) => state.room.roomData.room_info);
  console.log("topiccccc", debate_info);
  const { topic2, topic1 } = debate_info;
  const filterUser = (topic) => {
    let filtered = debate_info?.users?.filter((user) => user.side === topic);
  
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

  const filteredUser = {
    topic1: filterUser(topic1),
    topic2: filterUser(topic2),
  };
  return (
    <div className="center column">
      <div className="w100 row center mb2 mt2">
        <div className="column column-flex-start mr1">
          <div
            className="w100 team white column relative"
            onClick={() => joinDebate(topic1)}
          >
            <Button
              onClick={() => joinDebate(topic1)}
              variant="contained"
              color="secondary"
            >
              {topic1}
            </Button>

            <div className="teamusersAbsolute w100">
              {filteredUser?.topic1.map((user) => (
                <User user={user} />
              ))}
            </div>
          </div>
        </div>
        <div className="column column-flex-start">
          <div
            className="w100 team white column relative"
            onClick={() => joinDebate(topic1)}
          >
            <Button
              onClick={() => joinDebate(topic2)}
              variant="contained"
              color="secondary"
            >
              {topic2}
            </Button>
            <div className="teamusersAbsolute w100">
              {filteredUser?.topic2.map((user) => (
                <User user={user} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => joinDebate()}
        variant="contained"
        color="primary"
        className="exitRoom center w20"
      >
        {" "}
        Watch As Guest{" "}
      </div>
    </div>
  );
}
