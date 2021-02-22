import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";


 
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
          label="Debate Topic"
          placeholder="Hangisi telefon daha iyi ?"
          variant="outlined"
          onChange={(e) => changeValue(e.target.name, e.target.value)}
        />
         
       </div>
       <div className="teams space-between w100">
        
       <TextField
      className="w50"
      id="outlined-basic"
      size="small"
      label="Topic1"
      placeholder="Samsung is better"
      variant="outlined"
      name="topic1"
      onChange={(e) => changeValue(e.target.name, e.target.value)}
    />
    
   
   
    <TextField
      
      className="w50"
      id="outlined-basic"
      size="small"
      label="Topic2"
      placeholder="Iphone is better"
      variant="outlined"
      name="topic2"
      onChange={(e) => changeValue(e.target.name, e.target.value)}
    />
    
    
       </div>
    <Button variant="contained" color="primary">
      Debate Oluştur
    </Button>
  </div>
  );
}