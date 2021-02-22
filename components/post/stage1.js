import React from "react";
import TextField from "@material-ui/core/TextField";
export default function stage1({changeValue}) {

  return (
    <div className="w100">
      <div>
        <h2 className="m1">Stage 1</h2>
      </div>
      <div className="mt1 argueTopic w100 mb1">
        <TextField
          id="outlined-basic"
          className="w100 mt2"
          rows={4}
          multiline
          placeholder="Hangi telefon daha iyi ?"
          label="Tartismanin konusu "
          variant="outlined"
          name="title"
          onChange={(e) => changeValue(e.target.name, e.target.value)}
        />
      </div>
      <div className="teams space-between w100">
        <TextField
          className="w45"
          id="outlined-basic"
          size="small"
          placeholder="I think I phone is better"
          label="Topic1"
          variant="outlined"
          name="topic1"
          onChange={(e) => changeValue(e.target.name, e.target.value)}
        />

        <TextField
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          className="w45 "
          id="outlined-basic"
          size="small"
          placeholder="I think samsung is better"
          variant="outlined"
          name="topic2"
          label="Topic2"
          onChange={(e) => changeValue(e.target.name, e.target.value)}
        />
      </div>
    </div>
  );
}
