import React from "react";
import styles from "./rightSide.module.css";
import Trends from "../Trends/trendsBar";
import User1 from "../../images/user1.jpg";
import User2 from "../../images/user2.jpg";
import User3 from "../../images/user3.jpg";
import Slider from "../Slider/DynamicSlider";

export default function rightSide() {
  return (
    <div className={styles.rightContainer}>
      <div className="rightTop p1">
        <p>SELECTED</p>
        <h2>Trend Debates</h2>
      </div>
      <div className="w100 center p1">
      <div className="percentContainer ">
        <div class="percent2 center">
          <svg className="center">
            <circle cx="50" cy="50" r="50">
              <div className="innerCircle"></div>
            </circle>
            <circle cx="50" cy="50" r="50"></circle>
          </svg>
          <div class="innerCircle2">
            <h2>
              75<span>%</span>
            </h2>
          </div>
        </div>
      </div>
    
      </div>
      <div className="w100 row p1 center space-between">
        <div className="rightBox center">
          <h2 className="rightBoxBorder">345</h2>
        </div>
        <div className="rightBox center">

          <h2 className="rightBoxBorder2">213</h2>
        </div>


      </div>
      <div className="w100 row p1 center space-between">
        <div className="rightBox center">
          <h2 className="rightBoxBorder">345</h2>
        </div>
        <div className="rightBox center">

          <h2 className="rightBoxBorder2">213</h2>
        </div>

      </div>
      
      <div className="w100 center mt2">
      <h5 className="neeHover center followButton ">Create</h5>
      </div>
    </div>
  );
}
/**
 * 
 *     <div className={styles.rightContainer}>
      <div className={styles.top}>
        <div className={"winners column center box-shadow"}>
          <h5 className={"p1"}>Best Debaters</h5>

          <div className={"winners-list"}>
          
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Trends></Trends>
      </div>
    </div>
 */
