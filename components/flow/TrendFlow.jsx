import React, { useState, useEffect } from "react";
import styles from "./flow.module.css";
import PostCard from "../post/postcard.js";
import CreateDebate from "../post/createdebate";
import Slider from "../Slider/slider";

function flow({ debates, isProfile }) {
  const sortTıme = (a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  };

  return (
    <div className={styles.flowContainer}>
   
      {!debates ? (
        <div>yükleniyor</div>
      ) : (
        <div className={`w100 column flowContent`}>
        
           <div className="trendTextBox">
            <div className="trendTextContent">
              <h1>Healthy cream is the key to your good mood</h1>
            </div>
          </div>
          {<Slider></Slider>}
         

          <div className="posts w100">
            {debates?.sort(sortTıme).map((post) => (
              <PostCard key={post.id} data={post}></PostCard>
            ))}
          </div>
         
      
        </div>
      )}
    </div>
  );
}
export default flow;
