import React from 'react'

export default function rightteam({username}) {
    return (
        <div className="row space-between">
            <div className="teamUsers">
                <span>{username}</span>
            </div>
            <div className="teamUsersPoint">
                <span>0</span>
            </div>
        </div>
    )
}