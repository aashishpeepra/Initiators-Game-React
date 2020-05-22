import React, { Component } from 'react';
import './Create_id.css';
import mountain from '../../Assessts/images/mountain.jpeg';
import Button from '../../components/Navigation/Button/Button';
import mobileDetect from 'mobile-detect';
import axios from 'axios';
import {Link} from 'react-router-dom';
import logo from '../../Assessts/images/triangle.png';
// import Footer from '../../components/Navigation/footer/footer';

class CreateId extends Component {
    state={
        name:"",
        phone:"",
        id:"",
        ok:false,
        showLoad:false
        
    }
    submitForm=()=>{
        if(this.state.name!=='' && this.state.phone!=='' && this.state.phone.length>9 && String(parseInt(this.state.phone)).length>9 )
        {
         
            this.setState({showLoad:true});
            const formatData={
                Name:this.state.name,
                Phone:this.state.phone,
                Id:this.state.name.substr(0,3).trim()+Math.floor(Math.random()*100000).toString(),
                Device:this.state.device,
                Ip:this.state.ip,
                Location:this.state.location
            }
            axios.put(`https://theinitiatorsgame.firebaseio.com/users/${formatData.Id}.json`,formatData).then(res=>{
                this.setState({showLoad:false,ok:true})
                this.props.share(formatData.Name,formatData.Id);
                this.props.propData.history.push("/fillsurvey");
        }
            )

        }
        else{
           
        }
        // if(this.state.name==='' || this.state.phone==='' || this.state.phone.length<10)
        // alert("Fill Proper Details")
        // else
        // alert("Doe")
        // this.setState({ok:true})
    }
    returnDateTime(){
        const currentdate = new Date(); 
        let datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        return datetime;
    }
    setEvent=(val)=>{
        this.setState({[val.target.name]:val.target.value});
    }
    componentDidMount(){
        const device=new mobileDetect(window.navigator.userAgent);
        this.setState({device:{ua:device.ua,width:device.maxPhoneWidth}})
        axios.get('https://api.ipify.org?format=json').then(data=>{
            this.setState({ip:{ip4:data.data.ip}})
            axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=ef0487b009ee4ecca982ee7caa3d65df&ip=${data.data.ip}`).then(data=>{
                this.setState({location:data.data})
            });
        });
    }
    linkDisable(e){
        e.preventDefault();
    }
    render() {
        return (
            <div>
            {this.state.showLoad?
                <div className="loading">
                    <div className="imageBox">
                        <img src={logo} alt="Slow Net"/>
                    </div>
                    </div>
                :null}
            <section className="section_createid" style={{display:this.state.showLoad?"none":"inline-block"}}>
                
                <header className="createid_header">
                    <div className="createid_imagebox">
                        <img src={mountain} alt="A mountain Box" />
                    </div>
                    <div className="createid_heading">
                        <h1 >T.I.G</h1>
                    </div>
                </header>
                <div className="enterFields">
                    <h1>Create Account</h1>
                    <form>
                        <fieldset>
                           <legend>Name</legend>
                            <input maxLength={16} type="text" onChange={this.setEvent.bind(this)} value={this.state.name} name="name" required placeholder="Enter Name" id="nameBox"/>
                        </fieldset>
                        <fieldset>
                            <legend>Phone</legend>
                            <input maxLength={13} type="text" name="phone" onChange={this.setEvent.bind(this)} value={this.state.phone} required placeholder="Enter Number" id="phoneBox"/>
                        </fieldset>
                    </form>
                    <div style={{marginTop:"20px"}}>
                                <Link to={this.state.ok===false?"/createid":"/fillsurvey"}>
                                <Button onc={this.state.ok===false?this.submitForm:()=>null} small={true} value="Create"/>
                                </Link>
                    </div>
                    <div className="or">
                </div>
                <div>
                    <h1>OR</h1>
                    </div>
                    <div className="playId">
                        <h1>Enter the ID</h1>
                        <form>
                            <fieldset>
                                <input type="text" onChange={this.setEvent.bind(this)} value={this.state.id} name="id" placeholder="Enter Id" id="idBox"/>
                            </fieldset>
                        </form>

                        <div style={{marginTop:"20px"}}> 
                        <Button onc={()=>null}  small={true} value="Start"/>
                    </div>
                    </div>
                   
                </div>
            </section>
            
            </div>
        );
    }
}

export default CreateId;