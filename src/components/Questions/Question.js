import React from 'react';
import Options from './Options/options';
import './Question.css';

const question=(props)=>{
    const classes=props.stop?"each_question disable":"each_question";
    return(
        <div  className={classes}>
            <h1>{props.question}</h1>
            <Options ans={props.ans} setAnswers={props.setAnswers}  data={props.options}/>
        </div>
    )
}

export default question;