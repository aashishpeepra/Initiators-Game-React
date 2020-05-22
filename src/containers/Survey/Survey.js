import React, { Component } from 'react';
import Question from '../../components/Questions/Question';
import Nodge from '../../components/Navigation/Nodge/Nodge';
import './Survey.css';
import Loader from '../../components/Animations/Loader/Loader';
import firebase from '../../firebase';
import { WEBSITE_NAME } from '../../Consts';
import { Link } from 'react-router-dom';
import Button from '../../components/Navigation/Button/Button';
import Results from '../../components/Results/Results';
import Prompt from '../../components/Navigation/Prompts/Prompts';

class Survey extends Component {
    state = {
        questions: [],
        current: 0,
        answers: [],
        type: this.props.type,
        loading: false,
        showResult: false,
        query:"",
        queryData:{},
        name: "you",
        id: "ap2709",
        link: "127.0.0.1:3000/ap2709",
        newSurvey:false,
        resultDisplay:false,
        playerName:"",
        playerScore:0,
        prompt:false
    }
   
    loadSurvey = (type) => {
        const db = firebase.firestore()
        db.collection('Questions').doc(type).get().then(
            querySnapShort => {
                this.setState({ questions: querySnapShort.data()["questions"], link: `${WEBSITE_NAME}/${this.state.id}` })
                // querySnapShort.map(doc=>console.log(doc.id,"=>",doc.data()))
            }
        ).catch(err => alert(err))
    }
    setAnswers = (evn) => {
        if (this.state.current < this.state.questions.length)
            this.setState({ answers: [...this.state.answers, evn], current: this.state.current + 1 });
        
    }
    UNSAFE_componentWillMount() {



        // Checking if new Survey or an old
        if (this.props.data.location.search === "") {
            this.loadSurvey("normal")
            if (this.props.name === "" || this.props.id === "") {
                this.setState({ name: "you", id: "ap2709" });
            }
            else {
                this.setState({ name: this.props.name, id: this.props.id });
            }
            this.setState({useThis:"you"})
        }
        else {
            this.setState({newSurvey:true})
            if (this.props.data.location.search.length > 4 && this.props.data.location.search.startsWith("?id="))
             {
                const data2=this.props.data.location.search.substr(4, this.props.data.location.search.length)
                this.setState({query:this.props.data.location.search.substr(4,this.props.data.location.search.length)})
                const db=firebase.firestore()
                this.setState({prompt:true});
               
                db.collection("user-data").doc(data2).get().then(
                    data=>{
                        
                        this.setState({queryData:data.data(),useThis:data.data().name})
                        this.loadSurvey(this.state.queryData.type)
                    }
                ).catch(error=>{alert("Wrong URL Parameteres")})
            }
            else {
                alert("Wrong Parameteres Passed")
                this.setState({ loading: true })
            }
        }
    }

    copy = () => {
        const e1 = this.textArea;
        e1.select()
        document.execCommand("copy");
    }
    calcScore=(frm,on)=>{
        let count=0
       
        frm.map((each,i)=>{
            if(each===on[i])
            count++
            return false
        })
        return count;
    }
    fillPlayerName=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    startGame=()=>{
        if(this.state.playerName!=="")
        this.setState({prompt:false})
        else
        alert("Enter your Name")
    }
    sendData() {
        this.setState({ loading: true, current: 0 });
        const db = firebase.firestore();
        if (this.state.id !== "ap2709" ||this.state.query!==""  ){
            if(this.state.newSurvey)
            {       
                    let allPeoples=[...this.state.queryData.peoples];
                    const score=this.calcScore(this.state.answers,this.state.queryData.answers);
                    allPeoples.push({name:this.state.playerName,score:score})
                    db.collection("user-data").doc(this.state.queryData.id).set({
                    
                        name:this.state.queryData.name,
                        id:this.state.queryData.id,
                        type:this.state.queryData.type,
                        answers:[...this.state.queryData.answers],
                        peoples:allPeoples
                    
                }).then(data=>{
                    this.setState({resultDisplay:true,playerScore:score});
                }).catch(err=>console.log(err))
           
                
               
            }
            else{
                
            db.collection("user-data").doc(this.state.id).set({
                name: this.state.name,
                id: this.state.id,
                answers: [...this.state.answers],
                type:this.state.type,
                peoples:[]
            }).then(Response => {
                this.setState({ loading: false, showResult: true, link: WEBSITE_NAME +"/fillsurvey/?id=" + this.state.id });
            })
        }
        }
        else
            alert("Reopen Your Link")
    }
    render() {
        if(this.state.prompt){
            return <Prompt startGame={this.startGame} playername={this.state.playerName} setName={this.fillPlayerName} title={`How well do you know ${this.state.queryData.name}`}/>
        }
        if(this.state.resultDisplay){
            let value=""
            if(this.state.id!=="ap2709" && this.state.id!=="" )
                value=this.state.id;
            else if(this.state.query!=="")
                value=this.state.query;
            else
                alert("Dont Cheat With the Boss")
            // return <Route to="/results" redner={()=><Results data={this.props.data}/>}/>
            return <Results score={`${this.state.playerScore} / ${this.state.queryData.answers.length}`}  data={this.state.queryData} id={value}/>
        }
        return (
            <div>
                {this.state.loading ? <Loader /> : null}
                <section className="section_survey" style={{ display: this.state.loading ? "none" : "inline-block" }}>
                    <Nodge />
                    <div className="section_question_holder">
                        {this.state.questions.length === 0 ? <h1>Loading...</h1> :
                            this.state.current < this.state.questions.length ?
                                <Question ans={this.state.query!==""?this.state.queryData.answers[this.state.current]:null} stop={this.state.showResult} setAnswers={(e) => this.setAnswers(e)} question={this.state.questions[this.state.current].ques.replace('@', this.state.useThis.substr(0,this.state.useThis.includes(' ')?this.state.useThis.indexOf(' '):this.state.useThis.length))} options={this.state.questions[this.state.current].options} />
                                : this.sendData()
                        }

                    </div>
                    {this.state.showResult ?
                        <div className="share">
                            <h1>Congratulations<br /> {this.state.name.substr(0, this.state.name.includes(' ') ? this.state.name.indexOf(' ') : this.state.name.split('').length)} 🎉</h1>
                            <h2 style={{ marginTop: "20px" }}>You are all set up!</h2>
                            <h3 style={{ marginTop: "20px" }}>Here's your Link</h3>
                            <form className="survey-form">
                                <fieldset>
                                    <legend>Link</legend>
                                    <textarea ref={(txt) => this.textArea = txt} value={this.state.link} name="Link" id="shareable-link" />
                                </fieldset>
                            </form>
                            <div style={{ marginTop: "20px" }} >
                                <a href={`https://wa.me/?text=${this.state.link}`}>
                                    <Button onc={() => null} small={true} value="Share on Whatsapp" />
                                </a>
                            </div>
                            <div style={{ marginTop: "20px" }} >
                                <Button small={true} onc={this.copy} value="Copy to Clipboard" />
                            </div>
                            <div style={{ marginTop: "20px" }} >
                                <Link to={`/createid`}>
                                    <Button small={true} onc={() => null} value="Create a new ID" />
                                </Link>

                            </div>
                        </div> : null
                    }
                </section>
            </div>
        );
    }
}

export default Survey;