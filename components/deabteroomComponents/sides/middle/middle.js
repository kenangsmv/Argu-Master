import Vs from '../../vs/versus'
import styles from "../../../flow/flow.module.css";
import Comments from '../../comments/comment'
import PostContent from './poscontent'

export default function DebateRoom({messages}) {
    return (
      <div className={styles.flowContainer}>
     
        <div className="w100 center column m05">
          
            <PostContent></PostContent>
             <Vs></Vs>
           {messages.map(message=><Comments message={message}></Comments>)}
            
            
          
            
            
       
       
        </div>
     
    </div>
    );
  }