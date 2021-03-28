import React from "react";
import styles from "./rightSide.module.css";
import Trends from "../Trends/trendsBar";
import User1 from "../../images/user1.jpg";
import User2 from "../../images/user2.jpg";
import User3 from "../../images/user3.jpg";
import Slider from "../Slider/TrendSlider";

export default function rightSide() {
  return (
    <div className={styles.rightContainer}>
      <div className="rightTop p1">
        <p>SELECTED</p>
        <h2>Trend Debates</h2>
      </div>
      <Slider></Slider>
    
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
