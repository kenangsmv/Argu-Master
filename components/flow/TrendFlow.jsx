import React, { useState, useEffect } from "react";
import styles from "./flow.module.css";
import PostCard from "../post/postcard.js";
import CreateDebate from "../post/createdebate";
import Slider from "../Slider/slider"



function flow({ debates, isProfile }) {
  const sortTıme = (a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  };

  return (
    <div className={styles.flowContainer}>
      {!debates ? (
        <div>yükleniyor</div>
      ) : (
        <div className={`w100  h100  center column  `}>
          {<Slider></Slider>}
         
<div className="row w100 ">
          {
                
              debates?.sort(sortTıme).map(post=><PostCard  key={post.id}   data={post}   ></PostCard>)
          }


</div>
       
        </div>
      )}
    </div>
  );
}
export default flow;
