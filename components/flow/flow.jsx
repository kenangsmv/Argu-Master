import React, { useState, useEffect } from "react";
import styles from "./flow.module.css";
import PostCard from "../post/postcard.js";
import CreateDebate from "../post/createdebate";
import {getDebate} from "../../actions/requests"
export default function flow() {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    //get data
const debates=await getDebate()
    console.log(debates)

    setPosts(debates.data?debates.data.data:[]);
    setLoading(false);
  }, []);



console.log(posts)
  return (
    <div className={styles.flowContainer}>
      { loading ? (
        <div>yükleniyor</div>
      ) : (
        <div className="w100 center column">
          <CreateDebate></CreateDebate>

          {

              posts.map(post=>   <PostCard key={post.id}   data={post}   >git remote</PostCard>)
          }


       
       
        </div>
      )}
    </div>
  );
}
