import TeamMember from "./leftteamusers";

import styles from "../../../leftSide/leftSide.module.css";
import ChooseTeam from "../../chooseteam/chooseteam";
export default function lefside({topic,users}) {
  return (
    <div className={styles.containerLeft}>
      <div className="pl1 pr05 w100 sticky">
        
        <div className="w100 boxColor mt1 mb1 pl1 pr1 pb1 border-radius5px box-shadow">
          <div className="center mb1">
        {topic}
          </div>

         {users.map(user=><TeamMember username={user.username}></TeamMember>)}
        </div>

        <div className="center column boxColor pl1   pr1 pb1 border-radius5px box-shadow w100">
          <h5>Remaining time</h5>
          <span>13:45</span>
        </div>
      </div>
    </div>
  );
}
