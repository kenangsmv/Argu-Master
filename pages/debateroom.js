import Head from "next/head";
import Navbar from "../components/navbar/navbar"
import styles from "../styles/Home.module.css";
import Vs from '../components/deabteroomComponents/vs/versus'
import LeftSide from '../components/deabteroomComponents/sides/left'
import MiddleSide from '../components/deabteroomComponents/sides/middle'
import RightSide from '../components/deabteroomComponents/sides/right'
export default function DebateRoom() {
    return (
        <div className={styles.container}>
        <Navbar></Navbar>
  
        <div className={styles.homeContainer}>
              <div className="debateRoom w80">
                 
              <div className="debateRoomBody row">
                  <LeftSide></LeftSide>
                  <MiddleSide>
                  
                  </MiddleSide>
                  <RightSide></RightSide>
              </div>
            </div>
        </div>
      </div>
    );
  }
  