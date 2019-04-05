 import React , { Component } from "react" ;
import SaveAnswer from "../Store/Actions/AsynOpSaveAnswer";
import {  connect } from "react-redux";
import { withRouter } from "react-router-dom";
import store from "../Store/store"
import { Button } from "react-bootstrap"
 class ToVote extends Component {
    state = {
         selectedOption : "",
         toShowPoll:false,
    }

     handleOption = ( event ) =>{
          
          this.setState(({
               selectedOption: event.target.value
          }))
     }
   
  toSubmitAnswer = ( event , Question ) =>{
            event.preventDefault()      
            const { dispatch  , authUser , history} = this.props
            const { selectedOption } = this.state
            console.log( selectedOption.length)
            if (selectedOption.length>0){
            dispatch(SaveAnswer( dispatch, authUser,Question.id, selectedOption ))
            history.push(`/PollDetails${Question.id}`)}
            else {
                 alert("please pick one option to further proceed")
            }
            console.log(" after giving vote" ,store.getState())
       


     
    }
     render(){
    
      const { Question } = this.props.history.location.state 
     
      return(<div style ={{ marginLeft:"350px",marginTop:"10px"}}>
         

               { 
                    Question ?
                    
                    <div>   
                          <h4> Would you Rather be</h4>
                         <form>
                              <div>
                                   <input type = "radio" value = "optionOne"
                                   name ="vote" onChange = {this.handleOption}></input>
                                   <label> { Question.optionOne.text }</label>
                              </div> 
                              <div>
                                   <input type = "radio" value = "optionTwo"
                                   name="vote"onChange = {this.handleOption} ></input>
                                   <label>{ Question.optionTwo.text }</label>   </div>
                              <div>
                              <Button  
                              onClick = {( event )=>this.toSubmitAnswer( event, Question )}
                              variant="outline-warning"  style = {{
                                   marginTop : '20px'
                                 }}>
                              Submit 
                              </Button>
                              
                              </div>
                              </form>
                    </div>: null}
     
               </div>)
               }
          }
const mapStateToProps = ( state ) =>{
     console.log(" after giving vote" ,state.getQuestionReducer.Questions)
     return({
          authUser:state.authUserReducer.authUser,
     })
}
 export default withRouter(connect(mapStateToProps,null)(ToVote))