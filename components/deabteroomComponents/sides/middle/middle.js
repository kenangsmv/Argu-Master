import Vs from '../../vs/versus'
import styles from "../../../flow/flow.module.css";
import Comments from '../../comments/comment'
import PostContent from './poscontent'
import TextComponent from "./TextComponent"
export default function DebateRoom({messages,sendMessage,debate_info,mySide}) {
    return (
      <div className={"liveRoomMiddle relative box-shadow"}>
     
        
          
            <PostContent debate_info={debate_info}></PostContent>
             <Vs></Vs>
         <div className="liveMessageBody">

         {messages.map(message=><Comments message={message} mySide={mySide}></Comments>)}

         </div>
            
         
          
            <TextComponent sendMessage={sendMessage}></TextComponent>
            
       
            
     
    </div>
    );
  }