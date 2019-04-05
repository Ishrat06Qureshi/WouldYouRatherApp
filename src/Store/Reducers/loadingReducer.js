import {LOADING} from "../Actions/actionTypes"

function loadingReducer (state={}, action){
   switch(action.type){
       case LOADING:
       return {isLoading:action.isLoading}
       default:
       return state
   }
}
export default loadingReducer