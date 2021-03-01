import Vs from '../../vs/versus'
import styles from "../../../flow/flow.module.css";
import Comments from '../../comments/comment'
import PostContent from '../middle/poscontent'

export default function DebateRoom() {
    return (
      <div className={styles.flowContainer}>
     
        <div className="w100 center column m05">
          
            <PostContent></PostContent>
             <Vs></Vs>
             <Comments></Comments>
             <Comments></Comments>
             <Comments></Comments>
             <Comments></Comments>
             <Comments></Comments>
             <Comments></Comments>
             <Comments></Comments>
             <Comments></Comments>
             <Comments></Comments>
             <Comments></Comments>
             <Comments></Comments>
             <Comments></Comments>

            
          
            
            
       
       
        </div>
     
    </div>
    );
  }