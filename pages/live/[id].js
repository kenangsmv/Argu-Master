import React, { useState, useEffect } from "react";
import { getOneDebate } from "../../actions/requests";
import io from "socket.io-client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import styles from "../../styles/Home.module.css";

import LeftSide from "../../components/deabteroomComponents/sides/leftside/left";
import MiddleSide from "../../components/deabteroomComponents/sides/middle/middle";
import RightSide from "../../components/deabteroomComponents/sides/rightside/right";



//const ENDPOINT = "http://localhost:5000";
const ENDPOINT = "https://argue-backend.herokuapp.com";
let socket;

const Chat = ({ room_info, available }) => {
  const user = useSelector((state) => state.user.currentUser);

  const [state, setState] = useState(null);
  console.log("available", available);
 
  const [totalUser, setTotalUser] = useState([]);
  const [messages, setMessages] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  const disconnect = () => {
    console.log("kapanıyorrrrrrrrrr");
    socket.emit("myDisconnect", {
      room: id,
    });
    socket.disconnect();
  };

  const connectSocket = () => {
    if (id) {
      socket = io(ENDPOINT);

      socket.emit(
        "join",
        {
          id: socket.id,
          room: id,
          data: room_info,
        },
        (error) => {
          if (error) {
            alert(error);
          }
        }
      );

      socket.on("userCountChanged", ({ room, users }) => {
        setTotalUser(users);
      });

      socket.on("welcome", ({ all_data }) => {
        console.log("welcome", all_data);
        setState(all_data);
        setMessages(all_data.messages);
      });
      socket.on("message", ({ all_data }) => {
        console.log("message", all_data);
        setMessages(all_data);
      });
    }
  };

  
  React.useEffect(() => {
    console.log("availabe", available);
    if (available) {
      if (!room_info.live) {
        console.log("is live !");
        router.push(`${room_info.string_id}`);
      } else {
        connectSocket();
      }
    }
  }, [room_info]);

  useEffect(() => {
    return () => {
      console.log("cleaned up");
      disconnect();
    };
  }, []);

  const sendMessage = (message) => {

    let m_ = { message: message, message_holder: user.name };

    socket.emit(
      "message",
      { message: m_, room: room_info.string_id },
      (error) => {
        if (error) {
          console.log(error);
        }
      }
    );
  
  };

  return available && state ? (
    <div>
      <div className="debateRoom w100 center column">
       
        <div className={styles.homeContainer}>
          <LeftSide></LeftSide>
          <MiddleSide debate_info={state.room_info}  messages={messages} sendMessage={sendMessage}></MiddleSide>
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  ) : (
    <h2>loading...</h2>
  );
};

export default Chat;

export async function getServerSideProps({ query }) {
  const res = await getOneDebate(query.id);

  const data = await res.data.data;
  console.log("data", data);
  // Fetch data from external API
  let available = data ? true : false;

  // Pass data to the page via props
  return { props: { room_info: data, available } };
}
