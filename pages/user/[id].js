import React from "react"
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import profilestyles from '../user/userprofile.module.css'

import LeftSide from "../../components/leftSide/leftSide";
import ProfileFlow from "../user/userprofileflow";
import RightSide from "../../components/rightSide/rightSide";

import { myDebates} from "../../actions/requests";
import { useRouter } from "next/router";
import Slider from "../../components/Slider/slider"
import Profile from '../../images/user2.jpg'
 
export async function getServerSideProps({ query }) {
  console.log(query, "query");
  console.log("idddd", query.id);

  const res = await myDebates(query.id);

  const data = await res.data.data;
  console.log("res data",res.data)

  // Fetch data from external API
  let available = data ? true : false;

  // Pass data to the page via props
  return { props: { debates: data.debate,user:data.user } };
}

export default function Home({debates ,isProfile}) {
console.log("debates",debates)

  return (

    <div className={styles.container}>
<div className={styles.homeContainer}>
      <LeftSide></LeftSide>
      <div className={profilestyles.profileMiddle}>

<div className="topContainer center" >

<div className="profileImageContainer center ">
  <img src={Profile} alt=""/>
</div>
 

</div>
<div className="bottomContainer relative">
  
  <div className="column center">
    <h3>Kanan Gasimov</h3>
     <div className="followButton center needHover mt05">
       folow
     </div>
     </div>

  <div className="informationDesk w100 center mt05 "> 
    <ul >
      <li className=" border-right">
      <span>Debate 21</span>
        
      </li>
      <li className=" border-right">
        <span>Followers 130k</span>
        
        </li>
      <li className="">
        <span>Following  33</span>
        
        </li>
    </ul>   
  
  </div>
  <hr/>



  <div className="center column mt2 ">
  <div className="profileMenu">
       <ul className="space-between">
         <li>Debates</li>
         <li>Joined</li>
         <li>Saved</li>
       </ul>
       
   </div>
   
        <ProfileFlow isProfile={true} debates={debates}></ProfileFlow>
        </div>
        
</div>

</div>

      
    </div>

    </div>
  );
}
