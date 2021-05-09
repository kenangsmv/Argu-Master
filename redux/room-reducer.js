import { updateLocale } from "moment";

const INITIAL_STATE = {
  roomData: {
    count: 0,
    debaters: [],
    messages: [],
    room_info: {},
    scores: {},
    users: []
  },
};

/**
   * 
   * 
   *  debate_info={state.room_info}
            messages={messages}
            checkUser={checkUser()}
            mySide={mySide}
            sendMessage={sendMessage}
            like={like}
            checkUser={checkUser()}
            angry={angry}
            ref={messagesEndRef}
            scores={calculateScore()}
   * 
   */

const calculateScore = (debate_info) => {
  console.log(debate_info)
  const { topic1, topic2 } = debate_info;
  let topic1Score = 0;
  let topic2Score = 0;
  let topic1likes = 0;
  let topic2likes = 0;
  let topic1Percent=50
  let topic2Percent=50
  let totalPoint=0
  debate_info.messages.map((message) => {
    let likesCount = message.likes.length;
    let angryCount = message.angry.length;
    if (message.side === topic1) {
      topic1Score += likesCount - angryCount;
      topic1likes += likesCount;
    }
    if (message.side === topic2) {
      topic2Score += likesCount - angryCount;
      topic2likes += likesCount;
    }
  });
  if (topic1Score < 1) topic1Score = 0;
  if (topic2Score < 1) topic2Score = 0;
    
   totalPoint=topic1Score+topic2Score
  if(totalPoint<1){
    topic1Percent=50
    topic2Percent=50
  }else{

    topic1Percent=(topic1Score/totalPoint)*100
    topic2Percent=(topic2Score/totalPoint)*100
  }
 


  return { topic1Percent, topic2Percent, topic1, topic2, topic1likes,topic2likes,views:debate_info.user_count,messageCount:debate_info?.messages?.length};
};

const updateRoom = (state, action) => {

  let temp = { ...state.roomData }
  let datas=action.payload
  console.log("state in redux ",datas)
  let scores=calculateScore(datas.room_info)
   return {...action.payload,scores:scores}

};

const roomReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case "debateRoomUpdateAll":
      return {
        ...state,
        roomData: updateRoom(state, action),
      };
    case "totalUserUpdate":
      return {
        ...state,
        totalUser: action.payload,
      };

    default:
      return state;
  }
};

export default roomReducer;
