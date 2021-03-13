import React from "react"
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { getOneDebate } from "../actions/requests";
import { useRouter } from "next/router";


export async function getServerSideProps({ query }) {
  console.log(query, "query");
  console.log("idddd", query.id);

  const res = await getOneDebate(query.id);

  const data = await res.data.data;
  console.log("res data",res.data)

  // Fetch data from external API
  let available = data ? true : false;

  // Pass data to the page via props
  return { props: { room_info: data, available } };
}

export default function Home({ room_info, available }) {
  const router = useRouter();
  const [pageCondition,setPageCondition]=React.useState(false)
  React.useEffect(() => {
      console.log("availabe",available)
    if (available) {
      if (room_info.live) {
        console.log("is live !");
        router.push(`live/${room_info.string_id}`);
        
      }else{
        setPageCondition("static")
      }
    }
  }, [room_info]);
console.log(pageCondition)
  return (

<div>

 
  <h2>indexlendi</h2>
</div>

  );
}
