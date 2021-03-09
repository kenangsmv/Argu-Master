import Vs from '../../vs/versus'
import styles from "../../../flow/flow.module.css";
import Comments from '../../comments/comment'
import PostContent from './poscontent'

export default function DebateRoom({messages}) {
    return (
      <div className={"flowContainer border-left border-right "}>
     
        <div className="mesageBoxScroll w100 center column m05">
          
            <PostContent></PostContent>
             <Vs></Vs>
           {messages.map(message=><Comments message={message}></Comments>)
          }
            
            
          
            
            
       
       
        </div>
     
    </div>
    );
  }