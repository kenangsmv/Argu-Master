import React, { useState, useEffect, } from "react";
import { getOneDebate } from "../../actions/requests";
import io from "socket.io-client";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import styles from "../../styles/Home.module.css";
import TopicModal from "../../components/Modal/TopicSelectionModal";

import Middle from "../../components/newdebateroomcomp/sides/newmiddle";
import Navbar from "../../components/newdebateroomcomp/newnavbar/navbar";
import Left from "../../components/newdebateroomcomp/sides/left";
import Right from "../../components/newdebateroomcomp/sides/right";

import TopicSelection from "../../components/deabteroomComponents/topicSelection";
const ENDPOINT = "http://localhost:5000";
//const ENDPOINT = "https://argue-backend.herokuapp.com";
let socket;

const Chat = ({ room_info, available }) => {
  const dispatch = useDispatch();

  

  const user = useSelector((state) => state.user.currentUser);

  const [state, setState] = useState(null);

  const [totalUser, setTotalUser] = useState(0);
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [mySide, setMySide] = useState("");
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    if (available) {
      if (!room_info.live) {
        router.push(`${room_info.string_id}`);
      } else {
        connectSocket();
      }
    }
  }, [room_info]);

  

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
        // setTotalUser(users);
        console.log("users socket 66", users);
        dispatch({ type: "totalUserUpdate", payload: users });
      });

      socket.on("welcome", ({ all_data }) => {
        //all
        dispatch({ type: "debateRoomUpdateAll", payload: all_data });
        setState(true)
      });
      socket.on("newUpdate", ({ all_data }) => {
        //all
        dispatch({ type: "debateRoomUpdateAll", payload: all_data });
      });
      socket.on("message", ({ all_data }) => {
        //all
        dispatch({ type: "debateRoomUpdateAll", payload: all_data });
       
      });
    }
  };

  const sendMessage = (message) => {
    let m_ = {
      message: message,
      message_holder: user.username,
      side: mySide,
      direction: mySide === room_info["topic1"] ? true : false,
    };

    console.log("message", m_);
    socket.emit(
      "message",
      {
        message: m_,
        room: room_info.string_id,
        token: user?.token,
        username: user?.username,
      },
      (error) => {
        if (error) {
          console.log(error);
        }
      }
    );
  };

  const like = (id) => {
    socket.emit(
      "like",
      {
        id: id,
        room: room_info.string_id,
        token: user?.token,
        username: user?.username,
      },
      (error) => {
        if (error) {
          if (error.error === "authError") {
            dispatch({ type: "SET_MODAL", payload: true });
          }
        }
      }
    );
  };

  const angry = (id) => {
    socket.emit(
      "angry",
      {
        id: id,
        room: room_info.string_id,
        token: user?.token,
        username: user?.username,
      },
      (error) => {
        if (error) {
          if (error.error === "authError") {
            dispatch({ type: "SET_MODAL", payload: true });
          }
        }
      }
    );
  };
 

  

  const joinDebate = (side) => {
    if (side) {
      let joiner = {
        token: user?.token,
        username: user?.username,
        side: side,
        username: user?.token,
        username: user?.username,
      };

      socket.emit(
        "joinDebate",
        { data: joiner, room: room_info.string_id },
        (error) => {
          if (error) {
            if (error.error === "authError") {
              dispatch({ type: "SET_MODAL", payload: true });
            }
          } else {
            setMySide(side);
          }
        }
      );
    }

    closeModal();
  };

  const closeModal = () => {
    setOpen(false);
  };


  return available&&state ? (
    <div className="newdebateroomLayout center">
      <div className="newdebateroomBody">
        <Navbar></Navbar>
        <div className="bigRight row center">
          <TopicModal
            style={{
              outline: "none",
            }}
            Comp={TopicSelection}
            joinDebate={joinDebate}
            open={open}
            user={user}
            cancel={closeModal}
          />
          <Left />
          <Middle
            user={user}
            mySide={mySide}
            sendMessage={sendMessage}
            like={like}
            angry={angry}
           
          />
          <Right />
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

/**7
 * 
 * 

            <Left users={filterUser(topic1)} topic={topic1} />
            
 */
