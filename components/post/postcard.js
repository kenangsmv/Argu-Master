import { Divider, Button } from "@material-ui/core";
import Profile from "../../images/user1.jpg";
import Like from "../../icons/like.png";
import Comments from "../../icons/comments.png";
import Gots from "../../icons/dots.png";
import Voting from '../post/voting'
import moment from "moment"
import Link from "next/link"
import Live from '../../icons/live.svg'
import VS from "../deabteroomComponents/vs/versus"

const Postcard = ({data}) => {
  console.log(data)
  return (
    <div className={"postCard boxColor column p1 mb1 box-shadow"}>
      <div className={"post w100 relative"}>
        <div className="postCardLive row center">
<div className="redCircle"></div>
          <span> 1.5k</span>
        </div>
        <div className={"postTop w100"}>
          <div className={"topConent boxColor row center"}>
            <img className={"image"} src={Profile} alt="" />
            <div className="topTextContent w100 column pl05">
              <h5>{data.post_holder_name} </h5>

              <time >{moment(data.createdAt).fromNow()}</time>
                
            </div>
          </div>
        </div>
        <div className={"postText w100"}>
          <span className={"p1"}>
          {data.title}
          </span>
        </div>
        <Voting  data={{topic1:data.topic1,topic2:data.topic2,id:data.string_id}} ></Voting>
       
        <div
          className={
            " w100 mt1"
          }
        >
         <VS></VS>
        </div>
      </div>
    </div>
  );
};
export default Postcard;
