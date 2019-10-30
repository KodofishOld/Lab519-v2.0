import React from "react";
import './Group.css'
import Temp from "./Temp/Temp";
import Hum from "./Hum/Hum";
import Ele from "./Ele/Ele";
import Gas from "./Gas/Gas";
import Listview from "./List/List";

class Groups extends React.Component{
    render() {
        return(
                <div className="Groups">
                    <div>
                        <Temp />
                    </div>
                    <div>
                        <Hum />
                    </div>
                    <div>
                        <Ele />
                    </div>
                    <div>
                        <Gas />
                    </div>
                    <div>
                        <Listview />
                    </div>
                </div>
        )
    }
}
export default Groups;