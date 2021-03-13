import Vs from "../../vs/versus";
import styles from "../../../flow/flow.module.css";
import Comments from "../../comments/message";
import PostContent from "./poscontent";
import TextComponent from "./TextComponent";
export default function DebateRoom({
  messages,
  sendMessage,
  debate_info,
  mySide,
  like,
  angry,
  scores
}) {





  return (
    <div className={"liveRoomMiddle relative"}>
       <Vs scores={scores}></Vs>
      <PostContent debate_info={debate_info}></PostContent>
     
      <div className="liveMessageBody">
        {messages.map((message) => (
          <Comments
            message={message}
            mySide={mySide}
            like={like}
            angry={angry}
          ></Comments>
        ))}
      </div>

      <TextComponent sendMessage={sendMessage}></TextComponent>
    </div>
  );
}
