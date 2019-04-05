import React from "react";
import ShowQuestion from "./ShowQuestion";
 const  UnansweredQues = ( props) =>  { 
        const {
            unAnsweredQuestion
        } = props
        return (<div style = {{  marginLeft:"120px" , marginTop:"15px"}} >
                        { unAnsweredQuestion.map ( ( Question ) =>
                        <ShowQuestion Question = { Question } pathname="/ToVote"/> 
                        )}   
               </div>)
    }
    export default UnansweredQues