import React,{Component} from 'react';
import Nodge from '../Navigation/Nodge/Nodge';
import './Results.css';
import Result from './Result/Result';
import {Link} from 'react-router-dom';
import Button from '../Navigation/Button/Button';
import Footer from '../Navigation/footer/footer';

class Results extends Component{
    render(){
    return(
        <div>
            <Nodge/>
        <div className="Results">
            <h1>Great <span role="img" aria-label="A Rocket Emoji">🚀</span></h1>
            <h3 style={{marginTop:"20px",color:"#949999"}}>{this.props.score}</h3>
        </div>
        <div className="score-card" >
            {this.props.data.peoples.map(each=><Result key={String(each.score)+each.name+String(Math.random())} name={each.name} score={each.score}/>)}
        </div>
        
        <div className="btnHolder">
            <Link to={"/createid"} >
                <Button onc={()=>null} value="Create Your Own"/>
            </Link>
        </div>
        <Footer/>
        </div>
    );
    }
}

export default Results;