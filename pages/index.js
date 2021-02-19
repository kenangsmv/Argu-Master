import Head from "next/head";
import styles from "../styles/Home.module.css";

import Navbar from "../components/navbar/navbar";
import LeftSide from "../components/leftSide/leftSide";
import Flow from "../components/flow/flow";
import RightSide from "../components/rightSide/rightSide"

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>

      <div className={styles.homeContainer}>
        <LeftSide></LeftSide>
      
        <Flow></Flow>
<RightSide></RightSide>


       
      </div>
    </div>
  );
}
