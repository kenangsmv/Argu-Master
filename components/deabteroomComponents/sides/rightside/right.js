import { Button } from "@material-ui/core";
import Team from './rightteamusers'
import TeamName from './rightteamname'



export default function DebateRoom() {
    return (
        <div className="pl1 w20">
            <div className=" w100 boxColor mb2 mt1 pl1 pr1 pb1 border-radius5px box-shadow" >
              <div className="center mb1">
                <TeamName></TeamName>
                </div>
                <div className="table" >
                <Team></Team>   
                </div>
        </div>
          <div className="center w100">
          <Button variant="contained" color="primary" className="w100" >
              Exit Room
            </Button>
          </div>
      </div>
    );
  }