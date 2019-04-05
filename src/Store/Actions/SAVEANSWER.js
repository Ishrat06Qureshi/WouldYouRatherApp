import  * as actionTypes from "./actionTypes"

const saveAnswer  = (  authUser, qid, answer ) => {
    // console.log("saveAnswer Action", answer,qid,authUser)
    return({
     type:actionTypes.SAVE_ANSWER,
     qid,
     answer,
     authUser,
    })
} 
export default saveAnswer