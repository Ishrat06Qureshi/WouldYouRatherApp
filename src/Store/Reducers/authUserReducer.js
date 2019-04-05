import { AUTH_USER } from  "../Actions/actionTypes"

const authUserReducer = (state = {}, action)=>{
  switch(action.type){
      case AUTH_USER:
      return( {authUser:action.authUser})
        default:
        return state
  }
}
export default authUserReducer