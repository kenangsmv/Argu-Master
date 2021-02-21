import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import ModalInput from '../elements/modalInput'

 
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

  const changeValue = (name, value) => {



    setState({ ...state, [name]: value });

};


console.log(state)


  return (
    <div className="w100 p2 center column">
       <div className="modalTop border-bottom w100 center">
         <h2 className="m1">Create Debate</h2>

       </div>
       <div className="mt1 argueTopic w100 mb1">
          <TextField
          id="outlined-multiline-static"
          style={{width:"100%"}}  
          rows={4}   
          multiline
          placeholder="Tartismanin konusu"
          variant="outlined"
          onChange={(e) => changeValue(e.target.name, e.target.value)}
        />

       </div>
       <div className="teams space-between w100"
       >
         <div className="column">
       <TextField
      className="w100"
      id="outlined-basic"
      size="small"
      placeholder="Side 1"
      variant="outlined"
      name="topic1"
      onChange={(e) => changeValue(e.target.name, e.target.value)}
    />
    <span className="pl05 op03">Ex:Samsung is better</span>
    </div>
    <div  className="column">
    <TextField
      className="w100"
      id="outlined-basic"
      size="small"
      placeholder="Side 2"
      variant="outlined"
      name="topic2"
      onChange={(e) => changeValue(e.target.name, e.target.value)}
    />
    <span className="pl05 op03">Ex:Iphone is better</span>
    </div>
       </div>
    <Button variant="contained" color="primary">
      Debate Oluştur
    </Button>
  </div>
  );
}