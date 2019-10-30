import React from "react";
import './Log.css'

const Logs = require('./image/ACM.png');
class Log extends React.Component{
    render() {
        return(
            <div className="log">
                <img src={Logs} />
            </div>
        )
    }
}
export default Log;