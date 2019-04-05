
import * as ActionTypes from "./actionTypes";

const saveUser=(authUser, qid,answer) =>{
    // console.log("in saveUser",authUser,qid,answer)
    return({
        type:ActionTypes.SAVE_USER,
        authUser,
        qid,
        answer,
    })
    
}
export default saveUser
