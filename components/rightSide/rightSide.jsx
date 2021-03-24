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
      <div className="rightTop">
        <p>SELECTED</p>
        <h2>Trend Debates</h2>
      </div>
      <div className="w100 center p1">
      <div className="percentContainer ">
        <div class="percent2 center">
          <svg>
            <circle cx="100" cy="100" r="100">
              <div className="innerCircle"></div>
            </circle>
            <circle cx="100" cy="100" r="100"></circle>
          </svg>
          <div class="innerCircle2">
            <h2>
              75<span>%</span>
            </h2>
          </div>
        </div>
      </div>
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
