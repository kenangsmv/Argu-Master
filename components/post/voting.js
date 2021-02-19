import React from 'react'

export default function voting() {
    return (
        <div className={"votingContainer column center"}>
            
            <div className={"votingSide1 center"}> Galatasaray </div>
            <div className="side1">
            <div className="side1Graph"></div>
            </div>
            <span>vs</span>
            <div className={"side2"}>
            <div className={"side2Graph"}></div>
            </div>
            <div className={"votingSide2 center"}> Besiktas
            </div>
        </div>
    )
}
