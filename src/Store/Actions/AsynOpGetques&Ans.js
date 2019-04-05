import * as API from "../UTILS/API"
import  get_user from "./Actions";
import  get_question from "./GetQues";
import loading_Action from "./Loadingaction"
 

const promises =[API._getUsers(),API._getQuestions()]
const fetch_user = ( ) =>
{    return (dispatch)=>{
      dispatch(loading_Action(true))
      return  Promise.all(promises).
      then(([user,questions])=>{
            dispatch(get_user(user));
            dispatch(get_question(questions))
            dispatch(loading_Action(false))
      })
}
}
export default fetch_user