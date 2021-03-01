import User from '../../../images/user3.jpg' 



import Dots from '../../../icons/dots.png'
import Like from './like'

import {Button} from '@material-ui/core'
export default function DebateRoom() {
  
    return (
        <div className="w100">
              <div className="w100 row pt1">
           
              </div>
             <div className="user row pt1 w100">
                 <div className="pr05">
                <img className="image" src={User} alt=""/>
                </div>
                    <div className="boxColor pl1 pr1 pt05 pb05 border-radius15px box-shadow text-align-justify relative w100">

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