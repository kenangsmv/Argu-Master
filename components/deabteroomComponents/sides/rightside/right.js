import Team from './rightteamusers'
import TeamName from './rightteamname'
import styles from "../../../leftSide/leftSide.module.css"
import { Button } from '@material-ui/core'
import ChooseTeam from '../../chooseteam/chooseteam'

export default function lefside() {
    return (
      <div className="containerLeft relative">
      
      <div className="pl1 pr05 w100 sticky debateRoomLeftSidePosition">
              <div className="w100">
            <div className="w100 boxColor mt1 mb1 pl1 pr1 pb1 border-radius5px box-shadow">
                
                <div className="center mb1">
                <TeamName></TeamName>
                </div>      

               <Team></Team>     
               
               </div>
               <ChooseTeam></ChooseTeam>
                  
              </div>
              <div className="center w100"> <div  className="exitRoom center  needHover w100"> Exit Room </div> </div>
          </div>
      </div>
    );
  }