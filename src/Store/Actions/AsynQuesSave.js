import * as API from "../UTILS/API";
import save_Userquestion from "./SaveUserQuestion";
import  save_question from "./SaveQuestion";


const SaveNewQuestion = ( dispatch ,  question ) =>{
  return ( dispatch )=>{
    return API._saveQuestion(question).
    then((formatedquestion)=>{
        dispatch(save_question(formatedquestion))
        dispatch(save_Userquestion(formatedquestion))
    })
  }
}
export default SaveNewQuestion