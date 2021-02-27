import User from '../../../images/user3.jpg' 
import Input from '../../elements/input'
import TextField from "@material-ui/core/TextField";
import Like from '../comments/like'
import Dots from '../../../icons/dots.png'
export default function DebateRoom() {
  <script src="popper.js"></script>
    return (
        <div>
              <div className="w100 row pt1">
           
              </div>
             <div className="user row pt1">
                 <div className="pr05">
                <img className="image" src={User} alt=""/>
                </div>
                    <div className="boxColor pl1 pr1 pt05 pb1 border-radius15px box-shadow text-align-justify relative">

                    <div>
                    <h5>Enes Bugra Canak</h5>
                    </div>

                    <div>
                    <span>İzoly Turbox almayınız. N11 GittiGidiyor gibi platformlardan alım yapmayınız. Vatan Mediamark gibi bilindik yerden alışveriş yapınız. Bütçenizi söylerseniz güzel bir sistem tavsiye ederim.</span>      
                    </div>

                    <div className="voteButtonAbsolute">
                       <Like></Like>
                       </div>
                       
                       <img className="vote-dots" src={Dots} alt=""/>
                       
                    </div>
             </div>
             
           
      </div>
    );
  }