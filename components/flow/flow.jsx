import React from 'react'
import styles from "./flow.module.css"
import PostCard from '../post/postcard.js'
import CreateDebate from '../post/createdebate'
export default function flow() {
    return (
        <div className={styles.flowContainer}>
            <CreateDebate></CreateDebate>
            <PostCard></PostCard>
            <PostCard></PostCard>
            
        </div>
    )
}
