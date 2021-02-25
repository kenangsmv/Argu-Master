import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
export default function stage2({ topic1_, topic2_ }) {
  const [topic1, setTopic1] = React.useState([]);
  const [selected_topic1, set_selected_Topic1] = React.useState([]);
  const [topic2, setTopic2] = React.useState([]);
  const [selected_topic2, set_selected_Topic2] = React.useState([]);

  const toggle = (item, topicName) => {
    if (topicName === "topic1") {
      let isInside = selected_topic1.includes(item);
      if (isInside) {
        let newArr = selected_topic1.filter((key) => key !== item);
        console.log("filterli array", newArr);
        set_selected_Topic1(newArr);
      } else {
        let newArr = [...selected_topic1];
        newArr.push(item);
        if (selected_topic1.length < 1) set_selected_Topic1(newArr);
      }
    }
    if (topicName === "topic2") {
      let isInside = selected_topic2.includes(item);
      if (isInside) {
        let newArr = selected_topic2.filter((key) => key !== item);
        set_selected_Topic2(newArr);
      } else {
        let newArr = [...selected_topic2];
        newArr.push(item);
        if (selected_topic2.length < 1) set_selected_Topic2(newArr);
      }
    }
  };

  const checkTopic1 = (item) => {
    return selected_topic1.includes(item);
  };
  const checkTopic2 = (item) => {
    return selected_topic2.includes(item);
  };

  React.useEffect(() => {
    setTopic1(topic1_.split(" "));
    setTopic2(topic2_.split(" "));
  }, []);

  console.log("selected", selected_topic1);

  return (
    <div className="w100 column">
        <div className="center w100 border-bottom">
          <h2 className="mb1">Stage 2</h2>
        </div>
      <div className="mt2 flex-start column mb1">
      <span className="mb05">Topic 1:</span>
      
      <div className="argueTopic w100 mb2">
        
        {topic1.map((item) => (
          <Button
            key={item}
            onClick={() => toggle(item, "topic1")}
            variant="contained"
            className="ml1"
            style={{ backgroundColor: checkTopic1(item) ? "green" : "white",marginRight:"5px"}}
          >
            {item}
          </Button>

        ))}
      </div>
         </div>

       <div className="flex-start column">
      <span className="mb05">Topic 2:</span>
          <div className="argueTopic w100 mb1">
          {topic2.map((item) => (
            <Button
              key={item}
              onClick={() => toggle(item, "topic2")}
              variant="contained"
              className="ml1"
              style={{ backgroundColor: checkTopic2(item) ? "green" : "white", marginRight:"5px"}}
          >
            {item}
          </Button>
        ))}
      </div>
      </div>
    </div>
  );
}