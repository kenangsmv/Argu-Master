import { Divider, Button } from "@material-ui/core";
import Profile from "../../images/user1.jpg";
import Like from "../../icons/like.png";
import Comments from "../../icons/comments.png";
import Join from "../../icons/join.png";
import Voting from '../post/voting'

const Postcard = () => {
  return (
    <div className={"postCard boxColor column p1 mb1"}>
      <div className={"post w100"}>
        <div className={"postTop w100"}>
          <div className={"topConent boxColor row center"}>
            <img className={"image"} src={Profile} alt="" />
            <div className="topTextContent w100 column pl05">
              <h5>Kanan Gasimov</h5>
              <span>45m</span>
            </div>
          </div>
        </div>
        <div className={"postText w100"}>
          <span className={"p1"}>
            Salam. Hər vaxtınız xeyir! Belə bir sual yaranıb. GoogledaSalam. Hər vaxtınız xeyir! Belə bir sual yaranıb. GoogledaSalam. Hər vaxtınız xeyir! Belə bir sual yaranıb. GoogledaSalam. Hər vaxtınız xeyir! Belə bir sual yaranıb. GoogledaSalam. Hər vaxtınız xeyir! Belə bir sual yaranıb. GoogledaSalam. Hər vaxtınız xeyir! Belə bir sual yaranıb. GoogledaSalam. Hər vaxtınız xeyir! Belə bir sual yaranıb. GoogledaSalam. Hər vaxtınız xeyir! Belə bir sual yaranıb. GoogledaSalam. Hər vaxtınız xeyir! Belə bir sual yaranıb. GoogledaSalam. Hər vaxtınız xeyir! Belə bir sual yaranıb. GoogledaSalam. Hər vaxtınız xeyir! Belə bir sual yaranıb. GoogledaSalam. Hər vaxtınız xeyir! Belə bir sual yaranıb. Googleda  
          </span>
        </div>
        <Voting></Voting>
        <div
          className={
            "postBottom w100 column-flex-start border-top border-bottom"
          }
        >
          <div className={"w100 space-evenly"}>
            <img className={"icons"} src={Like} alt="" />
            <img className={"icons"} src={Comments} alt="" />
            <Button variant="contained" color="primary">
              Join
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Postcard;
