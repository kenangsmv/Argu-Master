import Vs from '../vs/versus'
import PostCard from '../../post/postcard'
import Comments from '../comments/comment'

export default function DebateRoom() {
    return (
        <div className="middleroom w60 mt1 pl1 pr1 center column">
              
              <div className="topicTitle boxColor border-radius10px w100 p1 text-align-justify mb02">

                 <span className="white mb1 w100"> Hangisi Daha iyi? Xahis edirem suala semimi cavab vererdiniz Tutaq ki siz bir mehsul satirsiniz.
Alıcıya deyirsiniz ki qiymət 1 qepikdir Alıcı deyir ki men bunu dostumdan 4 qepiyə alıram
Bunu şirkət sahibi də deyir,marketing qrup rəhbərləri də
sizcə nə qədər düzgündü?</span>
              </div>
             <Vs></Vs>
             <Comments></Comments>
           
      </div>
    );
  }