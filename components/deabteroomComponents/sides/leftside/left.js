import Team from './leftteamusers'
import TeamName from './leftteamname'

export default function DebateRoom() {
    return (
        <div className="pr1 w20">
            <div className="w100 boxColor mb2 mt1 pl1 pr1 pb1 border-radius5px box-shadow" >
                
              <div className="center mb1">
                <TeamName></TeamName>
                </div>  
                <div className="table" >
                 <Team></Team>
                
                </div>
        </div>
          <div className="center column boxColor pl1 pr1 pb1 border-radius5px box-shadow">
                <h5>Remaining time</h5>
                <span>13:45</span>
          </div>
      </div>
    );
  }