import * as ActionTypes from "../Actions/actionTypes"
function getQuestionReducer(state={},action)
{
  switch(action.type)
  {
      case ActionTypes.GET_QUESTIONS:
            return {...state,
                  Questions:{...action.questions}}

      case ActionTypes.SAVE_ANSWER:

            const { qid,authUser,answer} = action
          
            return ({Questions:{
              ...state.Questions,
              [qid]:{
                ...state.Questions[qid],

                [answer]:{votes:state.Questions[qid][answer].votes.concat([authUser]),
                  text: state.Questions[qid][answer].text }
              }}
            }) 
        case ActionTypes.SAVE_QUESTION:{
          return ( {  Questions:{
                 ...state.Questions,
                 [action.question.id] : {...action.question},
                }
          } )
        }
     default : 
     return {...state}
  }
}
export default getQuestionReducer