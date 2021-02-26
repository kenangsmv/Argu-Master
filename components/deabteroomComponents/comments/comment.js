import User from '../../../images/user3.jpg' 
import Input from '../../elements/input'
import TextField from "@material-ui/core/TextField";
export default function DebateRoom() {
    return (
        <div>
              <div className="w100 row pt1">
              <div className="pr05">
                <img className="image" src={User} alt=""/>
                </div>
                <div className="make-comment MuiInputBase-root1">
                <TextField
          
                            className="w100"
                            id="outlined-basic"
                            size="small"
                            
                            placeholder="Yorum yap"
                            variant="outlined"
                            name="topic2"
                           
          
        />
                 </div>
              </div>
             <div className="user white row pt1">
                 <div className="pr05">
                <img className="image" src={User} alt=""/>
                </div>
                    <div className="boxColor p05 border-radius15px">
                    <h5>Enes Bugra Canak</h5>
                    <span className="">İzoly Turbox almayınız. N11 GittiGidiyor gibi platformlardan alım yapmayınız. Vatan Mediamark gibi bilindik yerden alışveriş yapınız. Bütçenizi söylerseniz güzel bir sistem tavsiye ederim.</span>
                    </div>
             </div>
             
           
      </div>
    );
  }