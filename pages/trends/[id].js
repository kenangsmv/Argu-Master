import React from "react"
import Head from "next/head";
import styles from "../../styles/Home.module.css";

import LeftSide from "../../components/leftSide/leftSide";
import Flow from "../../components/flow/TrendFlow";
import RightSide from "../../components/rightSide/rightSide";

import { getTrends} from "../../actions/requests";
import { useRouter } from "next/router";
import Slider from "../../components/Slider/slider"
import Navbar from "../../components/newdebateroomcomp/newnavbar/navbar"

import Profile from '@material-ui/icons/PersonOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined'
import Search from '@material-ui/icons/Search'


export async function getServerSideProps({ query }) {
  console.log(query, "query");
  console.log("idddd", query.id);

  const res = await getTrends(query.id);

  const data = await res.data.data;
  console.log("res data",res.data)

  // Fetch data from external API
  let available = data ? true : false;

  // Pass data to the page via props
  return { props: { debates: data } };
}

export default function Home({ debates}) {
 

  return (

    <div className={styles.container}>
         
         
         <div className="respMenu space-around">
           <div className="respIcons column center">
           <HomeIcon></HomeIcon>
           <span>Home</span>
           </div>
           <div className="respIcons column center">
           <Search></Search>
           <span>Search</span>
           </div>
           <div className="respIcons column center">
           <Profile></Profile>
           <span>Profile</span>
           </div>
         </div>
    <div className={styles.homeContainer}>
   
  
     <div className="w100 row ">
     <Navbar></Navbar>

<Flow debates={debates}></Flow>
<RightSide></RightSide>
     </div>
      
     
    </div>
  </div>

  );
}
