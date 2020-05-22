import React from 'react';
import './Loader.css';
import logo from '../../../Assessts/images/triangle.png';
import {Link} from 'react-router-dom';


export default (props)=>{
    return(
        <Link to={'/'}>
        <div className="loading">
            <div className="imageBox">
                <img src={logo} alt="Your Internet is Slow"/>
            </div>
        </div>
        </Link>
    );
}