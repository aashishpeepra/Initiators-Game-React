import React, { Component } from 'react';
import './Home.css';
import triangle from '../../Assessts/images/triangle2.png';
import {Link} from 'react-router-dom';
import Footer from '../../components/Navigation/footer/footer';
import Button from '../../components/Navigation/Button/Button';


import Axios from 'axios';
class Home extends Component {
    componentDidMount(){
        // Axios.get("").then(data=>);
    }
    render() {
     
        return (
            <div>
                <section id="section1" className="section1">
                    <div className="heading">
                        <h1>
                            The Initiators Games
                        </h1>
                    </div>
                    <div className="imageBox">
                        <img src={triangle} alt="Triangle Logo"/>
                    </div>
                    <div className="info">
                        <p>The Initiators is a group of innovative, efficient young minds who put their efforts to
                            resolve the problems of the society and bring a change for good.
                    </p>
                    </div>
                    <div className="buttonBox">
                        <Link  to={'/createid'}  ><Button onc={()=>null} value="Lets Play"/></Link>
                    </div>
                   
                </section>
                <Footer/>
            </div>
        );
    }
}

export default Home;
