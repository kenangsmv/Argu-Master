import React, { useState, useEffect } from "react";
import styles from "./flow.module.css";
import PostCard from "../post/postcard.js";
import CreateDebate from "../post/createdebate";
import {getDebate} from "../../actions/requests"
import { connect } from "react-redux";
function flow({debates}) {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);
  



console.log(debates)
  return (
    <div className={styles.flowContainer}>
      { !debates? (
        <div>yükleniyor</div>
      ) : (
        <div className="w100 center column">
          <CreateDebate></CreateDebate>

          {

              debates?.reverse().map(post=>   <PostCard key={post.id}   data={post}   >git remote</PostCard>)
          }


       
       
        </div>
      )}
    </div>
  );
}

const mapStateToProps=(state)=>({
  debates:state.debates.debates
})

export default connect(mapStateToProps)(flow)