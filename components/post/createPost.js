import React, { useState } from "react";
import { Button } from "@material-ui/core";

import Stage1 from "./stage1";
import Stage2 from "./stage2";
import Back from "../../images/back.png"
import {newDebate} from "../../actions/requests"

 
export default function createPost() {
  const [state, setState] = useState({
    users: [],
    user: "60283e32103a9003f860a515",

    live: true,
    title: "",
    topic1: "",
    topic2: "",
    messages: [],
    limit_users:10,topic1_color:"green",topic2_color:"blue",limit_time:false
  });
  const [stage, setStage] = useState(1);

  const next = () => {
    setStage(2);
  };
  const back = () => {
    setStage(1);
  };

  const submit =async () => {

   await newDebate(state)

  };

  const changeValue = (name, value) => {
    console.log("name",name)
    console.log("value",value)
    setState({ ...state,[name]: value });
  };


  return (
    <div className="w100 pl2 pr2 pb2 pt1 center column">
        {stage == 2 && <img src={Back} onClick={back} className="needHover" style={{width:40,height:40,position:"absolute",left:20,top:20}}/>}
      
    <div className="modalTop w100 center">
      {stage == 1 && <Stage1 data={state} changeValue={changeValue} >
      
    </Stage1>}
      {stage == 2 && <Stage2 data={state} changeValue={changeValue}>
     
    </Stage2>}
    </div>
    {stage == 1 &&  <Button
      variant="contained"
      color="primary"
      className="mt4 w100"
      onClick={next}
    >
       next
   
    </Button>}
    {stage == 2 &&  <Button
      variant="contained"
      color="primary"
      className="mt4 w100"
      onClick={submit}
    >
       submit
   
    </Button>}
   
    
    </div>
  );
}