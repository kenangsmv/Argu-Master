import React, { useState } from "react";
import { Button } from "@material-ui/core";

import Stage1 from "./stage1";
import Stage2 from "./stage2";


 
export default function createPost() {
  const [state, setState] = useState({
    users: [],
    user: "60283e32103a9003f860a515",
    limit: 10,
    live: true,
    title: "",
    topic1: "",
    topic2: "",
    messages: [],
  });
  const [stage, setStage] = useState(1);

  const next = () => {
    setStage(stage + 1);
  };
  const changeValue = (name, value) => {
    console.log("name",name)
    console.log("value",value)
    setState({ ...state,[name]: value });
  };


  return (
    <div className="w100 pl2 pr2 pb2 pt1 center column">
    <div className="modalTop w100 center">
      {stage == 1 && <Stage1 changeValue={changeValue} >
      
    </Stage1>}
      {stage == 2 && <Stage2 topic1_={state.topic1} topic2_={state.topic2}>
     
    </Stage2>}
    </div>
    <Button
      variant="contained"
      color="primary"
      className="mt4 w100"
      onClick={next}
    >
       
      next
    </Button>
    
    </div>
  );
}