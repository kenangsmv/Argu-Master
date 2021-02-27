import Vs from '../../vs/versus'

import Comments from '../../comments/comment'
import PostContent from '../middle/poscontent'
export default function DebateRoom() {
    return (
        <div className="middleroom w60 mt1 pl1 pr1 center column">
              
             <PostContent></PostContent>
             <Vs></Vs>
             <Comments></Comments>
           
      </div>
    );
  }