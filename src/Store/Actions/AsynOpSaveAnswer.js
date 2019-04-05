 import * as API from "../UTILS/API";
import saveAnswer from "./SAVEANSWER";
import  saveUser from "./SAVEUSER.js"


function SaveAnswer( dispatch,authedUser, qid, answer ){
    console.log("in SaveAnswer",authedUser, qid, answer)
    return (dispatch)=>{

    return API._saveQuestionAnswer( {authedUser, qid, answer}).
    then(()=>{
    dispatch( saveAnswer ( authedUser, qid, answer));
    dispatch( saveUser ( authedUser,qid,answer));})
}

} 

export default SaveAnswer