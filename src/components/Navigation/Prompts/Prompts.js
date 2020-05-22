import React,{Component} from 'react';
import Nodge from '../Nodge/Nodge';
import './Prompts.css';
import Button from '../Button/Button';

class Prompts extends Component{
    state={
        name:"",
    }
    changeHandler(e){
        this.setState({[e.target.name]:e.target.value})
        this.setState({toPass:()=>this.props.setName(e.target.value)});
    }
    render(){
        console.log(this.state.name)
    return(
        <div>
            <Nodge/>
        <div className="prompt ">
           
            <h1>{this.props.title}</h1>
            <h2 style={{marginTop:"15vh"}}>Enter Your Name</h2>
            <div className="enterFieldsX">
            <form>
                <fieldset>
                    <input type="text" required placeholder="Enter Your Name" value={this.props.playername} onChange={this.props.setName.bind(this)} name="playerName"/>
                </fieldset>
            </form>
            <div style={{marginTop:"30px"}}>
                <Button onc={this.props.startGame} value="Lets Start"/>
            </div>
            </div>
        </div>
        </div>
    )
    }
}
export default Prompts