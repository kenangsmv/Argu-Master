import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import MessageInput from "../comments/inputmessage";
import Message from "../comments/mesaagenew";
import { useSelector } from "react-redux";
export default function newmiddle({
  user,
  sendMessage,

  mySide,
  like,

  angry,
  ref,
}) {
  const messages = useSelector((state) => state.room.roomData.messages);
  const messagesEndRef = useRef(null);
  const debate_info = useSelector((state) => state.room.roomData.room_info);
  const checkUser = () => {
    let myToken = user?.username;

    let inDebate = room.users;

    let Var = inDebate?.find((user) => user?.username === myToken);

    return Var;
  };
React.useEffect(() => {
 

  messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' })

}, [messages])
  return (
    <div className="middleLayout pb1 pt1 pr05 pl05">
      <div className="newMessageBody   column relative">
        <div className="mainMiddleTop relative center p1">
          <div className="topicNameBody w100 space-between">
            <h3 className="topicName mr05 center">{debate_info?.topic1}</h3>
            <h3 className="topicName center">{debate_info?.topic2}</h3>
          </div>
        </div>
        <div className="mainMiddleMessage column space-between flex-start">
          {messages?.map((message, ix) => {
            return (
              <Message
                message={message}
                mySide={mySide}
                like={like}
                angry={angry}
                first={
                  message.message_holder !== messages[ix - 1]?.message_holder
                }
              ></Message>
            );
          })}
          <div ref={messagesEndRef}></div>
        </div>

        <MessageInput checkUser={checkUser} sendMessage={sendMessage} />
      </div>
    </div>
  );
}
