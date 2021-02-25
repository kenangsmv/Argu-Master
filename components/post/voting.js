import React from 'react'

export default function voting({data}) {
    return (
        <div className={"votingContainer column center"}>
            
            <div className={"votingSide1 center"}> {data.topic1} </div>
            <div className="side1">
            <div className="side1Graph"></div>
            </div>
            <span>vs</span>
            <div className={"side2"}>
            <div className={"side2Graph"}></div>
            </div>
            <div className={"votingSide2 center"}> {data.topic2}
            </div>
        </div>
    )
}
