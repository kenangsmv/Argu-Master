import React from "react"
import Profile from "../../images/user1.jpg";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Voting from "../post/voting";
import moment from "moment";
import Link from "next/link"
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import VS from "../deabteroomComponents/vs/versus";

const Postcard = ({ data }) => {
 
console.log("id",data)

const [state,setState]=React.useState(false)

const recursive=()=>{
  setState(!state)
  
}
React.useEffect(() => {
  setTimeout(() => {
 setState(!state)
  }, 5000);
}, [state])

  const calculateScore = () => {
    const { topic1, topic2 } = data ? data : {};
    let topic1Score = 0;
    let topic2Score = 0;

    data.messages.map((message) => {
      if (message.side === topic1) {
        topic1Score =
          topic1Score + (message.likes.length - message.angry.length);
      }
      if (message.side === topic2) {
        topic2Score =
          topic2Score + (message.likes.length - message.angry.length);
      }
    });

    console.log({ topic1Score, topic2Score, topic1, topic2 });

    return { topic1Score, topic2Score, topic1, topic2 };
  };

  return (
    <div className={"postCard boxColor column p05  box-shadow relative space-between"}>
      <div className="postCardLive row center">
        <div className="redCircle"></div>
        <span> {data.user_count > 0 ? data.user_count : 0}</span>
      </div>
      <div className={"postTop w100 "}>
        <div className={"topConent row center"}>
          <AccountCircleIcon style={{ width: 30 }}></AccountCircleIcon>
          <div className="topTextContent w100 column pl05">
            <h5>{data.post_holder_name} </h5>

            <time>{moment(data.createdAt).fromNow()}</time>
          </div>
        </div>
      </div>
      <div className="postContent">
        Grow a more sustainable business. Sell ads in more places. Get access to
        demand from Google Ads and authorized buyers. Get started today. Manage
        revenue. Monetize video. Get actionable insights.
      </div>

      <input type="checkbox" id="lol-checkbox" checked={state} />

      <label className="center" id="button" for="lol-checkbox">
     
          <div id="knob">
          <div className={`${state?"percent3":"percent4"} center h100`}>
            <svg>
              <circle cx="35" cy="35" r="35">
                <div className="innerCircle3"></div>
              </circle>
              <circle cx="35" cy="35" r="35"></circle>
            </svg>
            <div class="innerCircle3">
              <h2>
               {state?"75":"25"}<span>%</span>
              </h2>
            </div>
          </div>
        </div>
    
        <div id="subscribe">İphone</div>
        <div id="alright">Samsung</div>
      </label>

      <div className={"post w100 relative"}>
        <div className="row w100 center"></div>

        <div className={" w100 row space-between pl1 "}>
        <div className="center">
   
            <FavoriteIcon></FavoriteIcon>
            <span className="ml1">132</span>
       </div>
          <Link href={`/live/${data.string_id}`} >
          <div className="purpleBox center whiteText">Join</div>
          </Link>
     
         
        </div>
      </div>
    </div>
  );
};
export default Postcard;

/**7
 * 
 *     <label class="label">
        <div class="toggle">
          <input
            class="toggle-state"
            type="checkbox"
            name="check"
            value="check"
          />
          <div class="indicator">
         ASD

          </div>
        </div>
      </label>
 */
