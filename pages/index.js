import Head from "next/head";
import styles from "../styles/Home.module.css";

import Navbar from "../components/navbar/navbar";
import LeftSide from "../components/leftSide/leftSide";
import Flow from "../components/flow/flow";
import RightSide from "../components/rightSide/rightSide";
import {getDebate} from "../actions/requests"
import { initializeStore } from '../redux/store'

export async function getServerSideProps(){
  const reduxStore = initializeStore()
  const { dispatch } = reduxStore
  console.log("uriiiiiiiiiiiiiiiiiii",process.env.MONGODB_URI)
  const res = await getDebate()
 
  const data = await res.data.data
  // Fetch data from external API
  dispatch({
    type: 'SET_DEBATES',
  payload:data
  })
 

  // Pass data to the page via props
  return { props: { initialReduxState: reduxStore.getState() } }
}



export default function Home(props) {
  



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
