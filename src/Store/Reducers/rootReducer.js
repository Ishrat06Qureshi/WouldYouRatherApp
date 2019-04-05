import { combineReducers } from "redux"
import getQuestionReducer from "../Reducers/getQuestions";
import getUserReducer from "../Reducers/getUserReducer";
import loadingReducer from "../Reducers/loadingReducer";
import authUserReducer from "../Reducers/authUserReducer";
import  loginStatusReducer from "../Reducers/loginStatusReducer" 

const rootReducer = combineReducers({
    getQuestionReducer,
    getUserReducer,
    loadingReducer,
    authUserReducer,
    loginStatusReducer,
})
export default rootReducer
