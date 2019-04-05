import React from "react";
import ShowQuestion from "./ShowQuestion";

const AnsweredQuestion = ( props ) =>{
 const { answeredQuestion } = props
 return(<div style = {{  marginLeft:"80px" , marginTop:"15px"}}>
      <ul>
          { answeredQuestion.map( ( Question) =>
          <ShowQuestion Question={ Question} pathname="/leaderboard"/>
          )}
      </ul>
 </div>)
}
export default AnsweredQuestion