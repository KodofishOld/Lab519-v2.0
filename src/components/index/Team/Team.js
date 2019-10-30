import React from "react";
import './Team.css'

const Lab = require('./image/Lab.png');
class Team extends React.Component{
    render() {
        return(
            <div className="Team">
                <img src={Lab} />
                <p>本實驗室提供研究生與大學部學生多媒體應用之設備與實作場所，<br/>為一個開放且友善的空間，讓學生們可以在此互相討論及實作課業。</p>
            </div>
        )
    }
}
export default Team