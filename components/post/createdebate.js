import React, { useState } from "react";

import Profile from "../../images/user3.jpg";
import Modal from "../Modal/Modal";
export default function createdebate() {
  const [open, setOpen] = useState(false);

  const change = () => {
    setOpen(!open);
  };
console.log("şuanki state",open)
  return (
    <div className="w100 center">
      <div onClick={change} className="createDebate center mb1 needHover">
        Deabte Olustur
      </div>
      <Modal open={open} cancel={change}></Modal>
    
    </div>
  );
}
