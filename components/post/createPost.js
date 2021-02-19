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
    <div className="w100 p3 center column">
      <TextField
        className="wh-100 m1"
        id="outlined-basic"
        size="small"
        label="Tartışmanın Konusu"
        variant="outlined"
        name="title"
        onChange={(e) => changeValue(e.target.name, e.target.value)}
      />
      <TextField
        className="wh-100 m1"
        id="outlined-basic"
        size="small"
        label="Taraf 1 (ex . iphone daha iyi)"
        variant="outlined"
        name="topic1"
        onChange={(e) => changeValue(e.target.name, e.target.value)}
      />
      <TextField
        className="wh-100 m1"
        id="outlined-basic"
        size="small"
        label="Taraf 2 (ex . samsung daha iyi)"
        variant="outlined"
        name="topic2"
        onChange={(e) => changeValue(e.target.name, e.target.value)}
      />
      <Button variant="contained" color="primary">
        Debate Oluştur
      </Button>
    </div>
  );
}
