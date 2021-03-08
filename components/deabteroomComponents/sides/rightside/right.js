import TeamMember from './rightteamusers'

import styles from "../../../leftSide/leftSide.module.css"
import { Button } from '@material-ui/core'
import ChooseTeam from '../../chooseteam/chooseteam'

export default function rightSide({topic,users}) {
    return (
      <div className={styles.containerLeft}>
      
      <div className="pr1 pl05 w100 sticky">
           <ChooseTeam></ChooseTeam>
            <div className="w100 boxColor mt1 mb1 pl1 pr1 pb1 border-radius5px box-shadow">
                
                <div className="center mb1">
               {topic}
                </div>      

                {users.map(user=><TeamMember username={user.username}></TeamMember>)}  
                
               </div>
                <div className="center w100">
                <div  className="exitRoom center mb1 needHover w100">
                   Exit Room
                </div>
                </div>
          </div>
      </div>
    );
  }