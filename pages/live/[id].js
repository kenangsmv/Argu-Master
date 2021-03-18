import React, { useState, useEffect } from "react";
import { getOneDebate } from "../../actions/requests";
import io from "socket.io-client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import styles from "../../styles/Home.module.css";
import TopicModal from "../../components/Modal/TopicSelectionModal";
import LeftSide from "../../components/deabteroomComponents/sides/leftside/left";
import MiddleSide from "../../components/deabteroomComponents/sides/middle/middle";
import RightSide from "../../components/deabteroomComponents/sides/rightside/right";
import TopicSelection from "../../components/deabteroomComponents/topicSelection";
const ENDPOINT = "http://localhost:5000";
//const ENDPOINT = "https://argue-backend.herokuapp.com";
let socket;

const Chat = ({ room_info, available }) => {
  const user = useSelector((state) => state.user.currentUser);

  const [state, setState] = useState(null);
  console.log("available", available);
  const [totalUser, setTotalUser] = useState(0);
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [mySide, setMySide] = useState("");
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    console.log("availabe", available);
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
        setTotalUser(users);
      });

      socket.on("welcome", ({ all_data }) => {
        console.log("welcome", all_data);
        setState(all_data);
        setMessages(all_data.messages);
      });
      socket.on("newUpdate", ({ all_data }) => {
        console.log("newUpdate", all_data);
        setState(all_data);
        setMessages(all_data.messages);
      });
      socket.on("message", ({ all_data }) => {
        console.log("message", all_data);
        setMessages(all_data);
      });
    }
  };

  const sendMessage = (message) => {
    let m_ = {
      message: message,
      message_holder: user.name,
      side: mySide,
      direction: mySide === room_info["topic1"] ? true : false,
    };

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

  const like = (id) => {
    socket.emit(
      "like",
      { id: id, room: room_info.string_id, token: user.token },
      (error) => {
        if (error) {
          console.log(error);
        }
      }
    );
  };

  const whatIsMySide = (side) => {
    console.log(side);
  };

  const angry = (id) => {
    socket.emit(
      "angry",
      { id: id, room: room_info.string_id, token: user.token },
      (error) => {
        if (error) {
          console.log(error);
        }
      }
    );
  };
  const calculateScore = () => {
    const { topic1, topic2 } = state ? state.room_info : {};
    let topic1Score = 0;
    let topic2Score = 0;

    state.messages.map((message) => {
      if (message.side === topic1) {
        topic1Score =
          topic1Score + (message.likes.length - message.angry.length);
      }
      if (message.side === topic2) {
        topic2Score =
          topic2Score + (message.likes.length - message.angry.length);
      }
    });

    console.log({ topic1Score, topic2Score, topic1, topic2 });

    return { topic1Score, topic2Score, topic1, topic2 };
  };

  const filterUser = (topic) => {
    return state.users.filter((user) => user.side === topic);
  };

  const amItaken = () => {
    let usersInDebate = state.users; // debate katılan userlar hepsi


    let myToken = user?.token;

    let amIinside = usersInDebate.find((user) => user.token === myToken);





    return amIinside;
  };

 






  const joinDebate = (side) => {
    if (side) {
      let joiner = { token: user.token, side: side, username: user.username };

      socket.emit(
        "joinDebate",
        { data: joiner, room: room_info.string_id },
        (error) => {
          if (error) {
            console.log(error);
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
  const { topic1, topic2 } = state ? state.room_info : {};
  return available && state ? (
    <div>
      <div className="debateRoom w100 center column">
        <div className={styles.homeContainer}>
          <TopicModal
            style={{
              outline: "none",
            }}
            Comp={TopicSelection}
            joinDebate={joinDebate}
            room_info={state.room_info}
            open={open}
            cancel={closeModal}
          />

          <LeftSide users={filterUser(topic1)} topic={topic1} />
          <MiddleSide
            debate_info={state.room_info}
            messages={messages}

checkUser={checkUser()}

            mySide={mySide}
            sendMessage={sendMessage}
            like={like}
            angry={angry}
            scores={calculateScore()}
        amItaken={amItaken()}


          />
          <RightSide
            topic={topic2}
            users={filterUser(topic2)}
            totalUser={totalUser}
          />
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
