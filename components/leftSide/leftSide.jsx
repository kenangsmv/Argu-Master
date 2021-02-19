import React from 'react'
import styles from "./leftSide.module.css"
import News from  '../../icons/news-feed.svg'
import Messages from  '../../icons/message.png'
import Watch from  '../../icons/watch.png'
import MarketPlace from  '../../icons/marketplace.png'
import Fundraiser from  '../../icons/fundraiser.png'
import Pages from  '../../icons/pages.png'
import Groups from  '../../icons/groups.png'
import Events from  '../../icons/events.png'
import Saved from  '../../icons/bookmark.png'


export default function leftSide() {
    return (
        <div className={styles.containerLeft}>
            <div className="leftsideSticky">
                <div className={"LeftFirstBox column"}>
                        <div className={"LeftSubMenu row test"}>
                        <img  className="icons" src={News} alt=""/>
                        <span>News Feed</span>
                        </div>
                        <div className={"LeftSubMenu row"}>
                        <img  className="icons" src={Messages} alt=""/>
                        <span>Messages</span>
                        </div>
                        <div className={"LeftSubMenu row"}>
                        <img className="icons" src={Watch} alt=""/>
                        <span>Watch</span>
                        </div>
                        <div className={"LeftSubMenu row"}>
                        <img className="icons" src={MarketPlace} alt=""/>
                        <span>Marketplace</span>
                        </div>
                </div>

                <div className={"LeftSecondBox center column"}>
                    <h4 className="explore">Explore</h4>
                        <div className={"LeftSubMenu row"}>
                        <img  className="icons" src={Fundraiser} alt=""/>
                        <span>Fundraiser</span>
                        </div>
                        <div className={"LeftSubMenu row"}>
                        <img  className="icons" src={Pages} alt=""/>
                        <span>Pages</span>
                        </div>
                        <div className={"LeftSubMenu row"}>
                        <img className="icons" src={Groups} alt=""/>
                        <span>Groups</span>
                        </div>
                        <div className={"LeftSubMenu row"}>
                        <img className="icons" src={Events} alt=""/>
                        <span>Events</span>
                        </div>
                        <div className={"LeftSubMenu row"}>
                        <img className="icons" src={Saved} alt=""/>
                        <span>Saved</span>
                        </div>
                        <h4 className="explore">See more</h4>
                </div>
         </div>
            
          
        </div>
    )
}
