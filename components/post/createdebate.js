import React, {useState} from 'react'
import { Button } from "@material-ui/core";
import Profile from '../../images/user3.jpg'
import Modal from '../../Modal/Modal.js'


export default function createdebate() {


    const [open, setOpen] = useState(false);
  
 const change =()=>{
     setOpen(!open);
 };
 
 return (   
     <div className={"w100 center"}>
          
            <Button className="createDebate center mb1" variant="contained" color="primary" onClick={change}>
              Create Debate
            </Button>
            <Modal open={open} cancel={change}></Modal>
       </div>
    )
}
