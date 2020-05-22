import React from 'react';
import './Button.css';

const button=(props)=>{
    const cls=props.small?"btn btn-small":"btn";
    return(
        <div onClick={()=>props.onc()} className={cls}>
            {props.value}
        </div>
    )
}
export default button;