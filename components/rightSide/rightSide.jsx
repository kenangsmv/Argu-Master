import React from 'react'
import styles from "./rightSide.module.css"
import Trends from '../Trends/trendsBar'
import User1 from '../../images/user1.jpg'
import User2 from '../../images/user2.jpg'
import User3 from '../../images/user3.jpg'


export default function rightSide() {
    return (
        <div className={styles.rightContainer}>
            
            <div className={styles.top}>
                    <div className={"winners column center box-shadow"}>
                        
                        <div className={"winners-tag between w100 row"}>
                             <h5 className={"p1"}>Most Winners</h5>
                            
                             <h6 className={"p1 pr1"}>See All</h6>
                        </div>

                        <div className={"winners-list"}>
                        <img className={"image"} src={User3} alt=""/>
                                <img className={"image"} src={User1} alt=""/>
                                <img className={"image"} src={User2} alt=""/>
                                <img className={"image"} src={User3} alt=""/>
                        </div>

                    </div>


            </div>
            <div className={styles.bottom}>
               
               <Trends></Trends>
               
            </div>
            
        </div>
    )
}
