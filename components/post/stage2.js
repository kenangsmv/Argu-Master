import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export default function stage2({ changeValue,data }) {






  return (
    <div className="w100 column">
        <div className="center w100 border-bottom">
          <h2 className="mb1">Stage 2</h2>
        </div>
      <div className="mt2 flex-start column mb1">
      <span className="mb05">Select colors</span>
      
      <div className="argueTopic w100 mb2 space-between">
        
      <FormControl variant="outlined" className="w40">
        <InputLabel id="demo-simple-select-outlined-label">Topic 1 color</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          name="topic1_color"
        onChange={(e)=>changeValue(e.target.name,e.target.value)}
          label="Topic 1 color"
          value={data["topic1_color"]}
        >
        
          <MenuItem value={"green"}>green</MenuItem>
          <MenuItem value={"red"}>red</MenuItem>
         
        </Select>
      </FormControl>
      <FormControl variant="outlined"  className="w40">
        <InputLabel id="demo-simple-select-outlined-label">Topic 2 color</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={(e)=>changeValue(e.target.name,e.target.value)}
          label="Topic 2 color"
          value={data["topic2_color"]}
          name="topic2_color"
     
        >
        
          <MenuItem value={"blue"}>blue</MenuItem>
          <MenuItem value={"gray"}>gray</MenuItem>
      
        </Select>
      </FormControl>
      </div>
         </div>

       <div className="flex-start column">
     
          <div className="argueTopic w100 mb1">
          <FormControl variant="outlined" fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">limit of users</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={(e)=>changeValue(e.target.name,e.target.value)}
          label="limit of users"
          name="limit_users"
          value={data["limit_users"]}
        >
         
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className="mt2" fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">time limit</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          name="limit_time"
          label="time limit"
          value={data["limit_time"]}
        >
        
          <MenuItem value={3}>3 hour</MenuItem>
          <MenuItem value={24}>24 hour</MenuItem>
          <MenuItem value={false}>limitless</MenuItem>
        </Select>
      </FormControl>
      </div>
      </div>
    </div>
  );
}
