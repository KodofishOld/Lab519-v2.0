import React from  'react'
import Caro from "../components/index/Carousel/Caro";
import './Layout.css'
import Groups from "../components/index/Group/Group";
import Nav from "../components/index/Nav/Nav";
import Lab from "../components/index/Lab/Lab";
import Team from "../components/index/Team/Team";
import Log from "../components/index/Log/Log";
import Footer from "../components/index/Footer/Footer";
import Tea from "../components/index/teacher/Tea";

class Layouts extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Caro />
                </div>
                <div>
                    <Groups/>
                </div>
                <div>
                    <Nav/>
                </div>
                <div>
                    <Lab/>
                </div>
                <div>
                    <Team />
                </div>
                <div>
                    <Log />
                </div>
                <div>
                    <Tea />
                </div>
                <div>
                    <Footer/>
                </div>
            </div>

        )
    }
}
export default Layouts