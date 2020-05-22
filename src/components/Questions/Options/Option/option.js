import React, { Component } from 'react';
import './option.css';

import close from '../../../../Assessts/icons/close.png';
import tick from '../../../../Assessts/icons/checked.png';

class option extends Component {
    state={
        checked:false
    }
    toggleCheck=()=>{
        this.setState({checked:true})
        setTimeout(()=>this.props.click(this.props.toc),800);
    }
    render() {
        const toShow=this.props.cross?close:this.props.tick?tick:null;
        return (
            <div  className="each_option" onClick={this.toggleCheck}>
                {(this.state.checked )?
                <div className="check_holder">
                    <img src={toShow}  alt="Checked Icon"/>
                </div>
                :null}
                <img src={this.props.value} alt="Your Internet is slow" />
            </div>
        )
    }

}

export default option;