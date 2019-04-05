import { LOGIN_STATUS } from "../Actions/actionTypes" ;

const loginStatusReducer = (state = {}, action) =>{
   switch(action.type){
       case LOGIN_STATUS:
       return({loginStatus:action.loginStatus})
       default :
       return state
   }
}
export default loginStatusReducer