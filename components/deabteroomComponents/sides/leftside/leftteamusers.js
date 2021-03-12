import React from 'react'

export default function leftteam({username}) {
    return (
        <div className="row space-between">
            <div className="teamUsers">
                <span>{username}</span>
            </div>
            <div className="teamUsersPoint">
                <span>43</span>
            </div>
        </div>
    )
}
