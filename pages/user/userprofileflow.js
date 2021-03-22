import React, { useState, useEffect } from "react";
import styles from "./userprofile.module.css";
import PostCard from "../../components/post/postcard.js";
import CreateDebate from "../../components/post/createdebate";
import Slider from "../../components/Slider/slider"

function flow({debates,isProfile}) {
  

  const sortTıme=(a,b)=>{return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()}
  console.log("debates",debates)


  return (
    <div className="w90">
      { !debates? (
        <div>yükleniyor</div>
      ) : (
        <div className={`w100 center column  ${isProfile?"": "border-left border-right "}`}>
          {isProfile?null:<Slider></Slider>}
          <CreateDebate></CreateDebate>

          {
                
              debates?.sort(sortTıme).map(post=><PostCard  key={post.id}   data={post}   ></PostCard>)
          }


       
       
        </div>
      )}
    </div>
  );
}



export default flow