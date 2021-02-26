import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
   
  backgroundColor: theme.palette.background.paper,
  borderRadius:"30px",
border:"none",
 
  
    padding: theme.spacing(4, 1, 3),
  },
}));

export default function SimpleModal({ open, cancel }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div className="test">
      <Modal
        style={{
          overflowY: "auto",
          alignSelf: "center",
          top: "10%",
         
        }}
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
    
      >
        <div
          style={modalStyle}
          className={`${classes.paper} responsive-w-100 relative modal`}
        >
      
        
        </div>
       
      </Modal>
    </div>
  );
}
