import React from "react";
import Link from "next/link"
import {Button} from "@material-ui/core"

export default function voting({ data }) {
  return (
    <div className={"votingContainer space-between center"}>
    <div className="row">
    <div className={"votingBox1 m1 center"}> technology </div>

<div className={"votingBox2 m1 center"}> trend </div>

    </div>
      <Link href={data.id}>
            <Button variant="contained"  className="voteButton" >
              Join
            </Button>
            </Link>
    </div>
  );
}
