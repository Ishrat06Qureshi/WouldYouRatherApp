import React , { Component } from "react";
import { connect } from "react-redux";
import { Card , ProgressBar } from "react-bootstrap"


class PollDetails extends Component{

percentage( votes, totalVotes ){
    return( (( votes / totalVotes ) * 100).toFixed(2) )
         }

render(){
     const { id } = this.props.match.params
     const { Questions , Users , authUser } = this.props
     const Question =Questions[id]
    //  const User = Users[authUser]
     const  { avatarURL }  = Users[Question.author]
     const totalVotes = Question.optionOne.votes.length + Question.optionTwo.votes.length
     const optionOneVotes = Question.optionOne.votes.length;
     const optionTwoVotes = Question.optionTwo.votes.length;
    //const selectedAnswer = User.answers[id]
     const percentageOptionOne = this.percentage( optionOneVotes, totalVotes )
     const percentageOptionTwo = this.percentage( optionTwoVotes, totalVotes )
   

     return(<div style = {{ display :"flex" , justifyContent:"center"}}>
         { console.log(avatarURL)}
         <Card style = {{ width:"200px" ,height: "230px"}}>
               <Card.Img src = {`${avatarURL}`} style = {{ width:"200px", height:"255px"}} alt="author"></Card.Img>
           </Card>
           <div>
           <Card  style = {{ width:"500px", marginBottom:"20px"}}>
               <Card.Header> {Question.author} asks </Card.Header>
                 <Card.Title style = {{ textAlign:"center"}} >Would you rather {Question.optionOne.text} </Card.Title>
                    <Card.Body  >
                        <ProgressBar now={percentageOptionOne} label = { `${percentageOptionOne}`} />
                        <Card.Text style = {{ textAlign:"center"}} > {optionOneVotes} out of {totalVotes} </Card.Text>
                        <Card.Title style = {{ textAlign:"center"}} > Would you rather {Question.optionOne.text} </Card.Title>
                        <ProgressBar now={percentageOptionTwo} label = { `${percentageOptionTwo}`} />
                        <Card.Text style = {{ textAlign:"center"}} > {optionTwoVotes} out of {totalVotes} </Card.Text>
                    </Card.Body>
        </Card>

           </div>
           
      
     </div>
     )} 
}

const mapStateToProps = ( state ) => {
    return({
        authUser:state.authUserReducer.authUser,
        Users:state.getUserReducer.Users,
        Questions:state.getQuestionReducer.Questions
    })
}
export default connect(mapStateToProps,null)(PollDetails)