import React,{Component} from 'react';
import './App.css';
import Home from './containers/Home/Home';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateId from './containers/CreateId/Create_id';
import Survey from './containers/Survey/Survey';


import Results from './components/Results/Results';

class App extends Component {
  state={
    loggedIn:false,
    clickGenerate:false,
    questions:[],
    name:"",
    id:""
  }
  shareNameAndId=(name,id)=>{
    this.setState({name:name,id:id});
  }

render(){
  return (
    <BrowserRouter>
    <div className="App">
           <Route path="/results" render={(props)=><Results id={this.state.id} propData={props} /> }/>
            <Route path="/fillsurvey" render={(props)=><Survey data={props} type="normal" name={this.state.name} id={this.state.id} questions={this.state.questions}/>}/>
            <Route path="/createid" exact render={(props)=><CreateId propData={props} share={this.shareNameAndId}/>}/>
            <Route path="/" exact component={Home}/>
            
            
      </div>
    </BrowserRouter>
    
  );
  }
}

export default App;
