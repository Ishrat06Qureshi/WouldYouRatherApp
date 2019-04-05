import React, { Component } from "react";
import {Route,Redirect,Switch} from "react-router-dom";
import {connect} from "react-redux"
import Home from "./Components/Home";
import Login from "./Components/LoginPage";
import  LeaderBoard from "./Components/LeaderBoard"
import  NewQuestion from "./Components/NewQuestion"
import fetch_user from "./Store/Actions/AsynOpGetques&Ans"
import NavBar from "./Components/Nav";
import ToVote from "./Components/ToVote"
// import store from "./Store/store"
import PollDetails from './Components/PollDetails';



class App extends Component {
  componentDidMount () {
      const {dispatch} = this.props
      dispatch( fetch_user(dispatch) )
  }

  render() {
    
    const { isLoading , loginStatus , Questions} = this.props
  
    return (
      <div className="App">
          {!isLoading? <NavBar/>
          : null}
          <div>
          
        <Switch>
          <Route  path="/" exact component = { Login } />
              {loginStatus ?
            (<div>
              
              <Route path="/home" 
              render={() => (<Home
              Questions = {  Questions } />)}
               />
              <Route path="/add" component = { NewQuestion } />
              <Route path="/leaderboard" component = { LeaderBoard } />
              <Route path="/ToVote" component = { ToVote } />
              <Route path = "/PollDetails:id" component = { PollDetails }/>
              <Route  render = {  () => {
                return( <p>404 Error</p>)
              }}/>
            </div>):<Redirect to = "/" />}
        </Switch>
          </div>
    </div>
    )}}
 

const mapStateToProps = (state) =>{
    
   return({
     isLoading:state.loadingReducer.isLoading,
     loginStatus:state.loginStatusReducer.loginStatus, 
     Questions:state.getQuestionReducer.Questions,
   })
}

export default connect(mapStateToProps,null)(App)




