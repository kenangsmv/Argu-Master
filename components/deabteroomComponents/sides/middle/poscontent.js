import React from "react";

export default function poscontent({debate_info}) {
    console.log(debate_info)
  return (
    
      <div className="livePostConent box-shadow topicTitle boxColor border-radius10px w100 p1 text-align-justify mb02">
        <span className="mb1 w100">
          {" "}
       {debate_info.title}
        </span>
      </div>
    
  );
}
