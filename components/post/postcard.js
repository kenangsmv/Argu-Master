import { Divider, Button } from "@material-ui/core";
import Profile from "../../images/user1.jpg";
import Like from "../../icons/like.png";
import Comments from "../../icons/comments.png";
import Gots from "../../icons/dots.png";
import Voting from '../post/voting'
import moment from "moment"
import Link from "next/link"
import Live from '../../icons/live.svg'

const Postcard = ({data}) => {
  console.log(data)
  return (
    <div className={"postCard boxColor column p1 mb1 box-shadow"}>
      <div className={"post w100"}>
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
        <Voting  data={{topic1:data.topic1,topic2:data.topic2}} ></Voting>
        <div
          className={
            "postBottom w100 column-flex-start border-top border-bottom"
          }
        >
          <div className={"w100 space-evenly"}>
            <img className={"icons"} src={Like} alt="" />
            <img className={"icons"} src={Comments} alt="" />
            <Link href={data.string_id}>
            <Button variant="contained" color="primary">
              Join
            </Button>
            </Link>
            <img className={"icons"} src={Live} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Postcard;
