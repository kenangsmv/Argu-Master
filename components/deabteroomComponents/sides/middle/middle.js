import Vs from "../../vs/versus";
import styles from "../../../flow/flow.module.css";
import Message from "../../comments/message";
import PostContent from "./poscontent";
import TextComponent from "./TextComponent";
export default function DebateRoom({
  messages,
  sendMessage,
  debate_info,
  mySide,
  like,
  checkUser,
  angry,
  scores
}) {




console.log("am i taken ?",amItaken)
  return (
    <div className={"liveRoomMiddle relative "}>
       <Vs scores={scores}></Vs>
       <div>
      <PostContent debate_info={debate_info}></PostContent>
     
      <div className="liveMessageBody">
        {messages.map((message) => (
          <Message
            message={message}
            mySide={mySide}
            like={like}
           
            angry={angry}
          ></Message>
        ))}
      </div>

<<<<<<< HEAD
    {amItaken?  <TextComponent sendMessage={sendMessage}></TextComponent>:null}
=======

       {checkUser? <TextComponent sendMessage={sendMessage}></TextComponent>:null}
       </div>
>>>>>>> 87e585d58cec737943ed1dd7db24a72857f6a04a
    </div>
  );
}
