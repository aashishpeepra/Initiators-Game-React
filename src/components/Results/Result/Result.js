import React from 'react';
import './Result.css';

const Result=(props)=>{
    return(
        <div className="Result">
            <div className="left">
                {props.name}
            </div>
            <div className="Right">
                {props.score}
            </div>
        </div>
    );
}

export default Result