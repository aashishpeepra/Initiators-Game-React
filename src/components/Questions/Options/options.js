import React from 'react';
import Option from './Option/option';
import './Options.css';

const options=(props)=>{
    let counter=-1;
    return(
        <div className="all_options">
            {props.data.map(each=>{
                counter++;
                let done=true
                if (props.ans===null)
                done=true
                else if(props.ans===counter)
                done=true
                else
                done=false
              
            return <Option click={props.setAnswers} correct={props.ans} tick={done} cross={!done} toc={counter} key={each} value={each}/>
            }) }
        </div>
              
    )
}

export default options;