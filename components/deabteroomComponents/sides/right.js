import { Button } from "@material-ui/core";


export default function DebateRoom() {
    return (
        <div className="pl1 w20">
            <div className=" w100 white boxColor mb2 mt1 pl1 pr1 pb1 border-radius5px" >
                <h4 className="center mb1">Samsung</h4>  
                <div className="table column" >
                <span>Enes Bugra Canak 200</span> 
                <span>Bora Kavlak 20</span>
                <span>Oreo Osmanoglu 113</span> 
                
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