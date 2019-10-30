import React from "react";
import  './Tea.css'

const p1 = require('./image/p1.jpg');
const p2 = require('./image/p2.jpg');
const p3 = require('./image/p3.jpg');
class Tea extends React.Component{
    render() {
        return(
            <div className="testimonial-section">
                <p>指導教授</p>
                <div className="testimonial-pics">
                    <img src={p1} />
                    <img src={p2} />
                    <img src={p3} />
                </div>
                <div className="testimonial-contents">
                    <div className="testimonial active" id="test-1">
                        <span className="description">陸子強 / 蔡英德 / 蔡奇瑋</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tea