import Vs from '../../vs/versus'
import styles from "../../../flow/flow.module.css";
import Comments from '../../comments/comment'
import PostContent from './poscontent'
import TextComponent from "./TextComponent"
export default function DebateRoom({messages,sendMessage,debate_info}) {
    return (
      <div className={"liveRoomMiddle relative"}>
     
        
          
            <PostContent debate_info={debate_info}></PostContent>
            
         <div className="liveMessageBody">

         {messages.map(message=><Comments message={message}></Comments>)}

         </div>
            
         
          
            <TextComponent sendMessage={sendMessage}></TextComponent>
            
       
       
     
    </div>
    );
  }