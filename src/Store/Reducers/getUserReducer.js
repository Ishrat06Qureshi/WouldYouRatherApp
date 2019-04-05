import * as ActionTypes from "../Actions/actionTypes";
function getUserReducer (state={},action)
{ 
    switch(action.type)
    {
        case ActionTypes.GET_USER:
                return {...state,
                    Users:action.user_Data}

        case ActionTypes.SAVE_USER:
                const {authUser, qid,answer} = action 
                return ( { Users:{
                    ...state.Users,
                    [authUser]:{
                        ...state.Users[authUser],
                        answers:{...state.Users[authUser].answers,[qid]:answer}
                        
                    }
                    }})
        case ActionTypes.SAVE_USERQUESTION:{
            console.log(action)
            return( { Users:{
                ...state.Users,
                [action.author]:{
                    ...state.Users[action.author],
                questions:[...state.Users[action.author].questions,action.id]
            }
            }})
        }
        
       
        default:
         return {...state}
    }

}
export default getUserReducer