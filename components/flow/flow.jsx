import React, { useState, useEffect } from "react";
import styles from "./flow.module.css";
import PostCard from "../post/postcard.js";
import CreateDebate from "../post/createdebate";
export default function flow() {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //get data

    let gelen_obj = {
      posts: [
        {
            id:"123123",
          post_holder: "kenan",
          created_at: new Date().getHours(),
          content:
            "   Salam. Hər vaxtınız xeyir! Belə bir sual yaranıb. GoogledaSalam",
          side_left: "Galatasaray",
          side_right: "beşiktaş",
        },
        {
            id:"12312322",
          post_holder: "mert",
          created_at: new Date().getHours(),
          content: "    Belə bir sual yaranıb. GoogledaSalam",
          side_left: "fener",
          side_right: "trabzon",
        },
      ],
    };

    setPosts(gelen_obj.posts);
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

              posts.map(post=>   <PostCard key={post.id}   data={post}   ></PostCard>)
          }


       
       
        </div>
      )}
    </div>
  );
}