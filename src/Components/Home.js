import React , {Component} from "react"
import {connect} from "react-redux";
import AnsweredQuestion from "./AnsweredQuestions"
import UnansweredQues from "./UnansweredQues";
import { Tabs,Tab} from "react-bootstrap"
class Home extends Component
{
     
 state = {
   ShowQuestion: true,
 }
 ToShowAnswers = () =>{
     this.setState(({
         ShowQuestion:false,
        }))
 }
 ToShowUnAnswers = () =>{
    this.setState(({
        ShowQuestion:true,
       }))
}
render()
{    
   const { authUser , Users,Questions} = this.props
  console.log(authUser,Users,Questions)
    let answeredQuestion = [];
    let  unAnsweredQuestion = [];
    Object.keys(Questions).filter ( (quesId) => {
       if (quesId in Users[authUser].answers) {
             return answeredQuestion.push( Questions[quesId] )
           }
       else {
            return unAnsweredQuestion.push( Questions[quesId] )
            }
    })
    answeredQuestion=answeredQuestion.sort((a,b)=> b.timestamp - a.timestamp)
    unAnsweredQuestion=unAnsweredQuestion.sort((a,b)=> b.timestamp - a.timestamp)

  
    return (
    <div>
        <div style={{marginLeft:"180px" , marginBottom:"15px"}}>
        <Tabs defaultActiveKey="unansweredQuestions">
            <Tab eventKey="unansweredQuestions" title="Unanswered Questions">
               <UnansweredQues unAnsweredQuestion = { unAnsweredQuestion } />
             </Tab>
            <Tab eventKey="answeredQuestions" title="Answered Questions">
            <AnsweredQuestion  answeredQuestion = { answeredQuestion} />
            </Tab>
        </Tabs>
        </div> 
    </div> )
}
} 

const mapStateToProps = ( state ) => {
    console.log( " in home ",state )
    return ({
        authUser:state.authUserReducer.authUser,
        Users:state.getUserReducer.Users,
        
    })
}
export default connect(mapStateToProps,null)(Home)

